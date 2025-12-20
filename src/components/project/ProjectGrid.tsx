import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../data/projects';

interface ProjectGridProps {
  projects: Project[];
  showFeatured?: boolean;
}

export const ProjectGrid = ({ projects, showFeatured = false }: ProjectGridProps) => {
  const displayProjects = showFeatured
    ? projects.filter(project => project.featured)
    : projects;

  if (displayProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {displayProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};