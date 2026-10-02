/**
 * ---------------------------------------------------------------------------
 *  DATA LAYER — single source of truth for the site.
 *
 *  Content sourced from:
 *    · the existing portfolio (../portfolio) — roles, tech stack, contact
 *    · GitHub (via `gh` CLI) — repositories, languages, visibility, stars
 *
 *  Live numbers come from src/data/stats.json, generated at build time by
 *  scripts/fetch-stats.mjs. See that file for the API contract.
 * ---------------------------------------------------------------------------
 */

/* ------------------------------------------------------------------ */
/*  PROFILE                                                            */
/* ------------------------------------------------------------------ */
export const profile = {
  name: 'Irfan Wani',
  handle: 'irfanwani',
  callSign: 'IRFAN',
  role: 'Senior Software Engineer',
  title: 'Senior Software Development Engineer & Integration Manager',
  shortTitle: 'Senior Software Engineer',
  org: 'FreJun',
  location: 'India',
  timezone: 'IST · UTC+5:30',
  tagline: 'Building the integration layer that keeps every customer system talking to each other.',
  summary:
    'Senior software engineer at FreJun, a voice infrastructure platform. Builds mobile apps and the\n    integrations that connect them to customer systems \u2014 owning APIs, webhooks and SDKs end to end,\n    with cross-platform React Native and Python-based backend work behind it. Multiple apps published on the\n    Google Play Store. Currently deep into AI engineering \u2014 building agent harnesses and local-first\n    LLM tooling.',
  email: 'irfanwani347@gmail.com',
  github: 'https://github.com/irfanwani',
  githubUser: 'Irfanwani',
  linkedin: 'https://linkedin.com/in/irfanwani',
  twitter: 'https://twitter.com/Irfan__wani',
  twitterHandle: 'Irfan__wani',
  site: 'https://irfanwani.vercel.app',
  resume:
    'https://drive.google.com/file/d/1bAGv636a9BxP4Hpr4t2F3tplMQHP70EZ/view?usp=sharing',
  /** Individual app listings — used on that project's own card. */
  playStore: 'https://play.google.com/store/apps/details?id=com.geotagcamera',
  /** Apps published under the Appshop Co. Play developer account. */
  playApps: [
    { name: 'Snap Tag', rating: '4.8\u2605' },
    { name: 'Barbershop Services', rating: null },
    { name: 'Kashmiri Wedding Tracker', rating: null },
    { name: 'TicTacToe', rating: null },
    { name: 'Space Blaster', rating: null },
  ],
  /** The publisher storefront — used for any generic "apps on Play" link. */
  playDeveloper:
    'https://play.google.com/store/apps/developer?id=Appshop+Co.',
}

/**
 * GitHub stats are fetched live from api.github.com at build time.
 * There is deliberately no LinkedIn equivalent: LinkedIn publishes no
 * unauthenticated statistics endpoint, and a scraped number goes stale
 * silently — so the site shows nothing rather than something wrong.
 */
export const githubStatKeys = ['followers', 'publicRepos', 'totalStars', 'originalRepos']

