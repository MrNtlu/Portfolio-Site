import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import NavImg from '../public/static/assets/navLogo.jpg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: "#ecf0f3" }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'fixed w-full h-20 z-[100]'
            } >
            <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
                <Image src={NavImg} alt="/" width='60' height='60' className='rounded-full' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Home</li>
                        </Link>

                        <Link href='https://medium.com/@burakdev'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Blog</li>
                        </Link>

                        <Link href='/#experience'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Experience</li>
                        </Link>

                        <Link href='/#skills'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Skills</li>
                        </Link>

                        <Link href='/#projects'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Projects</li>
                        </Link>

                        <Link href='/#contact'>
                            <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={NavImg} width='35' height='35' alt='/' className='rounded-full' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className='border-b border-gray-300 mt-8' />
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>

                            <Link href='/#experience'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Experience</li>
                            </Link>

                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>

                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>

                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar