import React from "react"
import Heading from './Heading'

const Skills = () =>{
    return(
        <section className="container m-auto py-10 px-4">
             <Heading title="Skills"/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p>Laravel</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>MySql</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>JavaScript</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>HTML</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>CSS</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>
                <div>
                    <p>Bootstrap</p>
                    <div className="relative bg-gray-400 h-[4px] mt-2">
                        <div className="bg-[#22d3ee] absolute h-[4px] w-[90%]"></div>
                    </div>
                </div>

             </div>
        </section>
    )
}

export default Skills