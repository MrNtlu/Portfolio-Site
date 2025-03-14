import React from 'react';
import { SiAndroid, SiIos, SiFlutter, SiKotlin, SiSwift, SiGo, SiPython, SiMongodb, SiDjango, SiFirebase, SiGithub } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const SkillCard = ({ name, level, color, icon: Icon }) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${color} text-white mr-4`}>
                    {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>
            
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out animate-fill-bar origin-left"
                    style={{ 
                        width: `${level}%`,
                        background: 'linear-gradient(90deg, #5651e5 0%, #709dff 100%)',
                    }}
                />
            </div>
            
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Proficiency</span>
                <span className="text-gray-700 font-medium">{level}%</span>
            </div>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: "Github", icon: SiGithub, level: 100, color: "bg-[#181717]" },
        { name: "Flutter", icon: SiFlutter, level: 100, color: "bg-[#02569B]" },
        { name: "Android", icon: SiAndroid, level: 75, color: "bg-[#3DDC84]" },
        { name: "Kotlin", icon: SiKotlin, level: 75, color: "bg-[#7F52FF]" },
        { name: "Python", icon: SiPython, level: 75, color: "bg-[#3776AB]" },
        { name: "Django", icon: SiDjango, level: 75, color: "bg-[#092E20]" },
        { name: "MongoDB", icon: SiMongodb, level: 75, color: "bg-[#47A248]" },
        { name: "Firebase", icon: SiFirebase, level: 50, color: "bg-[#FFCA28]" },
        { name: "iOS", icon: SiIos, level: 50, color: "bg-[#000000]" },
        { name: "Swift", icon: SiSwift, level: 50, color: "bg-[#FA7343]" },
        { name: "GoLang", icon: SiGo, level: 50, color: "bg-[#00ADD8]" },
        { name: "Java", icon: FaJava, level: 50, color: "bg-[#007396]" },
    ];

    return (
        <div id='skills' className='w-full py-24 bg-white'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mb-12 text-center">
                    <p className='inline-block uppercase text-sm tracking-widest text-[#5651e5] mb-4 bg-[#5651e5]/10 px-4 py-2 rounded-full'>
                        Skills
                    </p>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>My Technical Expertise</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Here are the technologies I work with. I'm constantly learning and adding new skills to my repertoire.
                    </p>
                </div>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {skills.map((skill) => (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            color={skill.color}
                            icon={skill.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;