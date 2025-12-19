export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'university' | 'personal';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A full-stack e-commerce website with user authentication, product catalog, and payment integration.',
    longDescription: 'This project showcases a complete e-commerce solution built with modern web technologies. Features include user registration/login, product browsing, shopping cart, checkout process, and order management. The backend handles inventory, user data, and payment processing securely.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    category: 'university',
    image: '/project-images/ecommerce.jpg',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'Interactive weather application with location-based forecasts and beautiful visualizations.',
    longDescription: 'A responsive weather dashboard that provides current weather conditions and 7-day forecasts. Users can search for cities worldwide and view detailed weather information including temperature, humidity, wind speed, and precipitation chances. Features interactive charts and maps.',
    techStack: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    category: 'personal',
    image: '/project-images/weather.jpg',
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-app-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    slug: 'task-management-app',
    description: 'A collaborative task management tool with real-time updates and team features.',
    longDescription: 'Built for team productivity, this app allows users to create projects, assign tasks, set deadlines, and track progress. Features include real-time notifications, file attachments, comments, and progress tracking with visual kanban boards.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    category: 'university',
    image: '/project-images/taskmanager.jpg',
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    description: 'Personal portfolio website showcasing projects and skills with modern design.',
    longDescription: 'A responsive portfolio website built with Next.js and Tailwind CSS. Features include project showcase, skills section, contact form, and smooth animations. Optimized for performance and SEO.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    category: 'personal',
    image: '/project-images/portfolio.jpg',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.vercel.app',
    featured: true,
  },
  {
    id: '5',
    title: 'Recipe Finder',
    slug: 'recipe-finder',
    description: 'Recipe discovery app with ingredient-based search and meal planning features.',
    longDescription: 'An intuitive recipe app that helps users find recipes based on available ingredients. Features include ingredient search, dietary filters, meal planning, shopping list generation, and step-by-step cooking instructions.',
    techStack: ['React Native', 'Firebase', 'Spoonacular API'],
    category: 'personal',
    image: '/project-images/recipe.jpg',
    githubUrl: 'https://github.com/username/recipe-finder',
    liveUrl: 'https://recipe-app-demo.vercel.app',
    featured: false,
  },
  {
    id: '6',
    title: 'Data Visualization Dashboard',
    slug: 'data-viz-dashboard',
    description: 'Interactive dashboard for data analysis with multiple chart types and filtering options.',
    longDescription: 'A comprehensive data visualization tool that allows users to upload datasets and create interactive charts. Supports various chart types including bar charts, line graphs, pie charts, and scatter plots. Features data filtering, export options, and real-time updates.',
    techStack: ['D3.js', 'React', 'Python', 'Flask'],
    category: 'university',
    image: '/project-images/dataviz.jpg',
    githubUrl: 'https://github.com/username/data-viz',
    liveUrl: 'https://dataviz-demo.vercel.app',
    featured: false,
  },
];