/* ------------------------------------------------------------------ */
/*  TECH STACK                                                         */
/* ------------------------------------------------------------------ */
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Kotlin', 'Swift', 'C++'],
  },
  {
    group: 'Frontend',
    items: ['React', 'React Native', 'Redux', 'Next.js', 'Three.js', 'Zustand'],
  },
  {
    group: 'Backend',
    items: ['Django', 'Django REST', 'FastAPI', 'GraphQL', 'REST APIs', 'Webhooks'],
  },
  {
    group: 'Data & Infra',
    items: ['PostgreSQL', 'MongoDB', 'SQLite', 'AWS', 'ECS', 'Docker', 'Socket.io'],
  },
  {
    group: 'Realtime & Comms',
    items: ['SIP', 'WebRTC', 'VoIP', 'Asterisk', 'STUN/TURN'],
  },
  {
    group: 'AI & Agents',
    items: ['Agent Harnesses', 'LLM Tooling', 'Ollama', 'Local-first AI', 'Prompt Engineering'],
  },
  {
    group: 'Tooling',
    items: ['Git', 'CI/CD', 'Vite', 'Expo', 'Automation', 'FFmpeg'],
  },
]

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */
export const experience = [
  {
    role: 'Senior Software Engineer',
    org: 'FreJun',
    location: 'Hyderabad, Telangana, India',
    from: '2025-06',
    to: 'Present',
    current: true,
    summary:
      'Leads development of the integration infrastructure behind FreJun\u2019s customer communication workflows, connecting CRM, ATS and SaaS platforms into one centralized surface.',
    highlights: [
      'Integration layer across Salesforce, HubSpot, Zoho and Shopify',
      'Connecting CRM, ATS, SaaS and custom enterprise systems',
      'Scalable backend systems and APIs for a SaaS product',
    ],
  },
  {
    role: 'Senior Software Development Engineer & Integration Manager',
    org: 'FreJun',
    location: 'Hyderabad, Telangana, India',
    from: '2025-06',
    to: 'Present',
    current: true,
    summary:
      'Leads the integration team end to end \u2014 planning, development, deployment and maintenance \u2014 keeping data flow reliable across every connected system.',
    highlights: [
      'Lead the integration team and integration architecture',
      'Design and maintain APIs, webhooks and SDKs',
      'Support external teams integrating against the platform',
      'Drive mobile application development and backend contributions',
    ],
  },
  {
    role: 'Integration Manager',
    org: 'FreJun',
    location: 'Hyderabad, Telangana, India',
    from: '2024-11',
    to: '2025-06',
    summary:
      'Owned the integration function \u2014 building the API surface, webhook delivery and SDKs that external teams and customer systems connect through.',
    highlights: [
      'Integration architecture, APIs and webhook infrastructure',
      'Onboarding and support for integrating customer teams',
      'Reliability and maintenance of live data flows',
    ],
  },
  {
    role: 'Software Development Engineer',
    org: 'FreJun',
    location: 'Hyderabad, Telangana, India',
    from: '2024-06',
    to: '2025-06',
    summary:
      'Built scalable backend services and cross-platform mobile apps \u2014 Django/DRF APIs and React Native surfaces tuned for a smooth Android experience.',
    highlights: [
      'Django + Django REST Framework APIs, data modelling, business logic',
      'React Native apps for Android with focus on responsiveness',
      'AWS services for cloud deployment and management',
      'Cross-functional delivery with product, design and integration teams',
    ],
  },
  {
    role: 'Software Development Engineer',
    org: 'Appsdeployer',
    location: 'India',
    from: '2023-03',
    to: '2023-10',
    summary:
      'Client-side engineering across a portfolio of shipped mobile applications, working across both platforms rather than a single product.',
    highlights: [
      'Software development across multiple client applications',
      'Feature delivery and maintenance on live app-store products',
    ],
  },
  {
    role: 'Mobile Application Developer',
    org: 'Appsdeployer',
    location: 'India',
    from: '2022-10',
    to: '2023-02',
    summary:
      'Built and upgraded multiple React Native applications \u2014 shipping new versions to the app stores repeatedly across the release lifecycle.',
    highlights: [
      'Built multiple apps with React Native, Redux and JavaScript',
      'Upgraded existing apps and added new features',
      'Published new versions to the app stores many times over',
    ],
  },
  {
    role: 'React Native Intern \u2014 SIP Calling',
    org: 'FreJun',
    location: 'Hyderabad, Telangana, India',
    from: '2023-04',
    to: '2023-07',
    summary:
      'Built Android and iOS apps in React Native around SIP-based calling \u2014 real-time communication, call-flow performance and a reliable calling UI.',
    highlights: [
      'Built, maintained and upgraded the app for iOS and Android',
      'Real-time call flows and UI interaction',
      'Performance optimisation for call reliability',
    ],
  },
  {
    role: 'Mobile Application Developer',
    org: 'Solvevolve',
    location: 'India',
    from: '2022-10',
    to: '2022-12',
    summary:
      'Built mobile applications at Solvevolve using a mix of frameworks and technologies for company products.',
    highlights: [
      'Mobile app development across multiple frameworks',
      'React Native implementation work',
    ],
  },
  {
    role: 'React Native Intern \u2014 Full Stack',
    org: 'FreJun',
    location: 'India',
    from: '2022-10',
    to: '2023-10',
    summary:
      'Shipped features across React Native apps and the backend \u2014 UI work, API integration and debugging to support full-stack delivery.',
    highlights: [
      'React Native feature development for Android and iOS',
      'API integration and backend debugging',
      'Full-stack feature delivery',
    ],
  },
  {
    role: 'React Native Intern \u2014 Android Focus',
    org: 'FreJun',
    location: 'India',
    from: '2022-10',
    to: '2022-12',
    summary:
      'Built and optimised Android apps with React Native, supporting both frontend and backend teams to unblock the application stack.',
    highlights: [
      'Android app development and optimisation',
      'Cross-team debugging and implementation support',
      'React Native UI and performance work',
    ],
  },
  {
    role: 'Blockchain Intern',
    org: 'National Institute of Technology Srinagar',
    short: 'NIT Srinagar',
    location: 'Srinagar, J&K, India',
    from: '2022-06',
    to: '2022-07',
    summary:
      'Worked through core blockchain concepts \u2014 NFTs, dApps, smart contracts and cryptocurrency \u2014 hands-on with the development tooling.',
    highlights: [
      'NFTs, dApps and smart contracts',
      'Web3 tooling and development workflow',
      'Cryptocurrency transaction modelling',
    ],
  },
]

