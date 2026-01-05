import React from 'react';
import { Container } from '../../components/layout/Container';
import { ProjectGrid } from '../../components/project/ProjectGrid';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <main className="min-h-screen pt-16">
      <Container className="py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my work, from university assignments to personal explorations.
              Each project represents a learning experience and a step in my development journey.
            </p>
          </div>

          {/* Projects Grid */}
          <ProjectGrid projects={projects} />

          {/* Technologies Used */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Technologies I've Worked With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(projects.flatMap(p => p.techStack))).map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}