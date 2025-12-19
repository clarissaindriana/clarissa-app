import React from 'react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { skills } from '../../data/skills';

export const Skills = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologies',
    design: 'Design',
  };

  const getSkillsByCategory = (category: keyof typeof categories) => {
    return skills.filter(skill => skill.category === category);
  };

  const getBadgeVariant = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'green';
      case 'intermediate':
        return 'blue';
      case 'beginner':
        return 'pink';
      default:
        return 'pink';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([key, title]) => {
            const categorySkills = getSkillsByCategory(key as keyof typeof categories);
            return (
              <Card key={key} className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={getBadgeVariant(skill.level)}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skill levels legend */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Skill Levels:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="green">Advanced</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="blue">Intermediate</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="pink">Beginner</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};