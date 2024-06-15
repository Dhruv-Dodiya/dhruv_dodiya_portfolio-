import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Fotter = () =>{
    return(
        <footer className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-8 pb-6 text-white">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">Contact</h4>
                <h5 className="text-lg mt-0 mb-2 py-2">
                    Mobile: <a href="tel:+9924236730" className="text-blue-100 hover:text-blue-300">9924236730</a>
                </h5>
                <h5 className="text-lg mt-0 mb-2 py-2">
                    Email: <a href="mailto:dodiyadhruv5683@gmail.com" className="text-blue-100 hover:text-blue-300">dodiyadhruv5683@gmail.com</a>
                </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4 flex justify-end items-center">
                <div className="mt-6 lg:mb-0 mb-6 flex">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 hover:bg-gray-700 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-600 hover:bg-pink-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white bg-red-600 hover:bg-red-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition duration-300">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
        
        <div className="flex flex-wrap items-center md:justify-between justify-center mt-8">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-200 font-semibold py-1">
                    Copyright © <span id="get-current-year">By Dhruv Dodiya</span>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}
export default  Fotter