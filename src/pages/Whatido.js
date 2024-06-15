import React from "react"
import Heading from './Heading'
import { IoBulbOutline } from "react-icons/io5"

const Whatido = () =>{
    return (
        <section className="container m-auto py-10 px-4">
            <Heading title="What I Do"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#22d3ee] text-white">
                    <IoBulbOutline className="text-[28px]"/>
                    <h2 className="font-medium text-[20px]">Creative Designs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#22d3ee] text-white">
                    <IoBulbOutline className="text-[28px]"/>
                    <h2 className="font-medium text-[20px]">Creative Designs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#22d3ee] text-white">
                    <IoBulbOutline className="text-[28px]"/>
                    <h2 className="font-medium text-[20px]">Creative Designs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </section>
    )
}

export default Whatido