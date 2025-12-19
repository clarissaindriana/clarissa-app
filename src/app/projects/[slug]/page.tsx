import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '../../../components/layout/Container';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { TechStack } from '../../../components/project/TechStack';
import { projects } from '../../../data/projects';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16">
      <Container className="py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              ← Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                {project.title}
              </h1>
              <Badge variant={project.category === 'university' ? 'green' : 'blue'}>
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="pink">Featured</Badge>
              )}
            </div>

            <p className="text-xl text-gray-600 mb-6">
              {project.description}
            </p>

            <TechStack technologies={project.techStack} className="mb-6" />

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    View Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Project Image Placeholder */}
          <Card className="mb-12 p-8">
            <div className="aspect-video bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 opacity-50">
                  {project.category === 'university' ? '🎓' : '🚀'}
                </div>
                <p className="text-gray-500">Project Screenshot</p>
                <p className="text-sm text-gray-400 mt-2">
                  In a real portfolio, this would be an actual screenshot of the project
                </p>
              </div>
            </div>
          </Card>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">About This Project</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.longDescription}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This project demonstrates my ability to work with modern web technologies
                    and create user-friendly applications. It showcases problem-solving skills,
                    attention to detail, and the ability to deliver functional software solutions.
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium capitalize">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">Completed</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Technologies</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="pink" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="gray" className="text-xs">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {[
                    'Responsive Design',
                    'Modern UI/UX',
                    'Performance Optimized',
                    'Cross-browser Compatible',
                    'Accessible',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="text-pastel-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`}>
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <TechStack technologies={relatedProject.techStack.slice(0, 3)} />
                    </Card>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/projects">
                <Button variant="outline">
                  View All Projects
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}