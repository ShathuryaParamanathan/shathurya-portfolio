import React from 'react';
import projectsData from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg p-5">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline mt-2 block">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;