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
            className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
        >
            <div className="relative w-full h-48">
                {!imgError ? (
                    <Image
                        src={thumbnail || '/assets/placeholder-blog.jpg'}
                        alt={title || 'Blog post thumbnail'}
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
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
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                <p className="text-sm text-gray-500">
                    {new Date(pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>
        </a>
    );
};

const Blog = () => {
    return (
        <div id='blog' className='w-full py-24 bg-gray-50'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Blog
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Latest Articles</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Check out my latest thoughts and experiences in software development.
                    </p>
                </div>

                {BlogPosts.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-gray-600 mb-6">No articles found.</p>
                        <a 
                            href="https://medium.com/@mrntlu" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <FaMedium size={24} />
                            <span>View My Medium Profile</span>
                        </a>
                    </div>
                ) : (
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {BlogPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog; 