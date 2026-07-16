export const siteConfig = {
  name: 'Muhammad Haddi',
  title: 'Software Engineer | Muhammad Haddi — Lahore, Pakistan',
  description:
    'Muhammad Haddi is a software engineer based in Lahore, Pakistan. He builds production Flutter apps and Node.js backends, and is currently expanding into AI engineering — LLMs, AI agents, and intelligent backend systems.',
  url: 'https://haddidev.xyz',
  image: '/profile.png',
  imageAlt: 'Portrait of Muhammad Haddi, Software Engineer',
  email: 'se.haddi1@gmail.com',
  phone: '+92-343-4034159',
  location: 'Lahore, Pakistan',
  github: 'https://github.com/mhaddi12',
  linkedin: 'https://linkedin.com/in/muhammad-haddi',
  adsenseId: 'ca-pub-8385354422515933',
  // Create separate ad units in AdSense dashboard for each placement.
  // adsenseSlotFloating and adsenseSlotInline should each be a new ad unit
  // created at https://adsense.google.com/adsense/new/myads/ad-units
  adsenseSlotMain:     '7216674226',
  adsenseSlotFloating: '3967867410',
  adsenseSlotInline:   '9596020073',
  googleVerification: 'SNMkAng-hilpmkjLOsL3G4heRZXQ0t8Uxra9sd3WndM',
};

export const heroStats = [
  { n: '3+', l: 'Years' },
  { n: '6+', l: 'Companies' },
  { n: '10+', l: 'Apps shipped' },
];

export const skills = [
  {
    name: 'Mobile Development',
    status: 'experienced' as const,
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Cross-Platform', 'Responsive UI', 'App Store', 'Play Store'],
  },
  {
    name: 'State Management',
    status: 'experienced' as const,
    tags: ['Riverpod', 'Provider', 'GetX', 'StateNotifier', 'ValueNotifier'],
  },
  {
    name: 'Cloud & Services',
    status: 'experienced' as const,
    tags: ['Firebase', 'AWS SES', 'RevenueCat', 'OneSignal', 'Push Notifications', 'Cloud Messaging'],
  },
  {
    name: 'Tools & Platforms',
    status: 'experienced' as const,
    tags: ['Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code', 'Xcode', 'Linux'],
  },
  {
    name: 'Backend & APIs',
    status: 'learning' as const,
    tags: ['Node.js', 'NestJS', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'JWT Auth'],
  },
  {
    name: 'AI & Infrastructure',
    status: 'learning' as const,
    tags: ['OpenAI API', 'LangGraph', 'AI Agents', 'Vector Databases', 'Docker', 'AWS'],
  },
];

export const experiencedWith = skills.filter((s) => s.status === 'experienced');
export const currentlyLearningStack = skills.filter((s) => s.status === 'learning');

export const learningJourney = [
  { name: 'LLM Fundamentals', note: 'How large language models actually work under the hood.' },
  { name: 'Prompt Engineering', note: 'Writing prompts that produce reliable, structured results.' },
  { name: 'OpenAI API', note: 'Chat completions, streaming, tool calling, structured outputs.' },
  { name: 'AI Agents', note: 'Giving models tools and letting them plan multi-step tasks.' },
  { name: 'LangGraph', note: 'Building stateful, controllable agent workflows.' },
  { name: 'RAG', note: 'Grounding model responses in real, retrievable data.' },
  { name: 'Vector Databases', note: 'Embeddings, similarity search, and retrieval pipelines.' },
  { name: 'MCP', note: 'Connecting models to tools and data through a standard protocol.' },
  { name: 'Function Calling', note: 'Letting models trigger real code instead of just text.' },
  { name: 'Structured Outputs', note: 'Getting predictable, typed data back from a model.' },
  { name: 'AI Automation', note: 'Chaining models and APIs into working automations.' },
  { name: 'Node.js & NestJS', note: 'The backend layer that ties AI features into real products.' },
];

export const whatImBuilding = [
  {
    name: 'AI Chat Applications',
    icon: '💬',
    status: 'In progress',
    description: 'Chat interfaces backed by the OpenAI API — streaming responses, memory, and context handling.',
  },
  {
    name: 'AI Agents',
    icon: '🧭',
    status: 'Experimenting',
    description: 'Small agents that use tools and take multi-step actions, built with LangGraph.',
  },
  {
    name: 'AI-powered SaaS Tools',
    icon: '🧩',
    status: 'In progress',
    description: 'Prototyping SaaS features that use LLMs for real product functionality, not just a chatbot bolt-on.',
  },
  {
    name: 'Backend APIs',
    icon: '🛠️',
    status: 'In progress',
    description: 'Node.js and NestJS services designed to sit behind both mobile apps and AI features.',
  },
  {
    name: 'Automation Systems',
    icon: '⚙️',
    status: 'Experimenting',
    description: 'Scripts and small services that chain APIs together to remove repetitive manual work.',
  },
  {
    name: 'Mobile + AI Integrations',
    icon: '📱',
    status: 'Exploring',
    description: 'Connecting Flutter apps directly to AI backends — the overlap between my two skill sets.',
  },
];

