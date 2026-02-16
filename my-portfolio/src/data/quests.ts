export const quests = [
  {
    title: 'Nightfall Cinematic DB',
    description:
      'A responsive movie discovery app using the TMDB API with theme switching capabilities.',
    status: 'completed' as const,
    difficulty: 3,
    reward: '300 XP',
    objectives: [
      'Integrate TMDB API for trending data',
      'Implement Dark/Light mode toggle',
      'Build real-time search functionality',
      'Design mobile-responsive grid layout',
    ],
  },
  {
    title: 'Minimalist E-Com Card',
    description:
      'Pixel-perfect implementation of a product preview component based on professional designs.',
    status: 'completed' as const,
    difficulty: 1,
    reward: '100 XP',
    objectives: [
      'Translate Figma designs to code',
      'Implement responsive image switching',
      'Utilize semantic HTML5 structure',
      'Optimize CSS for mobile-first workflow',
    ],
  },
  {
    title: 'Smart Contact Portal',
    description:
      'Interactive form component with custom validation logic and success state handling.',
    status: 'completed' as const,
    difficulty: 2,
    reward: '150 XP',
    objectives: [
      'Implement client-side form validation',
      'Style custom radio and checkbox inputs',
      'Manage success/error UI states',
      'Ensure accessibility (a11y) compliance',
    ],
  },
  {
    title: 'Global Atlas Dashboard',
    description:
      'Data-heavy dashboard displaying global country statistics with filtering and theming.',
    status: 'completed' as const,
    difficulty: 3,
    reward: '350 XP',
    objectives: [
      'Consume REST Countries API',
      'Implement region filtering logic',
      'Build dynamic search functionality',
      'Manage global theme state',
    ],
  },
  {
    title: 'SwiftMart OOP Store',
    description:
      'Object-Oriented shopping simulation featuring dynamic cart logic and product rendering.',
    status: 'completed' as const,
    difficulty: 3,
    reward: '400 XP',
    objectives: [
      'Architect app using OOP principles',
      'Implement cart add/remove logic',
      'Calculate dynamic totals and taxes',
      'Render product data via class methods',
    ],
  },
  {
    title: 'TaskMaster Kanban',
    description:
      'Drag-and-drop task management tool built with vanilla TypeScript and Class architecture.',
    status: 'completed' as const,
    difficulty: 4,
    reward: '600 XP',
    objectives: [
      'Implement native Drag and Drop API',
      'Architect Task and Column classes',
      'Build modal-based CRUD operations',
      'Create search with auto-completion',
    ],
  },
  {
    title: 'GameVault Collection',
    description:
      'Full-stack game library manager using Node.js/Express backend and Astro frontend.',
    status: 'completed' as const,
    difficulty: 4,
    reward: '750 XP',
    objectives: [
      'Build Express.js REST API',
      'Implement session-based authentication',
      'Secure passwords with hashing (Argon2/Bcrypt)',
      'Manage in-memory data persistence',
    ],
  },
  {
    title: 'Carted Marketplace',
    description:
      'Collaborative full-stack e-commerce platform with secure auth and product management.',
    status: 'completed' as const,
    difficulty: 5,
    reward: '1000 XP',
    objectives: [
      'Construct dynamic Product Catalog',
      'Engineer detailed Product Views',
      'Implement interactive Cart logic',
      'Collaborate in Agile team workflow',
    ],
  },
  {
    title: 'F-Insight Finance',
    description:
      'Comprehensive expense sharing application with visualization and cloud deployment.',
    status: 'completed' as const,
    difficulty: 5,
    reward: '1200 XP',
    objectives: [
      'Visualize data with dashboard charts',
      'Implement complex expense CRUD',
      'Integrate calendar view for transactions',
      'Deploy full-stack app to Render',
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'Design and build a personal portfolio with animations and responsive design.',
    status: 'in-progress' as const,
    difficulty: 2,
    reward: '200 XP',
    objectives: [
      'Design UI/UX mockups',
      'Implement responsive layout',
      'Add smooth animations',
      'Deploy to production',
    ],
  },
  {
    title: 'Cyber-Grid Tactics',
    description:
      'A multiplayer turn-based strategy game featuring procedural map generation and real-time PvP combat.',
    status: 'planned' as const,
    difficulty: 5,
    reward: '2000 XP',
    objectives: [
      'Master React Three Fiber (WebGL)',
      'Implement Socket.io for multiplayer',
      'Design procedural map algorithms',
      'Architect complex game state system',
    ],
  },
  {
    title: 'Blog Platform',
    description:
      'Create a modern blog with markdown support, comments, and content management.',
    status: 'planned' as const,
    difficulty: 4,
    reward: '600 XP',
    objectives: [
      'Set up content management',
      'Implement markdown editor',
      'Add comment system',
      'Optimize for SEO',
    ],
  },
  {
    title: 'Chat Application',
    description:
      'Build a real-time messaging app with WebSocket support and user authentication.',
    status: 'planned' as const,
    difficulty: 5,
    reward: '700 XP',
    objectives: [
      'Set up WebSocket server',
      'Implement user authentication',
      'Build chat interface',
      'Add file sharing',
    ],
  },
];

export const calculateTotalXP = () => {
  return quests
    .filter((q) => q.status === 'completed')
    .reduce((total, currq) => {
      const xpValue = parseInt(currq.reward.replace(/\D/g, ''), 10);
      return total + (isNaN(xpValue) ? 0 : xpValue);
    }, 0);
};

export const completedProjectCount = quests.filter(
  (q) => q.status === 'completed'
).length;
