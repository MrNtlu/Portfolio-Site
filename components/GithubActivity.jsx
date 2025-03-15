import React from 'react';

const GithubActivity = () => {
    return (
        <div className='w-full py-24 bg-gray-50'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        GitHub Activity
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Contributions</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        A visualization of my coding activity and contributions on GitHub.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <img
                        src="https://ghchart.rshah.org/5651e5/mrntlu"
                        alt="MrNtlu's Github chart"
                        className="w-full h-auto"
                    />
                    
                    <div className="mt-8 text-center">
                        <a
                            href="https://github.com/MrNtlu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5651e5] text-white rounded-lg hover:bg-[#4540b3] transition-colors duration-300"
                        >
                            <span>View My GitHub Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubActivity; 