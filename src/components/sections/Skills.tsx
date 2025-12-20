import React from 'react';

export const Skills = () => {
  const techStack = [
    { name: 'Java', logo: 'Java' },
    { name: 'Spring Boot', logo: 'Spring' },
    { name: 'Python', logo: 'Python' },
    { name: 'Go', logo: 'Go' },
    { name: 'Django', logo: 'Django' },
    { name: 'HTML', logo: 'HTML' },
    { name: 'CSS', logo: 'CSS' },
    { name: 'Vue', logo: 'Vue' },
    { name: 'JavaScript', logo: 'JS' },
    { name: 'React', logo: 'React' },
    { name: 'TypeScript', logo: 'TS' },
    { name: 'Vite', logo: 'Vite' },
    { name: 'Next.js', logo: 'Next' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: 'K8s' },
    { name: 'AWS', logo: 'AWS' },
  ];

  const getLogoStyle = (name: string) => {
    const logoStyles: Record<string, React.CSSProperties> = {
      Java: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },
      Spring: {
        fontSize: '2.5rem',
        color: '#6DB33F',
        fontWeight: 'bold',
      },
      Python: {
        fontSize: '2.5rem',
        background: 'linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 'bold',
      },
      Go: {
        fontSize: '2.5rem',
        color: '#00ADD8',
        fontWeight: 'bold',
      },
      Django: {
        fontSize: '2.5rem',
        color: '#092E20',
        fontWeight: 'bold',
      },
      HTML: {
        fontSize: '2.5rem',
        color: '#E34C26',
        fontWeight: 'bold',
      },
      CSS: {
        fontSize: '2.5rem',
        color: '#1572B6',
        fontWeight: 'bold',
      },
      Vue: {
        fontSize: '2.5rem',
        color: '#4FC08D',
        fontWeight: 'bold',
      },
      JS: {
        fontSize: '2.5rem',
        color: '#F7DF1E',
        fontWeight: 'bold',
      },
      React: {
        fontSize: '2.5rem',
        color: '#61DAFB',
        fontWeight: 'bold',
      },
      TS: {
        fontSize: '2.5rem',
        color: '#3178C6',
        fontWeight: 'bold',
      },
      Vite: {
        fontSize: '2.5rem',
        background: 'linear-gradient(135deg, #646CFF 0%, #F64DB8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 'bold',
      },
      Next: {
        fontSize: '2.5rem',
        color: '#000000',
        fontWeight: 'bold',
      },
      AWS: {
        fontSize: '2.5rem',
        color: '#FF9900',
        fontWeight: 'bold',
      },
      K8s: {
        fontSize: '2.5rem',
        color: '#326CE5',
        fontWeight: 'bold',
      },
    };
    return logoStyles[name] || { fontSize: '2.5rem', fontWeight: 'bold' };
  };

  const getDisplayLogo = (name: string) => {
    const logos: Record<string, string> = {
      Java: '☕',
      Spring: '🍃',
      Python: '🐍',
      Go: '🐹',
      Django: '🎯',
      HTML: '⟨⟩',
      CSS: '❧',
      Vue: '✔',
      JS: '⚡',
      React: '⚛',
      TS: 'TS',
      Vite: '⚙',
      Next: '▲',
      '🐳': '🐳',
      K8s: '☸',
      AWS: '◆',
    };
    return logos[name] || name;
  };

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
            Here's My <span className="text-black">Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto font-light">
            Technologies and tools I work with to build amazing things.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg border border-black/10 hover:border-black hover:bg-black/5 transition-all duration-300 group cursor-pointer"
            >
              <span
                className="mb-2 group-hover:scale-110 transition-transform block"
                style={getLogoStyle(tech.logo)}
              >
                {getDisplayLogo(tech.logo)}
              </span>
              <p className="text-xs sm:text-sm font-medium text-black text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};