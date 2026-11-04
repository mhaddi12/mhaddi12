"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight real-time WebGL 3D sculpture. No external runtime dependency.
 * Rotates in 3D, responds to pointer movement, and pauses when offscreen.
 */
export default function InteractiveOrbit3D({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: true, antialias: true, depth: true, powerPreference: "low-power",
    });
    if (!gl) return;

    const vertexSource = `
      attribute vec3 aPosition;
      attribute float aHue;
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uAspect;
      varying float vHue;
      varying float vDepth;
      void main() {
        float ay = uTime * 0.27 + uPointer.x * 0.65;
        float ax = 0.4 + sin(uTime * 0.22) * 0.12 + uPointer.y * 0.55;
        vec3 p = aPosition;
        p = vec3(cos(ay)*p.x+sin(ay)*p.z, p.y, -sin(ay)*p.x+cos(ay)*p.z);
        p = vec3(p.x, cos(ax)*p.y-sin(ax)*p.z, sin(ax)*p.y+cos(ax)*p.z);
        float z = 5.2 - p.z;
        vec2 screen = p.xy * (3.15 / z);
        screen.x /= uAspect;
        gl_Position = vec4(screen, (p.z / 6.0), 1.0);
        gl_PointSize = clamp(3.8 * (5.2 / z), 1.4, 6.0);
        vHue = aHue;
        vDepth = clamp((p.z + 2.0) / 4.0, 0.0, 1.0);
      }
    `;
    const fragmentSource = `
      precision mediump float;
      varying float vHue;
      varying float vDepth;
      uniform float uPoints;
      void main() {
        if (uPoints > 0.5) {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
        }
        vec3 violet = vec3(0.66, 0.49, 1.0);
        vec3 mint = vec3(0.76, 0.97, 0.59);
        vec3 color = mix(violet, mint, smoothstep(0.2, 0.9, vHue));
        gl_FragColor = vec4(color, mix(0.18, 0.75, vDepth));
      }
    `;
    function compile(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }
    const vs = compile(gl.VERTEX_SHADER, vertexSource);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      return;
    }
    gl.useProgram(program);

    const vertices: number[] = [];
    const lines: number[] = [];
    // Two interwoven toroidal loops plus latitude and longitude ribs.
    const segments = 144;
    const tracks = 24;
    for (let track = 0; track < tracks; track++) {
      const start = vertices.length / 4;
      for (let step = 0; step <= segments; step++) {
        const t = (step / segments) * Math.PI * 2;
        const phase = (track / tracks) * Math.PI * 2;
        const tube = 0.36;
        const major = 1.24;
        const theta = t * 2 + phase;
        const phi = t + phase * 0.35;
        const x = (major + tube * Math.cos(theta)) * Math.cos(phi);
        const y = (major + tube * Math.cos(theta)) * Math.sin(phi);
        const z = tube * Math.sin(theta) + 0.27 * Math.sin(t * 3 + phase);
        vertices.push(x, y, z, track / tracks);
        if (step > 0) lines.push(start + step - 1, start + step);
      }
    }
    const vertexCount = vertices.length / 4;
    const array = new Float32Array(vertices);
    const indices = new Uint16Array(lines);
    const vertexBuffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();
    if (!vertexBuffer || !indexBuffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "aPosition");
    const hue = gl.getAttribLocation(program, "aHue");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(hue);
    gl.vertexAttribPointer(hue, 1, gl.FLOAT, false, 16, 12);
    const timeUniform = gl.getUniformLocation(program, "uTime");
    const pointerUniform = gl.getUniformLocation(program, "uPointer");
    const aspectUniform = gl.getUniformLocation(program, "uAspect");
    const pointsUniform = gl.getUniformLocation(program, "uPoints");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clearColor(0, 0, 0, 0);

    let frame = 0;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;
    let angle = 0;
    let previous = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(bounds.width * dpr));
      const height = Math.max(1, Math.round(bounds.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };
    const render = (now: number) => {
      if (!previous) previous = now;
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (!paused && !reducedMotion.matches) angle += delta;
      resize();
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(timeUniform, angle);
      gl.uniform2f(pointerUniform, pointerX, pointerY);
      gl.uniform1f(aspectUniform, canvas.width / Math.max(1, canvas.height));
      gl.uniform1f(pointsUniform, 0);
      gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);
      gl.uniform1f(pointsUniform, 1);
      gl.drawArrays(gl.POINTS, 0, vertexCount);
      if (visible && !document.hidden && !paused && !reducedMotion.matches) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (visible && !document.hidden) frame = requestAnimationFrame(render);
    };
    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      pointerY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      if (paused || reducedMotion.matches) sync();
    };
    const onLeave = () => {
      pointerX = 0;
      pointerY = 0;
      if (paused || reducedMotion.matches) sync();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) sync();
      else cancelAnimationFrame(frame);
    }, { threshold: 0.05 });
    const resizer = new ResizeObserver(sync);
    resizer.observe(canvas);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerleave", onLeave);
    reducedMotion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizer.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
      reducedMotion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      gl.deleteBuffer(vertexBuffer);
      gl.deleteBuffer(indexBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [paused]);

  return (
    <canvas
      ref={ref}
      className="px-orbit px-orbit-3d"
      aria-label="Interactive three-dimensional rotating orbit sculpture"
      role="img"
    />
  );
}
