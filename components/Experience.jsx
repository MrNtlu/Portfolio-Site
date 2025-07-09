import React from 'react';
import { PortfolioExperiences } from '../constants/Experiences';

const Experience = () => {
    return (
        <div id="experience" className="w-full py-24 relative bg-gradient-to-b from-white via-white to-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-gray-100/80 to-transparent"></div>
            <div className="absolute top-0 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="max-w-[1240px] mx-auto px-4 relative z-10">
                <div className="mb-12 text-center">
                    <p className="inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full">
                        Experience
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work History</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here's a brief overview of my professional journey. I'm always eager to take on new challenges and expand my skill set.
                    </p>
                </div>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute h-full w-0.5 bg-gray-200 left-6 md:left-1/2 transform -translate-x-1/2"></div>

                    {/* Experience items */}
                    <div className="space-y-8">
                        {PortfolioExperiences.map((exp, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:justify-normal gap-x-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>

                                {/* Content */}
                                <div className={`w-full md:w-[45%] relative overflow-hidden rounded-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#5651e5]/20 group p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                    }`}>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#5651e5] transition-colors">{exp.position}</h3>
                                    <h4 className="text-lg font-semibold text-[#5651e5]">{exp.company}</h4>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors mt-1">
                                        {exp.start_date} - {exp.end_date || 'Present'}
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-700 group-hover:text-gray-900 transition-colors">
                                        {exp.description.trim().split('\n').map((item, idx) => {
                                            const text = item.replace(/^\s*[-*]\s*/, '');
                                            return text ? <li key={idx}>{text}</li> : null;
                                        })}
                                    </ul>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/0 to-[#5651e5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExperienceCard = ({ position, company, start_date, end_date, description }) => {
    return (
        <div className="relative overflow-hidden rounded-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#5651e5]/20 group p-6">
            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#5651e5] transition-colors">
                            {position}
                        </h3>
                        <p className="text-[#5651e5] font-medium">{company}</p>
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors whitespace-nowrap ml-4">
                        {start_date} - {end_date}
                    </p>
                </div>
                <ul className="list-disc pl-5 mt-4 text-gray-600 group-hover:text-gray-700 transition-colors">
                    {description.trim().split('\n').map((item, idx) => {
                        const text = item.replace(/^\s*[-*]\s*/, '');
                        return text ? <li key={idx}>{text}</li> : null;
                    })}
                </ul>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/0 to-[#5651e5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default Experience;