/** Awaiting confirmation — previously listed an incorrect entry. */
export const education = []

export const certifications = [
  'AWS Cloud Practitioner (in progress)',
  'React Native — Advanced Patterns',
  'Django & DRF',
  'SIP / WebRTC Fundamentals',
]

/* ------------------------------------------------------------------ */
/*  TOP 10 PROJECTS — ranked from 98 repositories (83 original)         */
/*                                                                      */
/*  Ranking signals: shipped/live impact ▸ recency ▸ originality ▸      */
/*  complexity ▸ community signal (stars/npm).                           */
/* ------------------------------------------------------------------ */
export const projects = [
  {
    rank: 1,
    id: 'geotagcamera',
    name: 'GeoTag Camera',
    tagline: 'Camera app that geotags every photo by place and time',
    description:
      'A React Native camera application that stamps location and time onto photos as they are captured. Shipped to the Google Play Store — a real production release with a public install base, and the strongest shipped-impact signal on this list.',
    tech: ['React Native', 'TypeScript', 'Kotlin', 'Swift', 'Camera APIs'],
    metric: 'LIVE ON PLAY STORE',
    accent: 'lime',
    live: true,
    private: true,
    links: [
      { label: 'Play Store', href: profile.playStore, icon: 'play' },
      { label: 'Source', href: 'https://github.com/Irfanwani/geotagcamera', icon: 'github' },
    ],
    highlights: [
      'Native camera + geolocation capture pipeline',
      'Android (Kotlin) and iOS (Swift/Obj-C++) native modules',
      'Production release on the Google Play Store',
    ],
  },

  {
    rank: 2,
    id: 'space-blaster',
    name: 'Space Blaster',
    tagline: 'Arcade space shooter in React Native — shipped on Play Store',
    description:
      'A fast-paced arcade shooter built with React Native and Expo and shipped to the Google Play Store. Drag-anywhere touch controls, four enemy archetypes with distinct movement patterns, five power-ups, combo scoring, particle FX and a parallax star field.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Game Loop', 'Particles'],
    metric: 'LIVE ON PLAY STORE',
    accent: 'violet',
    live: true,
    private: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.appshop.spaceblaster', icon: 'play' },
      { label: 'Source', href: 'https://github.com/Irfanwani/space-blaster', icon: 'github' },
      { label: 'Site', href: 'https://github.com/Irfanwani/space-blaster-website', icon: 'external' },
    ],
    highlights: [
      '4 enemy types, 3 movement patterns, boss waves',
      'Combo system, 5 power-ups, particle FX and screen shake',
      'Parallax star field rendered in-app',
      'Production release on the Google Play Store',
    ],
  },

  {
    rank: 3,
    id: 'sidekick',
    name: 'Sidekick',
    tagline: 'AI agent harness — top contributor, 319 commits, on PyPI',
    description:
      'Sidekick is a local-first terminal AI agent: chat, voice and 19 tools running entirely on your own hardware, published to PyPI. Building an agent harness is the part I care most about \u2014 the tool-execution loop, the Textual TUI and the Ollama/OpenAI-compatible model plumbing. I am the top contributor, with 319 commits against the maintainer\u2019s 286.',
    tech: ['Python 3.12', 'Agent Harness', 'Tool Use', 'Ollama', 'Textual TUI', 'PyPI'],
    metric: 'TOP CONTRIBUTOR \u00b7 319 COMMITS',
    accent: 'violet',
    live: true,
    private: false,
    links: [
      { label: 'Project', href: 'https://github.com/Faisal-Fayaz/sidekick', icon: 'github' },
      { label: 'PyPI', href: 'https://pypi.org/project/sidekick-agent/', icon: 'external' },
    ],
    highlights: [
      '#1 of 4 contributors — more commits than the project maintainer',
      'Agent harness with a 19-tool execution loop and voice input',
      'Open source under MIT, released on PyPI',
    ],
  },

  {
    rank: 4,
    id: 'system-design-simulator',
    name: 'System Design Simulator',
    tagline: 'Compose distributed systems in 3D and watch them fail',
    description:
      'An interactive 3D simulator for exploring how infrastructure behaves under load. Compose DNS, CDNs, load balancers, caches, queues, replicas and workers, then push traffic through and observe health in real time.',
    tech: ['React', 'Three.js', 'Zustand', 'Vite', 'WebGL'],
    metric: 'INTERACTIVE 3D',
    accent: 'cyan',
    live: true,
    private: false,
    stars: 1,
    links: [
      { label: 'Live demo', href: 'https://system-design-simulator-navy.vercel.app', icon: 'external' },
      { label: 'Source', href: 'https://github.com/Irfanwani/system-design-simulator', icon: 'github' },
    ],
    highlights: [
      '16+ composable infrastructure component types',
      'Traffic shaping, caching, queueing and failure injection',
      'Real-time system health visualisation',
    ],
  },

  {
    rank: 5,
id: 'frejun-dialer',
    name: 'FreJun Dialer',
    tagline: 'In-app voice calling on a live VoIP platform',
    description:
      'FreJun is a voice infrastructure platform — FreJun Dialer gives business teams AI-powered calling from inside their CRM, and FreJun Teler exposes programmable voice APIs and SIP trunking to developers. I build the mobile calling experience on top of it: in-app voice calling, live call flows and the calling UI across Android and iOS.',
    tech: ['React Native', 'VoIP', 'SIP', 'Click-to-Call', 'IVR', 'Android', 'iOS'],
    metric: 'PRODUCTION · APP STORES',
    accent: 'amber',
    live: true,
    private: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.frejun.FreJunApp', icon: 'play' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/frejun-dialer/id1621698092', icon: 'apple' },
    ],
    highlights: [
      'In-app voice calling on a platform running 99.95%+ monthly uptime',
      'Click-to-call, call routing and IVR flows on Android and iOS',
      'Two-way CRM sync on the call record — dial, log, record, analyse',
    ],
  },

  {
    rank: 6,
    id: 'work-presence',
    name: 'work-presence',
    tagline: 'Turn a repo into an evidence-backed blog across 5 platforms',
    description:
      'Point it at a local path, a GitHub URL or a description and it researches the work, writes the post, captures screenshots and a demo video from the running project, then publishes to dev.to, Hashnode and Medium with LinkedIn and X drafts.',
    tech: ['Python', 'Dev.to API', 'Hashnode API', 'Automation'],
    metric: '5 PLATFORMS',
    accent: 'cyan',
    live: false,
    private: false,
    links: [
      { label: 'Source', href: 'https://github.com/Irfanwani/blog-automation', icon: 'github' },
    ],
    highlights: [
      'Automated publishing to dev.to + Hashnode via API',
      'One-click Medium import, LinkedIn post + X thread drafts',
      'Screenshots and demo video captured from the live project',
    ],
  },

  {
    rank: 7,
    id: 'bottom-sheet',
    name: '@irfanwani/react-native-bottom-sheet',
    tagline: 'Bottom-sheet component — published to npm',
    description:
      'An animated bottom-sheet component for React Native, published to npm and used as a drop-in dependency. The most-starred repository on the profile and the only project released as a public package under my own scope.',
    tech: ['React Native', 'TypeScript', 'Animated', 'npm'],
    metric: 'ON NPM \u00b7 3\u2605',
    accent: 'cyan',
    live: false,
    private: false,
    stars: 3,
    links: [
      { label: 'Source', href: 'https://github.com/Irfanwani/bottomsheet', icon: 'github' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@irfanwani/react-native-bottom-sheet', icon: 'external' },
    ],
    highlights: [
      'Published as a consumable npm package',
      'Draggable sheet with animated transitions',
      'Most-starred repository on the profile',
    ],
  },

  {
    rank: 8,
    id: 'barbershop',
    name: 'Barbershop Platform',
    tagline: 'Full-stack booking app — React Native client, Django API',
    description:
      'A complete two-sided marketplace for a barbershop: one app for service providers and one for customers, backed by a Django REST API. Client and server were both built end to end, covering booking, availability and provider workflows.',
    tech: ['React Native', 'Django', 'REST API', 'PostgreSQL'],
    metric: 'FULL STACK',
    accent: 'cyan',
    live: false,
    private: false,
    links: [
      { label: 'App', href: 'https://github.com/Irfanwani/barbershopui', icon: 'github' },
      { label: 'API', href: 'https://github.com/Irfanwani/barbershopbackend', icon: 'github' },
    ],
    highlights: [
      'Two-sided React Native app for providers and customers',
      'Django REST backend handling bookings and availability',
      'Largest single project on the profile by codebase volume',
    ],
  },

  {
    rank: 9,
    id: 'virtugift',
    name: 'Virtual Gift',
    tagline: 'React Native app with native iOS and Android modules',
    description:
      'A virtual gifting application built with React Native and TypeScript, backed by hand-written native modules for both Android and iOS — Kotlin for Android and Objective-C++ for the iOS layer.',
    tech: ['React Native', 'TypeScript', 'Kotlin', 'Objective-C++', 'iOS'],
    metric: 'CROSS-PLATFORM NATIVE',
    accent: 'amber',
    live: false,
    private: true,
    links: [
      { label: 'Source', href: 'https://github.com/Irfanwani/virtugift', icon: 'github' },
    ],
    highlights: [
      'Shared React Native + TypeScript application layer',
      'Native Android (Kotlin) and iOS (Objective-C++) modules',
      'Cross-platform gifting flow end to end',
    ],
  },

  {
    rank: 10,
    id: 'kashmiri-wedding-tracker',
    name: 'Kashmiri Wedding Tracker',
    tagline: 'Expo app for wedding logistics, guests and expenses',
    description:
      'A lightweight Expo React Native app for planning Kashmiri weddings: wedding details, guest families and expenses in one place, with a wedding-themed interface and fully local on-device storage.',
    tech: ['React Native', 'Expo', 'JavaScript', 'Local Storage'],
    metric: 'MOBILE APP',
    accent: 'lime',
    live: false,
    private: false,
    links: [
      { label: 'Source', href: 'https://github.com/Irfanwani/kashmiri-wedding-tracker', icon: 'github' },
    ],
    highlights: [
      'Wedding details, guest families and expense tracking',
      'Wedding-themed UI built with Expo',
      'Offline-first — all data stored on the device',
    ],
  },
]

