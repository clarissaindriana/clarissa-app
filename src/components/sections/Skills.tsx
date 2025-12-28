import React from 'react';
import Image from 'next/image';

interface TechStackItem {
  name: string;
  image: string;
}

export const Skills = () => {
  const techStack: TechStackItem[] = [
    { name: 'Java', image: '/images/java.png' },
    { name: 'Spring Boot', image: '/images/springboot.png' },
    { name: 'Python', image: '/images/python.png' },
    { name: 'Go', image: '/images/golang.png' },
    { name: 'Django', image: '/images/django.png' },
    { name: 'Flutter', image: '/images/flutter.png' },
    { name: 'HTML', image: '/images/html.png' },
    { name: 'CSS', image: '/images/css.png' },
    { name: 'Vue', image: '/images/vue.png' },
    { name: 'JavaScript', image: '/images/js.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'TypeScript', image: '/images/ts.png' },
    { name: 'Vite', image: '/images/vite.png' },
    { name: 'Next.js', image: '/images/next-js.png' },
    { name: 'PostgreSQL', image: '/images/postgresql.png' },
    { name: 'MongoDB', image: '/images/mongodb.png' },
    { name: 'Supabase', image: '/images/supabase.png' },
    { name: 'Spark', image: '/images/spark.png' },
    { name: 'Docker', image: '/images/docker.png' },
    { name: 'Kubernetes', image: '/images/kubernetes.png' },
    { name: 'AWS EC2', image: '/images/ec2.png' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Decorative dots pattern */}
      <div className="absolute top-20 left-8 w-2 h-2 bg-gray-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-32 right-12 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-30"></div>
      <div className="absolute top-40 right-16 w-1 h-1 bg-gray-300 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Tech <span className="text-black">Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto font-light">
            The technologies I use to build full-stack applications—from backend services and APIs to modern frontends and cloud deployment.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-3 sm:p-5 lg:p-6 rounded-lg transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-black text-center group-hover:text-black/80 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};