import React from 'react'
import { motion } from 'framer-motion'

import dart from "../assets/tech/DART.png"
import flutter from "../assets/tech/FLUTTER.png"
import python from "../assets/tech/PYTHON.png"
import c from "../assets/tech/C.png"
import cpp from "../assets/tech/C++.png"
import html from "../assets/tech/HTML.png"
import css from "../assets/tech/CSS.png"
import tailwind from "../assets/tech/TAILWIND.png"
import javascript from "../assets/tech/JAVASCRIPT.png"
import react from "../assets/tech/REACT.png"
import firebase from "../assets/tech/FIREBASE.png"
import figma from "../assets/tech/FIGMA.png"
import github from "../assets/tech/GITHUB.png"
import arduino from "../assets/tech/ARDUINO.png"
import next from "../assets/tech/NEXT.png"

const Expertise = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='mt-20 mb-5 text-center text-6xl font-fira font-bold'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Expertise
      </motion.h1>
      <div className="w-full">
        <div className="card-wrapper h-[650px] my-14 w-full">
          <div className="card-content bg-black">
            <span className="absolute w-full h-full rounded-full bg-fuchsia-500 blur-3xl filter ml-1 mt-12 opacity-15"></span>

            <div className="grid grid-rows-3 grid-flow-col justify-around gap-10 px-10 py-12 relative">
              {[dart, html, firebase, flutter, css, figma, python, tailwind, github, c, javascript, arduino, cpp, react, next].map((imgSrc, index) => (
                <motion.div 
                  key={index} 
                  className='w-44 h-40 rounded-3xl border-slate-400 bg-white bg-opacity-10 border-4'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img className='px-5 py-3' src={imgSrc} alt={`tech-icon-${index}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