/** Shown as a compact strip under the ranked list. */
export const otherProjects = [
  { name: 'IPS', desc: 'Internal full-stack platform — React/TS frontend + Python API', href: 'https://github.com/Irfanwani/ips-frontend' },
  { name: 'img2sketch', desc: 'Python image-to-sketch conversion', href: 'https://github.com/Irfanwani/img2sketch' },
  { name: 'Excel Formatter', desc: 'React + Vite spreadsheet formatting tool', href: 'https://github.com/Irfanwani/excel-formatter' },
  { name: 'CyberStudio', desc: 'React + Vite build, Oxlint-configured', href: 'https://github.com/Irfanwani/cyberstudio' },
  { name: 'Location App', desc: 'React Native app resolving user location and address', href: 'https://github.com/Irfanwani/locationapp' },
  { name: 'App Shop Generator', desc: 'React Native app with native modules', href: 'https://github.com/Irfanwani/appshopimagegeneration' },
  { name: 'Shadowwolf', desc: 'React + TypeScript + Vite application', href: 'https://github.com/Irfanwani/shadowwolf' },
  { name: 'Autotranslator', desc: 'Translation preserving tone and emotion (TeX/Jupyter)', href: 'https://github.com/Irfanwani/autotranslator' },
  { name: 'Electron Flux', desc: 'Astrophysics notebook — electron flux vs energy', href: 'https://github.com/Irfanwani/astro' },
  { name: 'Instagram Clone', desc: 'Social feed UI built in Java', href: 'https://github.com/Irfanwani/social-media-app' },
]

