import React from 'react';
import Link from 'next/link';
import { Hero } from '../components/sections/Hero';
import { Skills } from '../components/sections/Skills';
import { ProjectGrid } from '../components/project/ProjectGrid';
import { Button } from '../components/ui/Button';
import { Container } from '../components/layout/Container';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              A showcase of my recent work, from university assignments to personal projects.
            </p>
          </div>

          <ProjectGrid projects={projects} showFeatured={true} />

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Skills />

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <Container>
          <div className="text-center px-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}