export const services = [
  {
    name: 'Flutter App Development',
    description: 'Production-ready iOS and Android apps built from scratch, end to end.',
  },
  {
    name: 'Cross-platform Mobile Apps',
    description: 'One codebase, native feel on both App Store and Play Store.',
  },
  {
    name: 'Backend API Development',
    description: 'Node.js and MongoDB APIs built to support a mobile app or standalone product.',
  },
  {
    name: 'Firebase Integration',
    description: 'Auth, Firestore, push notifications and cloud messaging wired up correctly.',
  },
  {
    name: 'REST APIs',
    description: 'Clean, documented endpoints that are easy for a frontend team to consume.',
  },
  {
    name: 'AI API Integration',
    description: 'Wiring the OpenAI API and similar LLM providers into an existing app or backend.',
  },
  {
    name: 'SaaS MVP Development',
    description: 'Taking an early product idea to a working, shippable first version.',
  },
  {
    name: 'App Performance Optimization',
    description: 'Finding and fixing what makes a Flutter app feel slow or janky.',
  },
];

export const skillsIntro = 'What I reach for when I\'m building something.';

export const experience = [
  {
    version: 'v7.0 — current focus',
    date: 'Alongside client work',
    title: 'Learning AI Engineering',
    current: true,
    company: 'Self-directed',
    bullets: [
      'Studying LLM fundamentals, prompt engineering and the OpenAI API in depth.',
      'Building small AI agents with LangGraph — tool use, memory, multi-step planning.',
      'Learning RAG, vector databases and MCP to connect models to real data and tools.',
      'Deepening Node.js and NestJS so I can ship the backend layer AI features need.',
    ],
  },
  {
    version: 'v6.0',
    date: 'Nov 2025 – Present',
    title: 'Flutter Developer',
    current: false,
    company: 'Omnisoft · Lahore',
    bullets: [
      'Writing Flutter apps end-to-end — architecture, UI, state, the whole thing.',
      'Wired up RevenueCat subscriptions with free, Standard and Premium tiers, including paywall logic and access control.',
      'Built PDF invoice generation and ZIP export so users can download everything straight from the app.',
      'Set up a Node.js + MongoDB email platform on AWS SES — handles bulk sends, custom domains and delivery tracking.',
    ],
  },
  {
    version: 'v5.0',
    date: 'Aug 2025 – Nov 2025',
    title: 'Flutter Developer',
    current: false,
    company: 'Optima Geeks · Lahore',
    bullets: [
      'Built a CRM app for Android and iOS — forms, client records, task workflows.',
      'Used Riverpod throughout and kept the state clean across some pretty involved screens.',
      'Added push notifications, in-app chat and document upload — things the client actually asked for.',
      'Handled the Play Store and App Store releases myself, including update submissions.',
    ],
  },
  {
    version: 'v4.0',
    date: 'Jun 2025 – Aug 2025',
    title: 'Flutter Developer',
    current: false,
    company: 'Digixvally LLC · Lahore',
    bullets: [
      'Got Agora working for video calls, voice calls and live streams — trickier than it looks.',
      'Built the Maps side of the app: live routes, custom markers, real-time location.',
      'Connected the app to the backend APIs and put work into making the UI feel fast.',
    ],
  },
  {
    version: 'v3.0',
    date: 'Feb 2024 – Jun 2025',
    title: 'Flutter Developer',
    current: false,
    company: 'BitLogicx · Lahore',
    bullets: [
      'Built a social app with feeds, follows and real-time chat using Flutter and Firebase.',
      'Wrote the auth flow, profile management, photo uploads and content sharing.',
      'Added real-time features and cleaned up a codebase that had gotten a bit messy.',
    ],
  },
  {
    version: 'v1.0 — first release',
    date: 'Jan 2023 – Jun 2023',
    title: 'Junior Flutter Developer',
    current: false,
    company: 'XIIst · Lahore',
    bullets: [
      'Picked up tickets, built screens and kept things from breaking.',
      'Hooked up REST APIs and helped when the team upgraded the Flutter SDK.',
      'Mostly learning — partly contributing — alongside the senior devs.',
    ],
  },
];