/* ------------------------------------------------------------------ */
/*  INTEGRATION GRAPH — drives the hero 3D scene                        */
/*  Each node is a system he integrates with; edges are the flows.     */
/* ------------------------------------------------------------------ */
export const integrationNodes = [
  // centre — what he owns
  { id: 'core', label: 'Integration Platform', kind: 'core', x: 0, y: 0, z: 0 },

  // ring 1 — the customer systems actually integrated (from LinkedIn)
  { id: 'salesforce', label: 'Salesforce', kind: 'crm', x: 0.0, y: -2.35, z: 0.2 },
  { id: 'hubspot', label: 'HubSpot', kind: 'crm', x: 2.22, y: -0.73, z: -0.5 },
  { id: 'zoho', label: 'Zoho', kind: 'crm', x: 1.38, y: 1.90, z: 0.6 },
  { id: 'ats', label: 'ATS', kind: 'ats', x: -1.38, y: 1.90, z: -0.6 },
  { id: 'dynamics', label: 'Dynamics 365', kind: 'commerce', x: -2.22, y: -0.73, z: 0.5 },
  { id: 'crmmore', label: 'Freshworks · Pipedrive · Gong', kind: 'commerce', x: -2.10, y: 2.70, z: -0.9 },

  // ring 2 — the surfaces that carry the traffic
  { id: 'api', label: 'REST APIs', kind: 'surface', x: 0.0, y: -4.25, z: -0.3 },
  { id: 'webhooks', label: 'Webhooks', kind: 'surface', x: 4.04, y: -1.31, z: 0.4 },
  { id: 'voice', label: 'Voice / SIP', kind: 'channel', x: 2.50, y: 3.44, z: -0.4 },
  { id: 'email', label: 'Email', kind: 'channel', x: -2.50, y: 3.44, z: 0.4 },
  { id: 'sdk', label: 'SDKs', kind: 'surface', x: -4.04, y: -1.31, z: -0.4 },

  // ring 3 — internal stack serving it all
  { id: 'mobile', label: 'React Native', kind: 'internal', x: 3.95, y: -3.95, z: 0.8 },
  { id: 'django', label: 'Django / DRF', kind: 'internal', x: 3.95, y: 3.95, z: -0.8 },
  { id: 'postgres', label: 'PostgreSQL', kind: 'internal', x: -3.95, y: 3.95, z: 0.8 },
  { id: 'aws', label: 'AWS / ECS', kind: 'internal', x: -3.95, y: -3.95, z: -0.8 },
]

