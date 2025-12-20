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
    title: 'Flight Booking Backend — RESTful Microservices API',
    slug: 'flight-booking-backend',
    description: 'A RESTful, microservice-based flight booking backend deployed on AWS, designed for secure, scalable, and decoupled system integration.',
    longDescription: 'A RESTful flight booking backend built with Spring Boot using a microservices architecture for scalability and low coupling. Services are deployed independently on AWS EC2 and exposed through clean REST APIs, with authentication handled by a separate auth microservice. The system is containerized with Docker, orchestrated using Kubernetes, and deployed via a GitLab CI/CD pipeline, showcasing production-ready backend, cloud, and DevOps practices.',
    techStack: ['Spring Boot', 'RESTful API', 'Microservice', 'JWT', 'RBAC', 'Kubernetes', 'Docker', 'AWS EC2', 'GitLab CI/CD'],
    category: 'university',
    image: '/project-images/ecommerce.jpg',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Flight Booking Frontend',
    slug: 'flight-booking-frontend',
    description: 'A Vue.js frontend that consumes RESTful flight booking APIs and is deployed on AWS using containerized CI/CD workflows.',
    longDescription: 'A Vue.js-based flight booking frontend that fetches and displays data from a RESTful, microservice-based flight booking backend. The application consumes flight, booking, and billing APIs in real time using Axios with centralized state management. It is fully containerized with Docker, orchestrated using Kubernetes, and deployed on AWS EC2 through a GitLab CI/CD pipeline, demonstrating production-ready frontend, cloud, and DevOps integration.',
    techStack: ['Vue.js', 'JavaScript', 'Pinia', 'Axios', 'State Management', 'REST API', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS EC2', 'HTML', 'CSS'],    
    category: 'university',
    image: '/project-images/weather.jpg',
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-app-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Lume E-Commerce Platform',
    slug: 'lume-e-commerce-platform',
    description: 'A security-focused full-stack e-commerce platform emphasizing safe authentication, data protection, and secure transactions.',
    longDescription: 'Lume is a full-stack e-commerce website built with security-oriented programming principles. It features secure user authentication, protected product browsing, shopping cart and checkout flows, and robust order management. The system is designed with careful handling of user data, input validation, access control, and secure transaction processing to ensure reliability and trust throughout the platform.',
    techStack: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'university',
    image: '/project-images/taskmanager.jpg',
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Waste Management Platform for UMKM (Innovathon Project)',
    slug: 'waste-management-umkm',
    description: 'A web platform enabling UMKM to sell near-expiry food ingredients at affordable prices to reduce food waste.',
    longDescription: 'This project was developed as part of an Innovathon and focuses on addressing food waste by connecting UMKM with buyers through a digital platform. The system allows UMKM to list near-expiry food ingredients at discounted prices, making them more accessible while reducing waste. Built using the Django framework, the project demonstrates rapid prototyping, problem-driven product design, and the application of web technologies to real-world sustainability challenges.',
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    category: 'personal',
    image: '/project-images/portfolio.jpg',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio-demo.vercel.app',
    featured: true,
  },
  {
    id: '5',
    title: 'RasaJogja — Culinary Recommendation Platform',
    slug: 'rasa-jogja',
    description: 'A Django-based web application providing culinary recommendations for Yogyakarta.',
    longDescription: 'RasaJogja is a backend-driven web application built with Django that focuses on recommending culinary destinations in Yogyakarta. The platform manages food listings, user reviews, and recommendation logic through a structured backend, while serving data to both web and mobile clients. This project demonstrates full-stack development, backend-driven recommendations, and API design to support multi-platform consumption.',
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    category: 'personal',
    image: '/project-images/recipe.jpg',
    githubUrl: 'https://github.com/username/recipe-finder',
    liveUrl: 'https://recipe-app-demo.vercel.app',
    featured: false,
  },
  {
    id: '6',
    title: 'RasaJogja Mobile — Flutter Client App',
    slug: 'rasa-jogja-mobile',
    description: 'A Flutter mobile application consuming RasaJogja backend APIs for culinary recommendations.',
    longDescription: 'RasaJogja Mobile is a Flutter-based mobile application that fetches and displays culinary recommendation data from the RasaJogja backend. The app consumes RESTful APIs provided by the Django backend to present food listings, reviews, and recommendations in a mobile-friendly interface. This project highlights cross-platform mobile development, frontend-backend integration, and experience building multi-client systems backed by a single API.',
    techStack: ['Flutter', 'Dart', 'REST API', 'HTTP HTTPS Client'],    
    category: 'university',
    image: '/project-images/dataviz.jpg',
    githubUrl: 'https://github.com/username/data-viz',
    liveUrl: 'https://dataviz-demo.vercel.app',
    featured: false,
  },
];