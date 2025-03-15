import React, { useState, useEffect } from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaMedium, FaArrowUp } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id='home' className='w-full h-screen relative bg-gradient-to-b from-white to-gray-100 flex items-center justify-center overflow-hidden'>
            {/* Background elements */}
            <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-5'></div>
            <div className='absolute top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
            <div className='absolute top-40 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
            <div className='absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
            
            {/* Main content */}
            <div className='max-w-[1240px] mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10'>
                <div className='mb-16'>
                    <p className='inline-block uppercase text-sm tracking-[0.3em] text-gray-600 mb-4 bg-gray-100 px-4 py-2 rounded-full shadow-sm'>
                        Based in Osaka, Japan
                    </p>
                    
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6'>
                        Hi, I&apos;m <span className='text-[#5651e5] relative inline-block'>
                            Burak
                            <span className='absolute -inset-1 bg-blue-100 opacity-30 blur-sm rounded-lg'></span>
                        </span>
                    </h1>
                    
                    <h2 className='text-2xl md:text-3xl text-gray-700 mb-6'>Computer Engineer</h2>
                    
                    <p className='text-gray-600 max-w-2xl mx-auto mb-10 text-lg leading-relaxed'>
                        I&apos;m focused on building applications with hybrid & native technologies
                        and creating backend services with various technologies.
                    </p>
                    
                    <div className='flex items-center justify-center gap-5 mb-16'>
                        <a
                            href='https://www.linkedin.com/in/burak-fidan/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label="LinkedIn"
                            className='social-icon-link'
                        >
                            <div className='rounded-xl shadow-lg shadow-gray-400/50 p-5 cursor-pointer hover:scale-110 hover:shadow-blue-400/30 ease-in duration-300 bg-white/90 backdrop-blur-sm'>
                                <FaLinkedinIn size={22} className="text-[#0077b5]" />
                            </div>
                        </a>

                        <a
                            href='https://github.com/MrNtlu'
                            target='_blank'
                            rel='noreferrer'
                            aria-label="GitHub"
                            className='social-icon-link'
                        >
                            <div className='rounded-xl shadow-lg shadow-gray-400/50 p-5 cursor-pointer hover:scale-110 hover:shadow-purple-400/30 ease-in duration-300 bg-white/90 backdrop-blur-sm'>
                                <FaGithub size={22} className="text-gray-800" />
                            </div>
                        </a>

                        <Link href='/#contact'>
                            <div className='rounded-xl shadow-lg shadow-gray-400/50 p-5 cursor-pointer hover:scale-110 hover:shadow-green-400/30 ease-in duration-300 bg-white/90 backdrop-blur-sm'>
                                <AiFillMail size={22} className="text-[#5651e5]" />
                            </div>
                        </Link>

                        <a
                            href='https://burakdev.medium.com/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label="Medium"
                            className='social-icon-link'
                        >
                            <div className='rounded-xl shadow-lg shadow-gray-400/50 p-5 cursor-pointer hover:scale-110 hover:shadow-orange-400/30 ease-in duration-300 bg-white/90 backdrop-blur-sm'>
                                <FaMedium size={22} className="text-black" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div 
                onClick={() => {
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute bottom-10 w-full flex justify-center items-center animate-bounce cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                aria-label="Scroll to experience section"
            >
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 mb-2 font-medium tracking-wider">Scroll Down</p>
                    <svg 
                        className="w-6 h-6 text-[#5651e5]"
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-4 rounded-full bg-[#5651e5] text-white shadow-lg 
                    hover:bg-[#4540b3] transition-all duration-300 z-50
                    ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                `}
                aria-label="Scroll to top"
            >
                <FaArrowUp size={20} />
            </button>
        </div>
    )
}

export default Main