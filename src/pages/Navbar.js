import Link from 'next/link';
import React from 'react';
import { MdDownload } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
    return (
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
    );
};

export default Navbar;
