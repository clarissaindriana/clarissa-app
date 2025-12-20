import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { TechStack } from './TechStack';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative h-full cursor-pointer">
        {/* Mac Terminal-style card container - Light Theme */}
        <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg relative border border-gray-300 hover:border-gray-400">
          
          {/* Mac Terminal Header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
            {/* Traffic light buttons */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
            </div>
            {/* Terminal path */}
            <span className="text-xs text-gray-600 ml-2 font-mono">~/projects/{project.slug}</span>
          </div>

          {/* Terminal content */}
          <div className="p-4 sm:p-6 flex-1 flex flex-col font-mono text-sm bg-white overflow-hidden">
            
            {/* Project command simulation */}
            <div className="mb-4">
              <div className="text-gray-700 flex items-start gap-2">
                <span className="flex-shrink-0">$</span>
                <span className="break-words">project --info</span>
              </div>
            </div>

            {/* Project title */}
            <div className="mb-3">
              <span className="text-blue-600">name</span>
              <span className="text-gray-400">:</span>
              <span className="text-gray-900 ml-2 font-semibold">{project.title}</span>
            </div>

            {/* Project description */}
            <div className="mb-3">
              <span className="text-blue-600">description</span>
              <span className="text-gray-400">:</span>
              <span className="text-gray-700 ml-2 line-clamp-2">{project.description}</span>
            </div>

            {/* Tech stack */}
            <div className="mb-4">
              <span className="text-blue-600">stack</span>
              <span className="text-gray-400">:</span>
              <div className="mt-2 ml-2 flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span key={tech} className="text-orange-600 px-2 py-1 bg-orange-50 rounded text-xs font-mono border border-orange-200">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="text-gray-600 px-2 py-1 bg-gray-100 rounded text-xs font-mono border border-gray-300">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Featured status */}
            {project.featured && (
              <div className="mb-4">
                <span className="text-purple-600">featured</span>
                <span className="text-gray-400">:</span>
                <span className="text-green-600 ml-2 font-semibold">true</span>
              </div>
            )}

            {/* View project command */}
            <div className="mt-auto pt-2 border-t border-gray-300">
              <div className="text-gray-700 flex items-start gap-2 group-hover:text-gray-900 transition-colors cursor-pointer">
                <span className="flex-shrink-0">$</span>
                <span className="break-words">view project <span className="text-gray-400">→</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};