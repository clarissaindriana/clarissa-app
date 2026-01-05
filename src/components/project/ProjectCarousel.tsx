'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Project } from '../../data/projects';
import { TechStack } from './TechStack';

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setCurrentX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = startX - currentX;
    // Only navigate if swipe distance is significant (> 50px)
    // This prevents accidental navigation on tap/click
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setCurrentX(0);
  };

  // Get visible projects (1 on mobile, 3 on desktop)
  const visibleProjects = [
    projects[(currentIndex - 1 + projects.length) % projects.length],
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel cards container */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full cursor-grab active:cursor-grabbing touch-manipulation"
      >
        <div className="flex gap-4 sm:gap-6 justify-center items-center px-2 sm:px-4">
          {visibleProjects.map((project, idx) => {
            const isCenter = idx === 1;
            
            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`flex-shrink-0 transition-all duration-500 ${
                  isCenter
                    ? 'w-full sm:w-96 opacity-100'
                    : 'hidden sm:block sm:w-64 opacity-70 sm:opacity-60'
                }`}
                onClick={(e) => {
                  // Only allow navigation if it's not a swipe gesture
                  // The carousel will handle swipes, links handle clicks
                  if (isDragging && Math.abs(startX - currentX) > 50) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-300 font-mono text-sm">
                  {/* Mac Terminal Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                    {/* Traffic light buttons */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                    </div>
                    {/* Terminal path */}
                    <span className="text-xs text-gray-600 ml-2">~/project</span>
                  </div>

                  {/* Terminal content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <div className="mb-2">
                      <span className="text-blue-600">name</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-gray-900 ml-2 font-semibold text-base">{project.title}</span>
                    </div>

                    {/* Description */}
                    <div className="mb-3 flex-1">
                      <span className="text-blue-600">desc</span>
                      <span className="text-gray-400">:</span>
                      <p className="text-gray-700 ml-2 text-xs leading-relaxed line-clamp-2 mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-3 pb-3 border-t border-gray-300">
                      <div className="mt-3">
                        <span className="text-blue-600 text-xs">stack</span>
                        <span className="text-gray-400">:</span>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-orange-600 px-2 py-0.5 bg-orange-50 rounded text-xs border border-orange-200">
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="text-gray-600 px-2 py-0.5 bg-gray-100 rounded text-xs border border-gray-300">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* View command */}
                    <div className="text-gray-700 flex items-start gap-2 group-hover:text-gray-900 transition-colors">
                      <span>$</span>
                      <span className="text-xs">view <span className="text-gray-400">→</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Navigation controls - centered below cards */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          ←
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </div>
  );
};
