import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-cover bg-fixed flex items-center'>
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className='text-white flex flex-col justify-center gap-6 px-4 md:px-0'>
                        <div>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>I'm Dhruv Dodiya</h1>
                            <h4 className='text-lg sm:text-xl md:text-2xl mt-2 md:mt-3'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Software Developer",
                                            "Love From "
                                        ],
                                        delay: 75,
                                        deleteSpeed: 50,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </div>
                        <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>
                        
                    </div>
                    <div className='flex justify-center items-center px-4 md:px-0'>
                        <img className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg" src="/111.jpeg" alt="Dhruv Dodiya" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
