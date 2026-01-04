export interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: KeyFeature[];
  category: 'university' | 'personal';
  image?: string;
  images?: string[];
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Flight Booking Backend — RESTful Microservices API',
    slug: 'flight-booking-backend',
    description: 'A RESTful, microservice-based flight booking backend deployed on AWS, designed for secure, scalable, and decoupled system integration.',
    longDescription: 'A RESTful flight booking backend built with Spring Boot using a microservices architecture for scalability and low coupling. Services are deployed independently on AWS EC2 and exposed through clean REST APIs, with authentication handled by a separate auth microservice. The system is containerized with Docker, orchestrated using Kubernetes, and deployed via a GitLab CI/CD pipeline, showcasing production-ready backend, cloud, and DevOps practices.',
    techStack: ['Spring Boot', 'RESTful API', 'Microservice', 'JWT', 'RBAC', 'Kubernetes', 'Docker', 'AWS EC2', 'GitLab CI/CD', 'Postman'],
    keyFeatures: [
      {
        icon: '🏗️',
        title: 'Microservices',
        description: 'Independent, scalable service architecture'
      },
      {
        icon: '🔌',
        title: 'RESTful API',
        description: 'Clean, documented REST endpoints'
      },
      {
        icon: '☁️',
        title: 'Cloud-Native',
        description: 'Deployed on AWS with Kubernetes'
      },
      {
        icon: '🔐',
        title: 'Secure Auth',
        description: 'JWT & RBAC authentication'
      },
      {
        icon: '🚀',
        title: 'CI/CD Pipeline',
        description: 'Automated GitLab deployment'
      },
      {
        icon: '🐳',
        title: 'Containerized',
        description: 'Docker-based deployment'
      }
    ],
    category: 'university',
    images: ['/images/projects/flight-1.png', '/images/projects/flight-2.png'],
    githubUrl: 'https://github.com/clarissaindriana/flight-be.git',
    featured: false,
  },
  {
    id: '2',
    title: 'Flight Booking Frontend',
    slug: 'flight-booking-frontend',
    description: 'A Vue.js frontend that consumes RESTful flight booking APIs and is deployed on AWS using containerized CI/CD workflows.',
    longDescription: 'A Vue.js-based flight booking frontend that fetches and displays data from a RESTful, microservice-based flight booking backend. The application consumes flight, booking, and billing APIs in real time using Axios with centralized state management. It is fully containerized with Docker, orchestrated using Kubernetes, and deployed on AWS EC2 through a GitLab CI/CD pipeline, demonstrating production-ready frontend, cloud, and DevOps integration.',
    techStack: ['Vue.js', 'JavaScript', 'Pinia', 'Axios', 'State Management', 'REST API', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS EC2', 'HTML', 'CSS'],
    keyFeatures: [
      {
        icon: '🎨',
        title: 'Responsive Design',
        description: 'Mobile-first, adaptive user interface'
      },
      {
        icon: '⚡',
        title: 'State Management',
        description: 'Centralized state'
      },
      {
        icon: '🔄',
        title: 'API Integration',
        description: 'Real-time data consumption via Axios'
      },
      {
        icon: '☁️',
        title: 'Cloud Deployment',
        description: 'AWS EC2 with Kubernetes orchestration'
      },
      {
        icon: '🐳',
        title: 'Containerized',
        description: 'Docker-based frontend deployment'
      },
      {
        icon: '🚀',
        title: 'CI/CD Pipeline',
        description: 'GitLab automated deployment'
      }
    ],
    category: 'university',
    images: [],
    githubUrl: 'https://github.com/clarissaindriana/flight-fe.git',
    featured: false,
  },
  {
    id: '3',
    title: 'Lume E-Commerce Platform',
    slug: 'lume-e-commerce-platform',
    description: 'A security-focused full-stack e-commerce platform emphasizing safe authentication, data protection, and secure transactions.',
    longDescription: 'Lume is a full-stack e-commerce website built with security-oriented programming principles. It features secure user authentication, protected product browsing, shopping cart and checkout flows, and robust order management. The system is designed with careful handling of user data, input validation, access control, and secure transaction processing to ensure reliability and trust throughout the platform.',
    techStack: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      {
        icon: '🔐',
        title: 'Secure Auth',
        description: 'Encrypted passwords and session management'
      },
      {
        icon: '🛡️',
        title: 'Input Validation',
        description: 'Protection against SQL injection & XSS'
      },
      {
        icon: '💳',
        title: 'Secure Payments',
        description: 'Protected transaction processing'
      },
      {
        icon: '🛍️',
        title: 'E-Commerce Features',
        description: 'Cart, checkout, and order management'
      },
      {
        icon: '👤',
        title: 'Access Control',
        description: 'Role-based permission system'
      },
      {
        icon: '📊',
        title: 'Order Management',
        description: 'Comprehensive order tracking'
      }
    ],
    category: 'university',
    images: [],
    githubUrl: 'https://github.com/clarissaindriana/lume.git',
    featured: true,
  },
  {
    id: '4',
    title: 'Waste Management Platform for UMKM (Innovathon Project)',
    slug: 'waste-management-umkm',
    description: 'A web platform enabling UMKM to sell near-expiry food ingredients at affordable prices to reduce food waste.',
    longDescription: 'This project was developed as part of an Innovathon and focuses on addressing food waste by connecting UMKM with buyers through a digital platform. The system allows UMKM to list near-expiry food ingredients at discounted prices, making them more accessible while reducing waste. Built using the Django framework, the project demonstrates rapid prototyping, problem-driven product design, and the application of web technologies to real-world sustainability challenges.',
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      {
        icon: '♻️',
        title: 'Sustainability Focus',
        description: 'Reduce food waste through digital platform'
      },
      {
        icon: '🏪',
        title: 'UMKM Marketplace',
        description: 'Empower small businesses'
      },
      {
        icon: '💰',
        title: 'Affordable Pricing',
        description: 'Discounted near-expiry products'
      },
      {
        icon: '📱',
        title: 'Easy Listing',
        description: 'Simple product management system'
      },
      {
        icon: '🚀',
        title: 'Rapid Development',
        description: 'Agile innovathon project'
      },
      {
        icon: '🌱',
        title: 'Social Impact',
        description: 'Real-world sustainability solution'
      }
    ],
    category: 'personal',
    images: [],
    githubUrl: 'https://github.com/clarissaindriana/innovathon.git',
    featured: false,
  },
  {
    id: '5',
    title: 'RasaJogja — Culinary Recommendation Platform',
    slug: 'rasa-jogja',
    description: 'A Django-based web application providing culinary recommendations for Yogyakarta.',
    longDescription: 'RasaJogja is a backend-driven web application built with Django that focuses on recommending culinary destinations in Yogyakarta. The platform manages food listings, user reviews, and recommendation logic through a structured backend, while serving data to both web and mobile clients. This project demonstrates full-stack development, backend-driven recommendations, and API design to support multi-platform consumption.',
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    keyFeatures: [
      {
        icon: '🍽️',
        title: 'Culinary Recommendations',
        description: 'Smart food destination suggestions'
      },
      {
        icon: '⭐',
        title: 'User Reviews',
        description: 'Community feedback & ratings'
      },
      {
        icon: '🔍',
        title: 'Search & Filter',
        description: 'Find restaurants by cuisine type'
      },
      {
        icon: '📍',
        title: 'Location-Based',
        description: 'Yogyakarta culinary destinations'
      },
      {
        icon: '🔌',
        title: 'Multi-Platform API',
        description: 'Serves web & mobile clients'
      },
      {
        icon: '📊',
        title: 'Backend-Driven',
        description: 'Robust recommendation logic'
      }
    ],
    category: 'personal',
    images: [],
    githubUrl: 'https://github.com/clarissaindriana/rasa-jogja.git',
    featured: true,
  },
  {
    id: '6',
    title: 'RasaJogja Mobile — Flutter Client App',
    slug: 'rasa-jogja-mobile',
    description: 'A Flutter mobile application consuming RasaJogja backend APIs for culinary recommendations.',
    longDescription: 'RasaJogja Mobile is a Flutter-based mobile application that fetches and displays culinary recommendation data from the RasaJogja backend. The app consumes RESTful APIs provided by the Django backend to present food listings, reviews, and recommendations in a mobile-friendly interface. This project highlights cross-platform mobile development, frontend-backend integration, and experience building multi-client systems backed by a single API.',
    techStack: ['Flutter', 'Dart', 'REST API', 'HTTP HTTPS Client'],
    keyFeatures: [
      {
        icon: '📱',
        title: 'Cross-Platform',
        description: 'iOS & Android with Flutter'
      },
      {
        icon: '🔄',
        title: 'API Integration',
        description: 'Consumes RESTful backend APIs'
      },
      {
        icon: '🎨',
        title: 'Mobile UI/UX',
        description: 'Native-like user experience'
      },
      {
        icon: '⚡',
        title: 'Performance',
        description: 'Fast, responsive mobile app'
      },
      {
        icon: '📡',
        title: 'Real-Time Data',
        description: 'Live food recommendations'
      },
      {
        icon: '🏗️',
        title: 'Multi-Client System',
        description: 'Seamless web-mobile integration'
      }
    ],
    category: 'university',
    images: [],
    githubUrl: 'https://github.com/clarissaindriana/rasa-jogja-mobile.git',
    featured: true,
  },
];