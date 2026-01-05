import React from 'react';
import { Container } from '../../components/layout/Container';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-16">
      <Container>
        {/* Header */}
        <div className="text-center my-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Whether it’s about projects, learning, or collaboration, I’m always happy to connect and exchange ideas.
          </p>
        </div>

        {/* Contact Card - Envelope Design */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            {/* Envelope flap effect - triangular top */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <polygon points="0,0 600,50 1200,0 1200,100 0,100" fill="white" opacity="0.5"/>
                <line x1="0" y1="0" x2="600" y2="50" stroke="#e5e7eb" strokeWidth="2"/>
                <line x1="1200" y1="0" x2="600" y2="50" stroke="#e5e7eb" strokeWidth="2"/>
              </svg>
            </div>

            {/* Card Content - Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Contact Info */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200 pt-16 sm:pt-20">
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
                  <p className="text-gray-600 text-xs sm:text-sm">Reach out anytime, anywhere</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Email */}
                  <a href="mailto:clarissaindrianapramesti@gmail.com" className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-300 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Email</p>
                      <p className="text-xs sm:text-sm text-gray-900 font-semibold group-hover:text-gray-700 transition-colors break-words">clarissaindrianapramesti@gmail.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Location</p>
                      <p className="text-xs sm:text-sm text-gray-900 font-semibold">Jakarta, Indonesia</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a href="tel:+6282113437428" className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-300 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.368 4.57a1 1 0 001.088.199l1.547-.773a1 1 0 011.059.54l.74 4.435a1 1 0 01-.836.986l-2.153.122c-.78.068-1.511-.601-1.61-1.381-.23-1.82-.328-4.11.289-6.566a6.9 6.9 0 011.39-2.823c1.396-1.765 3.779-2.963 5.496-2.963m6.44 0c1.717 0 4.1 1.198 5.496 2.963a6.902 6.902 0 011.39 2.823c.617 2.456.519 4.746.289 6.566-.099.78-.83 1.449-1.61 1.381l-2.153-.122a1 1 0 01-.836-.986l.74-4.435a1 1 0 011.059-.54l1.547.773a1 1 0 001.088-.199c1.153-1.763 1.95-3.305 2.368-4.57l-1.548-.773a1 1 0 01-.54-1.06l.74-4.435a1 1 0 01.986-.836h2.153a1 1 0 011 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Phone</p>
                      <p className="text-xs sm:text-sm text-gray-900 font-semibold group-hover:text-gray-700 transition-colors">+62 821-1343-7428</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right side - Social Links */}
              <div className="bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center pt-16 sm:pt-20">
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Follow Me</h2>
                  <p className="text-gray-600 text-xs sm:text-sm">Connect with me on social media</p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {/* GitHub */}
                  <a
                    href="https://github.com/clarissaindriana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 group transition-all"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-xs sm:text-sm text-gray-900">GitHub</p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">@clarissaindriana</p>
                    </div>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/clarissaindriana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 group transition-all"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-xs sm:text-sm text-gray-900">LinkedIn</p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">@clarissaindriana</p>
                    </div>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Message hint */}
                <div className="mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Tip:</span> Feel free to reach out via email or call me directly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
