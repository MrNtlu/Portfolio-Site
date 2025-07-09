import React from 'react';
import { SiKotlin, SiSwift, SiFlutter, SiGo, SiDjango, SiMongodb, SiPostgresql, SiRedis, SiNextdotjs, SiReact, SiTailwindcss, SiBootstrap, SiGithub, SiPython, SiFirebase, SiDocker, SiGooglecloud, SiSpring, SiAmazonaws, SiPinecone } from 'react-icons/si';
import { FaJava, FaMobile, FaServer, FaDatabase, FaGlobe, FaTools, FaRobot, FaGitAlt } from "react-icons/fa";

const SkillTag = ({ name, icon: Icon, color }) => (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:shadow-md ${color} group cursor-pointer`}>
        {Icon && <Icon className="text-lg transition-colors" />}
        <span className="text-sm font-semibold">{name}</span>
    </div>
);

const SkillCategory = ({ title, description, icon: Icon, skills, color, bgGradient }) => {
    return (
        <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:shadow-xl ${bgGradient} group`}>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${color} text-white shadow-lg transition-transform`}>
                        <Icon size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-700 text-sm font-medium">{description}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <SkillTag
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            color={skill.color}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Mobile Development",
            description: "Cross-platform & native mobile apps",
            icon: FaMobile,
            color: "bg-gradient-to-br from-purple-500 to-pink-500",
            bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300",
            skills: [
                { name: "Flutter", icon: SiFlutter, color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "Kotlin", icon: SiKotlin, color: "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100" },
                { name: "Java", icon: FaJava, color: "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100" },
                { name: "Swift", icon: SiSwift, color: "border-red-500 bg-red-50 text-red-700 hover:bg-red-100" },
            ]
        },
        {
            title: "Backend Development",
            description: "Server-side & API development",
            icon: FaServer,
            color: "bg-gradient-to-br from-green-500 to-teal-500",
            bgGradient: "bg-gradient-to-br from-green-50 to-teal-50 border-green-200 hover:border-green-300",
            skills: [
                { name: "Go", icon: SiGo, color: "border-cyan-500 bg-cyan-50 text-cyan-700 hover:bg-cyan-100" },
                { name: "Django", icon: SiDjango, color: "border-green-600 bg-green-50 text-green-700 hover:bg-green-100" },
                { name: "Flask", icon: SiPython, color: "border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "Spring Boot", icon: SiSpring, color: "border-green-500 bg-green-50 text-green-700 hover:bg-green-100" },
                { name: "Python", icon: SiPython, color: "border-yellow-500 bg-yellow-50 text-yellow-700 hover:bg-yellow-100" },
            ]
        },
        {
            title: "Database & Storage",
            description: "Data management & persistence",
            icon: FaDatabase,
            color: "bg-gradient-to-br from-blue-500 to-indigo-500",
            bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-300",
            skills: [
                { name: "MongoDB", icon: SiMongodb, color: "border-green-500 bg-green-50 text-green-700 hover:bg-green-100" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "Redis", icon: SiRedis, color: "border-red-500 bg-red-50 text-red-700 hover:bg-red-100" },
                { name: "Pinecone", icon: FaDatabase, color: "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100" },
            ]
        },
        {
            title: "Web Development",
            description: "Frontend frameworks & styling",
            icon: FaGlobe,
            color: "bg-gradient-to-br from-orange-500 to-red-500",
            bgGradient: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-orange-300",
            skills: [
                { name: "Next.js", icon: SiNextdotjs, color: "border-black bg-gray-50 text-gray-700 hover:bg-gray-100" },
                { name: "React.js", icon: SiReact, color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "Tailwind", icon: SiTailwindcss, color: "border-cyan-500 bg-cyan-50 text-cyan-700 hover:bg-cyan-100" },
                { name: "Bootstrap", icon: SiBootstrap, color: "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100" },
            ]
        },
        {
            title: "DevOps & Tools",
            description: "Development workflow & deployment",
            icon: FaTools,
            color: "bg-gradient-to-br from-gray-600 to-gray-800",
            bgGradient: "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200 hover:border-gray-300",
            skills: [
                { name: "Git", icon: FaGitAlt, color: "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100" },
                { name: "GitHub Actions", icon: SiGithub, color: "border-gray-600 bg-gray-50 text-gray-700 hover:bg-gray-100" },
                { name: "Docker", icon: SiDocker, color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "Docker Compose", icon: SiDocker, color: "border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100" },
            ]
        },
        {
            title: "AI & Cloud Services",
            description: "AI integration & cloud platforms",
            icon: FaRobot,
            color: "bg-gradient-to-br from-violet-500 to-purple-600",
            bgGradient: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200 hover:border-violet-300",
            skills: [
                { name: "AI Integration", icon: FaRobot, color: "border-purple-500 bg-purple-50 text-purple-700 hover:bg-purple-100" },
                { name: "Firebase", icon: SiFirebase, color: "border-yellow-500 bg-yellow-50 text-yellow-700 hover:bg-yellow-100" },
                { name: "Google Cloud", icon: SiGooglecloud, color: "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100" },
                { name: "AWS", icon: SiAmazonaws, color: "border-orange-500 bg-orange-50 text-orange-700 hover:bg-orange-100" },
            ]
        },
    ];

    return (
        <div id='skills' className='w-full py-24 bg-gradient-to-b from-gray-50 to-white'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 uppercase text-sm tracking-widest text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full shadow-lg">
                        <FaTools className="text-sm" />
                        Technical Skills
                    </div>
                    <h2 className='text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        My Technical Expertise
                    </h2>
                    <p className='text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed font-medium'>
                        A comprehensive overview of my technical skills across various domains. Click on any category to explore the specific technologies and tools I work with.
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-8'>
                    {skillCategories.map((category) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            description={category.description}
                            icon={category.icon}
                            skills={category.skills}
                            color={category.color}
                            bgGradient={category.bgGradient}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                        <span className="text-sm">Always learning and expanding my skill set</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;