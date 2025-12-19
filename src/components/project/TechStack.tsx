import React from 'react';
import { Badge } from '../ui/Badge';

interface TechStackProps {
  technologies: string[];
  className?: string;
}

export const TechStack = ({ technologies, className = '' }: TechStackProps) => {
  const getBadgeVariant = (tech: string) => {
    // Simple logic to assign colors based on tech type
    const frontend = ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'];
    const backend = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python'];
    const tools = ['Git', 'VS Code', 'Figma'];

    if (frontend.includes(tech)) return 'pink';
    if (backend.includes(tech)) return 'green';
    if (tools.includes(tech)) return 'blue';
    return 'blue';
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <Badge key={tech} variant={getBadgeVariant(tech)}>
          {tech}
        </Badge>
      ))}
    </div>
  );
};