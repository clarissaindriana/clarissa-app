import React from 'react';
import Link from 'next/link';
import { Hero } from '../components/sections/Hero';
import { Skills } from '../components/sections/Skills';
import { ProjectCarousel } from '../components/project/ProjectCarousel';
import { Button } from '../components/ui/Button';
import { Container } from '../components/layout/Container';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Decorative wave pattern */}
        <svg className="absolute top-0 left-0 w-full h-24 opacity-30" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="#f3f4f6" />
        </svg>

        {/* Floating dot decorations */}
        <div className="absolute top-12 left-10 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
        <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-40"></div>
        
        <Container>
          <div className="text-center mb-10 sm:mb-16 lg:mb-20 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Featured <span className="text-gray-900">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 font-light">
              Interactive projects showcasing my skills in web development and creative design.
            </p>
          </div>

          <div className="relative z-10">
            <ProjectCarousel projects={projects} />
          </div>

          <div className="text-center mt-12 sm:mt-16 relative z-10">
            <Link href="/projects">
              <Button variant="primary" size="lg">
                Explore All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Skills />

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        {/* Decorative top border with dots */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Floating decorations */}
        <div className="absolute bottom-20 right-12 w-2.5 h-2.5 bg-gray-300 rounded-full opacity-40"></div>
        <div className="absolute top-16 left-12 w-1 h-1 bg-gray-300 rounded-full opacity-40"></div>

        <Container>
          <div className="text-center px-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Let's Create Something <span className="text-gray-700">Amazing</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              I'm always excited about new opportunities. Whether you have a project in mind or just want to connect, let's chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get to Know Me
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}