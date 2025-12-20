import React from 'react';
import { Badge } from '../ui/Badge';

interface TechStackProps {
  technologies: string[];
  className?: string;
}

export const TechStack = ({ technologies, className = '' }: TechStackProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <Badge key={tech} variant="gray">
          {tech}
        </Badge>
      ))}
    </div>
  );
};