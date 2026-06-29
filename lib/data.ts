export const siteConfig = {
  name: 'Muhammad Haddi',
  title: 'Software Engineer | Muhammad Haddi — Lahore, Pakistan',
  description:
    'Muhammad Haddi is a software engineer based in Lahore, Pakistan. He writes Flutter apps for iOS and Android, Node.js backends, and whatever else it takes to ship a working product.',
  url: 'https://haddidev.xyz',
  image: '/profile.png',
  imageAlt: 'Portrait of Muhammad Haddi, Software Engineer',
  email: 'se.haddi1@gmail.com',
  phone: '+92-343-4034159',
  location: 'Lahore, Pakistan',
  github: 'https://github.com/mhaddi12',
  linkedin: 'https://linkedin.com/in/muhammad-haddi',
  adsenseId: 'ca-pub-8385354422515933',
  adsenseSlot: '7216674226',
  googleVerification: 'SNMkAng-hilpmkjLOsL3G4heRZXQ0t8Uxra9sd3WndM',
};

export const heroStats = [
  { n: '3+', l: 'Years' },
  { n: '6+', l: 'Companies' },
  { n: '10+', l: 'Apps shipped' },
];

export const skills = [
  {
    icon: '📱',
    name: 'Mobile Development',
    level: 95,
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Cross-Platform', 'Responsive UI', 'App Store', 'Play Store'],
  },
  {
    icon: '⚙️',
    name: 'State Management',
    level: 90,
    tags: ['Riverpod', 'Provider', 'GetX', 'StateNotifier', 'ValueNotifier'],
  },
  {
    icon: '🖥️',
    name: 'Backend & APIs',
    level: 82,
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth', 'JSON'],
  },
  {
    icon: '☁️',
    name: 'Cloud & Services',
    level: 78,
    tags: ['Firebase', 'AWS SES', 'RevenueCat', 'OneSignal', 'Push Notifications', 'Cloud Messaging'],
  },
  {
    icon: '🏛️',
    name: 'Architecture & Design',
    level: 88,
    tags: ['Clean Architecture', 'MVVM', 'Repository Pattern', 'SOLID', 'Design Patterns'],
  },
  {
    icon: '🔧',
    name: 'Tools & Platforms',
    level: 85,
    tags: ['Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code', 'Xcode', 'Linux'],
  },
];

export const experience = [
  {
    version: 'v6.0 — current',
    date: 'Nov 2025 – Present',
    title: 'Flutter Developer',
    current: true,
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
    description:
      'A CRM app for field teams on Android and iOS. Riverpod under the hood, with push notifications, in-app chat, document uploads and form-based workflows.',
    tags: ['Flutter', 'Riverpod', 'CRM'],
  },
  {
    num: '02',
    name: 'EasyBooks',
    description:
      'A business app where users manage invoices, export PDFs and ZIP files, and unlock premium features through a RevenueCat subscription.',
    tags: ['Flutter', 'RevenueCat', 'PDF'],
  },
  {
    num: '03',
    name: 'Email Campaign Platform',
    description:
      'An email platform built on Node.js, MongoDB and AWS SES. Supports custom sending domains, campaign queues and delivery stats — handles bulk sends without falling over.',
    tags: ['Node.js', 'AWS SES', 'MongoDB'],
  },
  {
    num: '04',
    name: 'Streaming Platform',
    description:
      'A livestreaming app using Agora — users can go live, join streams and do voice or video calls. Built to stay smooth even when the network isn\'t great.',
    tags: ['Flutter', 'Agora SDK', 'Realtime'],
  },
  {
    num: '05',
    name: 'Social Media Application',
    description:
      'A social app with feeds, real-time chat, photo sharing and Firebase auth. One of my first full-feature projects — a lot went wrong and I fixed most of it.',
    tags: ['Flutter', 'Firebase', 'REST API'],
  },
  {
    num: '06',
    name: 'Treasure Hunts',
    description:
      'A location-based treasure hunt app — clues, maps, and a fun UX. Good excuse to properly learn Google Maps in Flutter.',
    tags: ['Flutter', 'Dart', 'Maps'],
  },
];