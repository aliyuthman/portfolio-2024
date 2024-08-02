import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Hello, I am the Projects section with filterable cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          title="Project 1"
          description="A brief description of project 1"
          imageUrl="/path/to/project1-image.jpg"
        />
        <ProjectCard
          title="Project 2"
          description="A brief description of project 2"
          imageUrl="/path/to/project2-image.jpg"
        />
        <ProjectCard
          title="Project 3"
          description="A brief description of project 3"
          imageUrl="/path/to/project3-image.jpg"
        />
      </div>
    </section>
  );
};

export default Projects;
