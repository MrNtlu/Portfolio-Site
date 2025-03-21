import React, { useState } from 'react';
import Image from 'next/image';
import { FaMedium } from 'react-icons/fa';
import { BlogPosts } from '../constants/BlogPosts';

const BlogCard = ({ title, description, thumbnail, link, pubDate }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative overflow-hidden rounded-xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#5651e5]/20 group shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
        >
            <div className="relative w-full h-48">
                {!imgError ? (
                    <Image
                        src={thumbnail || '/assets/placeholder-blog.jpg'}
                        alt={title || 'Blog post thumbnail'}
                        width={800}
                        height={400}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        onError={() => setImgError(true)}
                        unoptimized={true}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-500">Image not available</span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#5651e5] transition-colors">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">{description}</p>
                <p className="text-sm text-gray-500 group-hover:text-[#5651e5] transition-colors">
                    {new Date(pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5]/0 to-[#5651e5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </a>
    );
};

const Blog = () => {
    return (
        <div id='blog' className='w-full py-24 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden'>
            {/* Background elements */}
            <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-5'></div>
            <div className='absolute top-40 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob'></div>
            <div className='absolute bottom-20 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000'></div>
            
            <div className='max-w-[1240px] mx-auto px-4 relative z-10'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Blog
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Latest Articles</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Check out my latest thoughts and experiences in software development.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {BlogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://burakdev.medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 text-[#5651e5] rounded-lg hover:bg-[#5651e5] hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                    >
                        <FaMedium size={20} />
                        <span>Read More on Medium</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blog; 