export const integrationEdges = [
  // the platform reaches every connected customer system
  ['core', 'salesforce'],
  ['core', 'hubspot'],
  ['core', 'zoho'],
  ['core', 'dynamics'],
  ['core', 'crmmore'],
  ['core', 'ats'],
  // inbound events + outbound sync
  ['salesforce', 'webhooks'],
  ['hubspot', 'webhooks'],
  ['dynamics', 'webhooks'],
  ['crmmore', 'api'],
  ['zoho', 'api'],
  ['ats', 'api'],
  // the public surfaces
  ['api', 'core'],
  ['webhooks', 'core'],
  ['sdk', 'core'],
  // communication channels that drive the workflows
  ['voice', 'core'],
  ['email', 'core'],
  // internal stack
  ['core', 'django'],
  ['core', 'mobile'],
  ['django', 'postgres'],
  ['django', 'aws'],
]

/** Named tiers, reused by the 3D scene and the legend in About.jsx. */
export const integrationTiers = [
  { kind: 'core', label: 'Integration Platform', color: 'cyan' },
  { kind: 'crm', label: 'CRM Platforms', color: 'sky' },
  { kind: 'ats', label: 'Applicant Tracking', color: 'teal' },
  { kind: 'commerce', label: 'Commerce', color: 'amber' },
  { kind: 'surface', label: 'Public Surfaces', color: 'violet' },
  { kind: 'channel', label: 'Comms Channels', color: 'lime' },
  { kind: 'internal', label: 'Internal Stack', color: 'rose' },
]

