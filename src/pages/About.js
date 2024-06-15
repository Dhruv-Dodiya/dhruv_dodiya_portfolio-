import React from 'react'
import Heading from './Heading'
import Button from './Button'
import { AiOutlineGift } from "react-icons/ai"
import { FiBookOpen } from "react-icons/fi"
import { BsGlobe2 } from "react-icons/bs"
import { TbPacman } from "react-icons/tb"
import { IoLocationOutline } from "react-icons/io5"
import { FiMenu } from "react-icons/fi";
import Link from 'next/link'


const About = ({ toggleSidebar }) => {
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-500 to-blue-500 fixed top-0 w-full z-10 shadow-lg'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4 md:px-8'>
                <div className='text-[24px] font-bold text-white'>
                    <Link href='/'>
                        <span>Dhruv Dodiya</span >
                    </Link>
                </div>
                <div className='hidden md:flex gap-6 text-white'>
                    <Link href='/'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>Home</span >
                    </Link>
                    <Link href='/About'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>About</span >
                    </Link>
                    <Link href='/Work'>
                        <span className='hover:text-[#ff4D41] transition-colors duration-300'>Project</span >
                    </Link>
                </div>
                <div className='md:hidden text-white text-[24px]' onClick={toggleSidebar}>
                    <FiMenu />
                </div>
            </div>
        </div>
            <section className="container m-auto py-10 px-4">
                <Heading title="About Me" />
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                About Myself
                            </h5>
                        </div>
                        <div>
                            <div className="flex items-center justify-between w-[600px]">
                                <p className='leading-relaxed'>
                                    As a Laravel developer, I specialize in building dynamic and responsive web applications using MySql, LiveWire, Laravel Lumen, and Node.js. With experience in both front-end and back-end development, I thrive on creating efficient and scalable solutions to complex problems. My expertise in JavaScript, HTML, CSS, and various libraries and frameworks enables me to deliver high-quality products that meet the needs of clients and users.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Experience
                            </h5>
                        </div>
                        <div>
                            <div className="flex items-center justify-between w-[600px]">
                                <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <b> Software Developer:</b>
                                    <li><a href='https://www.gigglesinfotech.in/' target='_blank' className='text-[#a855f7]'>Giggles Infotech</a>·Full-time</li>
                                    <li>Jul 2022 - Present</li>
                                    <li>Ahmedabad, Gujarat, India · On-site</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Skills
                            </h5>
                        </div>
                        <div>
                            <div className="w-[600px]">
                                <div className="mb-4">
                                    <p>HTML</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[100%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>CSS</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[100%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>JavaScript</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[100%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>Laravel</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>Laravel Lumen</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>Laravel LiveWire</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p>MySQL</p>
                                    <div className="relative bg-gray-200 h-[4px] mt-2 w-full">
                                        <div className="bg-[#22d3ee] h-[4px] w-[75%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
