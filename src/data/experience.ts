export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'Tech Startup Inc.',
    location: 'Jakarta, Indonesia',
    startDate: 'Jan 2024',
    endDate: 'Jun 2024',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Optimized application performance resulting in 40% faster load times',
      'Participated in code reviews and mentored junior developers',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    type: 'work',
  },
  {
    id: '2',
    title: 'Computer Science Student',
    company: 'University of Technology',
    location: 'Jakarta, Indonesia',
    startDate: 'Sep 2021',
    endDate: null,
    description: [
      'Currently pursuing Bachelor\'s degree in Computer Science',
      'GPA: 3.8/4.0',
      'Active member of Computer Science Club',
      'Completed coursework in Data Structures, Algorithms, and Web Development',
    ],
    technologies: ['Java', 'Python', 'JavaScript', 'SQL'],
    type: 'education',
  },
  {
    id: '3',
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    startDate: 'Mar 2023',
    endDate: null,
    description: [
      'Built custom web applications for small businesses',
      'Implemented e-commerce solutions with payment integration',
      'Developed RESTful APIs and database schemas',
      'Managed project lifecycles from planning to deployment',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    type: 'work',
  },
  {
    id: '4',
    title: 'Web Development Workshop Leader',
    company: 'University Coding Club',
    location: 'Jakarta, Indonesia',
    startDate: 'Sep 2023',
    endDate: 'Dec 2023',
    description: [
      'Led weekly workshops teaching HTML, CSS, and JavaScript fundamentals',
      'Mentored 20+ students in building their first web projects',
      'Organized hackathons and coding challenges',
      'Created educational content and tutorial materials',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    type: 'project',
  },
  {
    id: '5',
    title: 'Mobile App Developer',
    company: 'Personal Project',
    location: 'Jakarta, Indonesia',
    startDate: 'Jul 2023',
    endDate: 'Oct 2023',
    description: [
      'Developed a recipe finder mobile app using React Native',
      'Integrated with external APIs for recipe data',
      'Implemented offline functionality and data caching',
      'Published app on Google Play Store with 500+ downloads',
    ],
    technologies: ['React Native', 'Firebase', 'API Integration'],
    type: 'project',
  },
];