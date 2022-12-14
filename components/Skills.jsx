import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const skillSet = ["Android", "iOS", "Flutter", "Kotlin", "Swift", "GoLang", "Python", "MongoDB", "Django", "Java", "Firebase", "Github"]

    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>

                <h2 className='py-4'>What I Can Do</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {skillSet.map((value, _) => {
                        return <li key={value} className='list-none'>
                            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                                <div className='grid grid-cols-2 gap-3 justify-center items-center'>
                                    <div className='m-auto'>
                                        <Image src={require(`../public/static/assets/skills/${value.toLowerCase()}.png`)} width='68px' height='68px' alt='/' />
                                    </div>

                                    <div className='flex flex-col items-center justify-center'>
                                        <h3>{value}</h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills