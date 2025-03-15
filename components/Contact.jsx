import React from 'react';
import { FaLinkedinIn, FaGithub, FaMedium } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const SocialButton = ({ href, icon, label, color }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group"
        >
            <div className={`rounded-xl shadow-lg shadow-gray-400/50 p-5 cursor-pointer hover:scale-110 hover:shadow-${color}/30 ease-in duration-300 bg-white/90 backdrop-blur-sm`}>
                {icon}
            </div>
        </a>
    );
};

const Contact = () => {
    return (
        <div id='contact' className='w-full py-24'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Contact
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Get In Touch</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Feel free to connect with me on social media or send me an email.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <SocialButton 
                            href="https://www.linkedin.com/in/burak-fidan/"
                            icon={<FaLinkedinIn size={22} className="text-[#0077b5]" />}
                            label="LinkedIn"
                            color="blue"
                        />
                        <SocialButton 
                            href="https://github.com/MrNtlu"
                            icon={<FaGithub size={22} className="text-gray-800" />}
                            label="GitHub"
                            color="purple"
                        />
                        <SocialButton 
                            href="mailto:mrntlu@gmail.com"
                            icon={<AiOutlineMail size={22} className="text-[#5651e5]" />}
                            label="Email"
                            color="green"
                        />
                        <SocialButton 
                            href="https://burakdev.medium.com/"
                            icon={<FaMedium size={22} className="text-black" />}
                            label="Medium"
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;