export const projects = [
  {
    num: '01',
    name: 'Optima CRM Mobile',
    image: '/projects/optima-crm.svg',
    icon: '📋',
    accent: 'from-violet to-cyan',
    description:
      'A CRM app for field teams on Android and iOS. Riverpod under the hood, with push notifications, in-app chat, document uploads and form-based workflows.',
    challenge: 'Field teams needed one app for client records, task workflows and document handling — offline-friendly and fast.',
    solution: 'Built a Riverpod-based Flutter app with structured forms, in-app chat and document upload, backed by a clean repository layer.',
    impact: 'Replaced a paper-and-spreadsheet process with a single mobile workflow the whole field team now uses daily.',
    tags: ['Flutter', 'Riverpod', 'CRM'],
  },
  {
    num: '02',
    name: 'EasyBooks',
    image: '/projects/easybooks.svg',
    icon: '📒',
    accent: 'from-cyan to-violet',
    description:
      'A business app where users manage invoices, export PDFs and ZIP files, and unlock premium features through a RevenueCat subscription.',
    challenge: 'Users needed to generate and export professional invoices, with a sustainable way to monetize premium features.',
    solution: 'Implemented PDF invoice generation, bulk ZIP export, and RevenueCat-powered subscription tiers with paywall logic.',
    impact: 'Gave the product a working monetization model alongside a feature users rely on for everyday invoicing.',
    tags: ['Flutter', 'RevenueCat', 'PDF'],
  },
  {
    num: '03',
    name: 'Email Campaign Platform',
    image: '/projects/email-platform.svg',
    icon: '✉️',
    accent: 'from-violet-deep to-violet',
    description:
      'An email platform built on Node.js, MongoDB and AWS SES. Supports custom sending domains, campaign queues and delivery stats — handles bulk sends without falling over.',
    challenge: 'Needed to send high-volume email campaigns reliably, with custom domains and visibility into delivery.',
    solution: 'Built a Node.js and MongoDB backend on AWS SES with queued sending, custom domain support and delivery tracking.',
    impact: 'Handles bulk campaign sends in production without dropped messages or domain reputation issues.',
    tags: ['Node.js', 'AWS SES', 'MongoDB'],
  },
  {
    num: '04',
    name: 'Streaming Platform',
    image: '/projects/streaming.svg',
    icon: '🎙️',
    accent: 'from-cyan to-violet-deep',
    description:
      'A livestreaming app using Agora — users can go live, join streams and do voice or video calls. Built to stay smooth even when the network isn\'t great.',
    challenge: 'Live video, voice calls and streaming all needed to work smoothly, even on unreliable mobile networks.',
    solution: 'Integrated Agora for video/voice/live streaming and tuned reconnection and buffering behavior for weak connections.',
    impact: 'Delivered a livestreaming experience that stays usable under real-world network conditions, not just on Wi-Fi.',
    tags: ['Flutter', 'Agora SDK', 'Realtime'],
  },
  {
    num: '05',
    name: 'Social Media Application',
    image: '/projects/social.svg',
    icon: '💬',
    accent: 'from-violet to-violet-deep',
    description:
      'A social app with feeds, real-time chat, photo sharing and Firebase auth. One of my first full-feature projects — a lot went wrong and I fixed most of it.',
    challenge: 'Build a full social feed, chat and photo-sharing experience as an early full-feature project.',
    solution: 'Used Flutter and Firebase for auth, real-time chat and content sharing, iterating hard on what didn\'t work.',
    impact: 'The project that taught me most of what I now rely on for structuring a Flutter codebase.',
    tags: ['Flutter', 'Firebase', 'REST API'],
  },
  {
    num: '06',
    name: 'Treasure Hunts',
    image: '/projects/treasure-hunts.svg',
    icon: '🗺️',
    accent: 'from-violet-deep to-cyan',
    description:
      'A location-based treasure hunt app — clues, maps, and a fun UX. Good excuse to properly learn Google Maps in Flutter.',
    challenge: 'Wanted a location-based game with clues and maps that felt fun rather than just functional.',
    solution: 'Built custom map markers, clue cards and route logic on top of Google Maps in Flutter.',
    impact: 'A solid, working reference for Google Maps integration I\'ve reused on later projects.',
    tags: ['Flutter', 'Dart', 'Maps'],
  },
];
