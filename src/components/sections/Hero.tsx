import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden pt-20 md:pt-16">
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float-down 0.8s ease-out;
        }
        .decoration-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #e5e7eb;
        }
      `}</style>
      {/* Decorative background elements */}
      <div className="absolute top-20 left-4 md:left-12 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-6 md:right-16 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-40 left-8 w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Animated tech icon with orbiting meteor */}
        <div className="flex items-center justify-center mb-8 md:mb-10 h-28 md:h-32 relative animate-float">
          {/* Center tech icon */}
          <div className="relative">
            <span className="text-5xl sm:text-6xl lg:text-7xl animate-pulse-scale">💻</span>
            
            {/* Orbiting meteor */}
            <div className="absolute inset-0 w-28 h-28 sm:w-40 sm:h-40">
              <div className="animate-orbit w-full h-full relative">
                <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl">🌠</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-2 leading-tight animate-float">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Clarissa</span>
        </h1>

        <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-700 mb-6 md:mb-8 font-light animate-float" style={{ animationDelay: '0.1s' }}>
          <span className="font-bold text-gray-900">Computer Science Student</span> &{' '}
          <span className="font-bold text-gray-900">Web Developer</span>
        </h2>

        <p className="text-sm sm:text-lg text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-float" style={{ animationDelay: '0.2s' }}>
          Crafting{' '}
          <span className="font-bold text-gray-900">elegant digital experiences</span> with a
          passion for{' '}
          <span className="font-bold text-gray-900">clean code</span> and beautiful design. I
          transform ideas into functional, accessible, and visually stunning web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 animate-float" style={{ animationDelay: '0.3s' }}>
          <Link href="/projects" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Explore My Work
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs md:text-sm text-gray-500 font-medium">Scroll to explore</p>
          <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};