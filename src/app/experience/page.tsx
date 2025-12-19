import React from 'react';
import { Container } from '../../components/layout/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { experiences } from '../../data/experience';

export default function Experience() {
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');
  const projectExperiences = experiences.filter(exp => exp.type === 'project');

  const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {experience.title}
          </h3>
          <p className="text-pastel-green font-medium mb-2">
            {experience.company} • {experience.location}
          </p>
        </div>
        <Badge variant="blue" className="self-start sm:self-auto">
          {experience.type}
        </Badge>
      </div>

      <p className="text-gray-600 mb-4">
        {experience.startDate} - {experience.endDate || 'Present'}
      </p>

      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-pastel-pink mr-2 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="green">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );

  return (
    <main className="min-h-screen pt-16">
      <Container className="py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              My Experience
            </h1>
            <p className="text-xl text-gray-600">
              A journey through my professional and academic growth
            </p>
          </div>

          {/* Work Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center mr-3">
                💼
              </span>
              Work Experience
            </h2>
            <div className="space-y-6">
              {workExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-8 h-8 bg-pastel-green rounded-full flex items-center justify-center mr-3">
                🎓
              </span>
              Education
            </h2>
            <div className="space-y-6">
              {educationExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </section>

          {/* Projects & Activities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-8 h-8 bg-pastel-blue rounded-full flex items-center justify-center mr-3">
                🚀
              </span>
              Projects & Activities
            </h2>
            <div className="space-y-6">
              {projectExperiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </section>

          {/* Skills Summary */}
          <Card className="p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Skills Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-pastel-pink mb-2">
                  {workExperiences.length + projectExperiences.length}
                </div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pastel-green mb-2">
                  {educationExperiences.length}
                </div>
                <p className="text-gray-600">Years of Education</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pastel-blue mb-2">
                  15+
                </div>
                <p className="text-gray-600">Technologies Learned</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}