import Image from "next/image";
import Head from "next/head";
import Navbar from '../pages/Navbar'
import Hero from '../pages/Hero'
import About from '../pages/About'
// import Whatido from '../pages/Whatido'
import Skills from '../pages/Skills'
import Work from '../pages/Work'
import Contect from '../pages/Contect'
import Fotter from '../pages/Fotter'
import Sidebar from '../pages/Sidebar'
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () =>{
    setIsOpen(!isOpen)
  }
  return (
    
      <div>
        <Head>
          <title>Dhruv Dodiya</title>
          <meta name="description" content="Portfolio"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Navbar toggleSidebar={toggleSidebar}/>
        </header>

        <main>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          <Hero />
          <About toggleSidebar={toggleSidebar}/>
          {/* <Whatido /> */}
          {/* <Skills /> */}
          <Work/>
          {/* <Contect /> */}
        </main>

        <fotter>
          <Fotter />
        </fotter>
      </div>
  );
}
