import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden pt-20 md:pt-16">
      <style>{`
        @keyframes float-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing-1 {
          0% { width: 0; }
          20% { width: 11.5em; }
          70% { width: 11.5em; }
          100% { width: 0; }
        }
        @keyframes typing-2 {
          0% { width: 0; }
          25% { width: 0; }
          45% { width: 22.5em; }
          80% { width: 22.5em; }
          100% { width: 0; }
        }
        @keyframes typing-3 {
          0% { width: 0; }
          50% { width: 0; }
          70% { width: 17em; }
          90% { width: 17em; }
          100% { width: 0; }
        }
        @keyframes typing-success {
          0% { opacity: 0; }
          75% { opacity: 0; }
          95% { opacity: 1; }
          100% { opacity: 1; }
        }
        @keyframes cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-float {
          animation: float-down 0.8s ease-out;
        }
        .typing-1 {
          animation: typing-1 12s ease-in-out infinite;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
        }
        .typing-2 {
          animation: typing-2 12s ease-in-out infinite;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
        }
        .typing-3 {
          animation: typing-3 12s ease-in-out infinite;
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
        }
        .typing-success {
          animation: typing-success 12s ease-in-out infinite;
        }
        .cursor {
          animation: cursor-blink 1s infinite;
          display: inline-block;
          width: 2px;
          height: 1em;
          margin-left: 0px;
          background: #4b5563;
        }
      `}</style>
      {/* Decorative background elements */}
      <div className="absolute top-20 left-4 md:left-12 w-2 h-2 bg-gray-300 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-6 md:right-16 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-40 left-8 w-1 h-1 bg-gray-300 rounded-full opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-1 md:mb-2 leading-tight animate-float">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Clarissa</span>
        </h1>

        <h2 className="text-lg sm:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-8 font-light animate-float" style={{ animationDelay: '0.1s' }}>
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

        {/* Animated Terminal Section */}
        <div className="mb-12 md:mb-16 animate-float" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            {/* Terminal Header */}
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-300">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-600 ml-3 font-mono">~/code</span>
            </div>

            {/* Terminal Content */}
            <div className="px-4 py-3 text-left font-mono text-xs sm:text-sm min-w-60 sm:min-w-96 h-24">
              {/* Line 1 - Typing git add */}
              <div className="text-gray-600 mb-2 min-h-5 h-5">
                <span className="text-green-600">$</span>
                <span className="text-gray-900 ml-2">
                  <span className="typing-1">git add .</span>
                  <span className="cursor"></span>
                </span>
              </div>

              {/* Line 2 - Typing git commit */}
              <div className="text-gray-600 mb-2 min-h-5 h-5">
                <span className="text-green-600">$</span>
                <span className="text-gray-900 ml-2">
                  <span className="typing-2">git commit -m <span className="text-red-600">"feat: amazing projects"</span></span>
                  <span className="cursor"></span>
                </span>
              </div>

              {/* Line 3 - Typing git push */}
              <div className="text-gray-600 mb-2 min-h-5 h-5">
                <span className="text-green-600">$</span>
                <span className="text-gray-900 ml-2">
                  <span className="typing-3">git push origin main</span>
                  <span className="cursor"></span>
                </span>
              </div>

              {/* Line 4 - Success */}
              <div className="text-gray-600 min-h-5 h-5 typing-success">
                <span className="text-gray-400"># Pushing code to production ✨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 animate-float" style={{ animationDelay: '0.4s' }}>
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