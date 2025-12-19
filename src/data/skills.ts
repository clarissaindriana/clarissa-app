export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Next.js', category: 'frontend', level: 'intermediate' },
  { name: 'TypeScript', category: 'frontend', level: 'intermediate' },
  { name: 'HTML/CSS', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'Express', category: 'backend', level: 'beginner' },
  { name: 'MongoDB', category: 'backend', level: 'beginner' },

  // Tools
  { name: 'Git', category: 'tools', level: 'intermediate' },
  { name: 'VS Code', category: 'tools', level: 'advanced' },
  { name: 'Figma', category: 'tools', level: 'intermediate' },

  // Design
  { name: 'UI/UX Design', category: 'design', level: 'intermediate' },
  { name: 'Adobe Creative Suite', category: 'design', level: 'beginner' },
];