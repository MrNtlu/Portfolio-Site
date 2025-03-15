import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubActivity = () => {
    return (
        <div className='w-full py-24 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden'>
            {/* Background elements */}
            <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-5'></div>
            <div className='absolute top-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob'></div>
            <div className='absolute bottom-40 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000'></div>
            
            <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        GitHub Activity
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Contributions</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        A visualization of my coding activity and contributions on GitHub.
                    </p>
                </div>

                <div className="rounded-xl bg-white border border-gray-200 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <img
                        src="https://ghchart.rshah.org/30a14e/mrntlu"
                        alt="MrNtlu's Github chart"
                        className="w-full h-auto rounded-lg"
                    />
                    
                    <div className="mt-8 text-center">
                        <a
                            href="https://github.com/MrNtlu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 text-[#5651e5] rounded-lg hover:bg-[#5651e5] hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                        >
                            <FaGithub size={20} />
                            <span>View GitHub Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubActivity; 