import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RevealProvider from '@/components/providers/RevealProvider';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import AdSlot from '@/components/sections/AdSlot';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <RevealProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AdSlot />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  );
}
