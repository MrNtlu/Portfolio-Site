import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { PortfolioProjects } from '../constants/Projects';

const ProjectCard = ({ title, description, tags, github, playstore, appstore, slug }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 bg-white ${
                slug === 'watchlistfy' ? 'md:col-span-2' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        <div className="flex gap-3">
                            {github && (
                                <a 
                                    href={github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`GitHub repository for ${title}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors"
                                >
                                    <FaGithub size={20} />
                                </a>
                            )}
                            {playstore && (
                                <a 
                                    href={playstore} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`Play Store link for ${title}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors"
                                >
                                    <FaGooglePlay size={18} />
                                </a>
                            )}
                            {appstore && (
                                <a 
                                    href={appstore} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`App Store link for ${title}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors"
                                >
                                    <FaAppStore size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div id='projects' className='w-full py-24 bg-gray-50'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Projects
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Recent Work</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Check out some of my latest projects. These applications showcase my skills in mobile development, 
                        backend architecture, and user interface design.
                    </p>
                </div>
                
                <div className='grid md:grid-cols-2 gap-8'>
                    {PortfolioProjects.map((project) => (
                        <ProjectCard 
                            key={project.slug}
                            title={project.name}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                            playstore={project.playstore}
                            appstore={project.appstore}
                            slug={project.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;