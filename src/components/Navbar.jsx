import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='bg-black mb-30 flex items-center justify-between px-8 rounded-full  mr-8 ml-8 mt-8 border
 border-purple-800 backdrop-blur-5xl  ' >
        <div className="flex flex-shrink-0-center  ">
            <h1 className='text-white lg:text-3xl lg:ml-6 '>MH</h1>
        </div>
        <div className="text-white m-8 items-center flex justify-center lg:gap-12 mr-8 lg:text-2xl gap-2 ml-2  ">
       
        <Link to="home" smooth={true} duration={500} className="hover:text-purple-400 cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-purple-400 cursor-pointer">About</Link>
        <Link to="experience" smooth={true} duration={500} className="hover:text-purple-400 cursor-pointer">Experience</Link>
        <Link to="expertise" smooth={true} duration={500} className="hover:text-purple-400 cursor-pointer">Expertise</Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-purple-400 cursor-pointer">Projects</Link>
      </div>


    </nav>
  )
}

export default Navbar