/* ------------------------------------------------------------------ */
/*  CLI BOOT SEQUENCE                                                 */
/* ------------------------------------------------------------------ */
export const bootLines = [
  { text: 'IRFAN-WANI :: INTEGRATION CONSOLE v1.0.0', type: 'title' },
  { text: 'resolving user session .......................... OK', type: 'ok' },
  { text: 'mounting /api gateway ........................... OK', type: 'ok' },
  { text: 'loading webhook subscriptions .................... OK', type: 'ok' },
  { text: 'syncing PostgreSQL primary ...................... OK', type: 'ok' },
  { text: 'handshaking SIP/WebRTC transport ................ OK', type: 'ok' },
  { text: 'building service mesh topology ................... OK', type: 'ok' },
  { text: 'fetching github graph ........................... OK', type: 'ok' },
  { text: 'ALL SYSTEMS NOMINAL — READY TO INTEGRATE.', type: 'success' },
]

export const sections = [
  { id: 'hero', label: 'UPLINK', code: '00' },
  { id: 'about', label: 'PROFILE', code: '01' },
  { id: 'stack', label: 'STACK', code: '02' },
  { id: 'experience', label: 'EXPERIENCE', code: '03' },
  { id: 'projects', label: 'PROJECTS', code: '04' },
  { id: 'stats', label: 'SIGNALS', code: '05' },
  { id: 'contact', label: 'DOWNLINK', code: '06' },
]