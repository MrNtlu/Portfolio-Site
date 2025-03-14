import React from 'react';
import { PortfolioExperiences } from '../constants/Experiences';

const Experience = () => {
    return (
        <div id='experience' className='w-full py-24 bg-white'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Experience
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Work History</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Here&apos;s a brief overview of my professional journey. I&apos;m always eager to take on new challenges and expand my skill set.
                    </p>
                </div>
                <div className='relative'>
                    {/* Timeline line */}
                    <div className='absolute h-full w-0.5 bg-gray-200 left-6 md:left-1/2 transform -translate-x-1/2'></div>
                    
                    {/* Experience items */}
                    <div className='space-y-8'>
                        {PortfolioExperiences.map((exp, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:justify-normal gap-x-4 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}>
                                {/* Timeline dot */}
                                <div className='absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full'></div>
                                
                                {/* Content */}
                                <div className={`w-full md:w-[45%] bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${
                                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                }`}>
                                    <h3 className='text-xl font-bold text-gray-800'>{exp.position}</h3>
                                    <h4 className='text-lg font-semibold text-blue-600'>{exp.company}</h4>
                                    <p className='text-sm text-gray-600 mt-1'>
                                        {exp.start_date} - {exp.end_date || 'Present'}
                                    </p>
                                    <p className='mt-2 text-gray-700'>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;