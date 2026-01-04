'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectDetailClientProps {
  project: Project;
}

export const ProjectDetailClient = ({ project }: ProjectDetailClientProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedTechStack, setExpandedTechStack] = useState(false);
  const projectImages = project.images || (project.image ? [project.image] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full w-fit mb-6">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="text-xs font-medium text-blue-700 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Long Description */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Featured Technologies
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {(expandedTechStack ? project.techStack : project.techStack.slice(0, 6)).map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                  {project.techStack.length > 6 && (
                    <button
                      onClick={() => setExpandedTechStack(!expandedTechStack)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-medium text-gray-500 hover:text-blue-600">
                        {expandedTechStack ? 'Show less' : `+${project.techStack.length - 6} more`}
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {/* {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )} */}
              </div>
            </div>

            {/* Right Side - Visual Showcase */}
            <div className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white p-8 sm:p-12 lg:p-16 flex items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
              
              {projectImages.length > 0 ? (
                <div className="relative w-full max-w-2xl">
                  {/* Image Display - No Container, Direct Placement */}
                  <div className="relative w-full h-[500px]">
                    <Image
                      src={projectImages[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                    
                    {/* Image Navigation */}
                    {projectImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110 z-10"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-900" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110 z-10"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-900" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Indicators */}
                  {projectImages.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {projectImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`transition-all ${
                            currentImageIndex === index
                              ? 'w-8 h-2 bg-gray-900 rounded-full'
                              : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Floating Info Cards */}
                  {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 hidden lg:block">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">✓</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Status</p>
                        <p className="text-sm font-bold text-gray-900">Completed</p>
                      </div>
                    </div>
                  </div> */}

                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200 hidden lg:block">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{project.techStack.length}</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Technologies</p>
                        <p className="text-sm font-bold text-gray-900">Used</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[500px]">
                  {/* iPhone Mockup */}
                  <div className="relative w-64 h-[600px]">
                    {/* Phone frame */}
                    <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-2xl z-20"></div>
                      
                      {/* Screen content */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-8 px-4 flex flex-col items-center justify-center text-center">
                        <div className="mb-3 text-4xl opacity-40">🖼️</div>
                        <p className="text-sm font-semibold text-gray-400 mb-1">Images Currently Not Available</p>
                        <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Check back soon for project screenshots</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features Section - Full Width Bottom */}
          <div className="border-t border-gray-200 bg-gray-50/50 p-6 sm:p-12 lg:p-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};