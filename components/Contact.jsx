import React from 'react';
import { FaLinkedinIn, FaGithub, FaMedium } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const SocialButton = ({ href, icon, label, color, hoverColor }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group"
        >
            <div className={`flex items-center justify-center p-5 rounded-full shadow-lg
                ${color} text-white
                transform transition-all duration-300
                hover:scale-110 hover:shadow-xl ${hoverColor}`}
            >
                {icon}
            </div>
            <p className="mt-3 text-center text-sm font-medium text-gray-600">{label}</p>
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
                            icon={<FaLinkedinIn size={24} />}
                            label="LinkedIn"
                            color="bg-[#0077b5]"
                            hoverColor="hover:bg-[#005885]"
                        />
                        <SocialButton 
                            href="https://github.com/MrNtlu"
                            icon={<FaGithub size={24} />}
                            label="GitHub"
                            color="bg-[#333]"
                            hoverColor="hover:bg-black"
                        />
                        <SocialButton 
                            href="mailto:mrntlu@gmail.com"
                            icon={<AiOutlineMail size={24} />}
                            label="Email"
                            color="bg-[#5651e5]"
                            hoverColor="hover:bg-[#4540b3]"
                        />
                        <SocialButton 
                            href="https://burakdev.medium.com/"
                            icon={<FaMedium size={24} />}
                            label="Medium"
                            color="bg-[#000]"
                            hoverColor="hover:bg-[#222]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;