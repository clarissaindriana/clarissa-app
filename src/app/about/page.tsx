import React from 'react';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <Container className="py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image/Placeholder */}
            <div className="lg:col-span-1">
              <Card className="p-8 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">👩‍💻</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Clarissa</h3>
                <p className="text-gray-600">Computer Science Student</p>
                <p className="text-gray-600">Jakarta, Indonesia</p>
              </Card>
            </div>

            {/* About Text */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hi! I'm Clarissa, a passionate Computer Science student currently pursuing my degree
                    at the University of Technology in Jakarta. I'm fascinated by how technology can solve
                    real-world problems and create meaningful user experiences.
                  </p>
                  <p>
                    My journey in tech started with curiosity about how websites work, and it has evolved
                    into a deep love for creating beautiful, functional applications. I enjoy the challenge
                    of turning complex problems into simple, elegant solutions.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with fellow students through workshops and study groups.
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What I Do</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    I specialize in front-end development with a focus on creating responsive, user-friendly
                    web applications. My toolkit includes modern frameworks like React and Next.js, along with
                    styling solutions like Tailwind CSS.
                  </p>
                  <p>
                    I'm also experienced in back-end development and enjoy working with databases and APIs.
                    I believe in writing clean, maintainable code and following best practices throughout
                    the development process.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Interests & Hobbies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎨', title: 'UI/UX Design' },
                { icon: '📚', title: 'Reading Tech Blogs' },
                { icon: '🎵', title: 'Music & Podcasts' },
                { icon: '🏃‍♀️', title: 'Running' },
                { icon: '🌱', title: 'Gardening' },
                { icon: '📷', title: 'Photography' },
                { icon: '🎮', title: 'Gaming' },
                { icon: '✈️', title: 'Travel' },
              ].map((interest) => (
                <div key={interest.title} className="text-center">
                  <div className="text-4xl mb-2">{interest.icon}</div>
                  <p className="text-sm text-gray-600">{interest.title}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Want to work together?
            </h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/experience">
                <Button variant="outline" size="lg">
                  View My Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}