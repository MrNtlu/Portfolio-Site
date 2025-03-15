import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { PortfolioProjects } from '../constants/Projects';

const ProjectCard = ({ name, description, tags, github, playstore, appstore, slug }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#5651e5]/20 group ${
                slug === 'watchlistfy' ? 'md:col-span-2' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-6 h-full">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#5651e5] transition-colors mb-2">
                                {name}
                            </h3>
                            <div className="h-1 w-20 bg-[#5651e5]/20 group-hover:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="flex gap-3 ml-4">
                            {github && (
                                <a 
                                    href={github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`GitHub repository for ${name}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors transform hover:scale-110"
                                >
                                    <FaGithub size={20} />
                                </a>
                            )}
                            {playstore && (
                                <a 
                                    href={playstore} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`Play Store link for ${name}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors transform hover:scale-110"
                                >
                                    <FaGooglePlay size={18} />
                                </a>
                            )}
                            {appstore && (
                                <a 
                                    href={appstore} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={`App Store link for ${name}`}
                                    className="text-gray-700 hover:text-[#5651e5] transition-colors transform hover:scale-110"
                                >
                                    <FaAppStore size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3 group-hover:text-gray-700 transition-colors">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="inline-block px-3 py-1 text-xs font-medium bg-[#5651e5]/5 text-[#5651e5] rounded-full transition-all duration-300 group-hover:bg-[#5651e5]/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/0 to-[#5651e5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

const Projects = () => {
    return (
        <div id='projects' className='w-full py-24'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Projects
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>What I&apos;ve Built</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Here are some of my recent projects. Each one is crafted with attention to detail and modern technologies.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {PortfolioProjects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;