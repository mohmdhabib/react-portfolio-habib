import React from 'react'
import {motion} from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{y:100, opacity: 0 }}
        transition={{duration:0.5}}
        viewport={{ once: true }}
        className='mt-20 mb-5 text-center text-6xl font-fira font-bold '>About Me</motion.h1>
      <div className="w-full">
        <div className="flex justify-center">
            <motion.p
            whileInView={{opacity:1,y:0}}
            initial={{y:100, opacity: 0 }}
            transition={{duration:0.5}}
            viewport={{ once: true }}
             className='my-2 mx-32 py-6  text-3xl font-fira text-center '>
<span>            As a tech enthusiast and Computer Science undergrad at SJIT, I bring hands-on experience in designing, developing, and testing mobile and web apps. My proficiency lies in crafting top-quality, user-friendly, and responsive custom apps, showcasing a dedication to excellence in every project.
</span> <br />
<br />
<span>Specializing in Flutter, I combine technical prowess with a passion for creating seamless user experiences. Additionally, my skills extend to web development, competitive programming, and AI, reflecting a commitment to precision and efficiency.
</span><br /><br />
<span>Driven by a genuine enthusiasm for technology, I am ready to transform innovative ideas into reality. I prioritize delivering exceptional quality, adhering to your requirements and timelines. Feel free to connect on LinkedIn or explore my projects on GitHub.
</span>

            </motion.p>

        </div>
      </div>
    </div>
  )
}

export default About
