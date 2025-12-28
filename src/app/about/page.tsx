import React from 'react';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <style>{`
        @keyframes float-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float-down 0.8s ease-out;
        }
      `}</style>

      <Container className="py-16">
        <div className="max-w-5xl mx-auto">
          {/* Title - Outside Window */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-12 animate-float" style={{ animationDelay: '0.1s' }}>
            About <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Me</span>
          </h1>

          {/* Apple-style Window with 2 Columns */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 animate-float" style={{ animationDelay: '0.2s' }}>
            {/* Window Title Bar (macOS style) */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-50 px-6 py-3 border-b border-gray-300 flex items-center gap-3">
              {/* Traffic lights */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xs font-semibold text-gray-600">Clarissa — About</p>
              </div>
            </div>

            {/* Window Content - 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-96">
              {/* Left Column - Profile */}
              <div className="border-r border-gray-200 p-8 sm:p-10 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">Clarissa</h2>
                  <p className="text-gray-600 text-lg mb-1">Information System Student</p>
                  <p className="text-gray-500 text-sm">Universitas Indonesia</p>
                  
                  {/* Interests Section */}
                  {/* <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-700 font-semibold mb-4">Interests & Hobbies</p>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: '📚', title: 'Reading' },
                        { icon: '🎵', title: 'Music' },
                        { icon: '🏃‍♀️', title: 'Running' },
                      ].map((interest) => (
                        <div key={interest.title} className="text-center">
                          <div className="text-2xl mb-1">{interest.icon}</div>
                          <p className="text-xs text-gray-600">{interest.title}</p>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right Column - About Text */}
              <div className="p-8 sm:p-10 flex flex-col justify-center overflow-hidden">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Who I Am</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      I’m a curious computer science student and teaching assistant at Universitas Indonesia with a strong interest in multidisciplinary learning and emerging technologies. 
                      I’m passionate about building systems with real social impact.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">What I Do</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Currently exploring blockchain and distributed ledger technologies (DLT), including smart contracts, system architecture, security, and consensus mechanisms.

                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Let's create something amazing together.
                    </p>
                    {/* <div className="flex gap-2">
                      <Link href="/contact" className="flex-1">
                        <Button variant="primary" size="sm" className="w-full">
                          Get In Touch
                        </Button>
                      </Link>
                      <Link href="/projects" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          View Projects
                        </Button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}