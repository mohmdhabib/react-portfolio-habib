import React from 'react'
import { motion } from 'framer-motion'

import doc from '../assets/image 18.png'
import ml from '../assets/image 19.png'
import dice from '../assets/image 20.png'
import res from '../assets/image 21.png'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='mt-20 mb-5 text-center text-6xl font-fira font-bold'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      {[
        {
          title: "AI-Powered Mental Health Screening App",
          description: "Developed a mobile app using Flutter with AI for sentiment analysis and emotion detection to screen mental health. Integrated an NLP chatbot to engage users, collect data, and produce reports for medical professionals.",
          image: doc,
          link: "https://youtube.com"
        },
        {
          title: "AI-Based Applicant Tracking System (ATS)",
          description: "Created an AI-Based Applicant Tracking System, implementing LLaMA from Ollama and LangChain for enhanced candidate tracking and processing. Developed and integrated features that streamlined the hiring process and provided actionable insights.",
          image: res,
          link: "https://youtube.com"
        },
        {
          title: "Machine Learning-based Prediction of Vaccination Status",
          description: "Created a machine learning model with classifiers such as Logistic Regression and Random Forest to predict vaccination status. Provided insights into vaccination trends to support public health decisions.",
          image: ml,
          link: "https://youtube.com"
        },
        {
          title: "Dice Roll App",
          description: "Built a cross-platform Dice Roller app using Flutter, featuring a user-friendly interface for rolling dice and displaying results. Demonstrated expertise in UI/UX design and state management.",
          image: dice,
          link: "https://youtube.com"
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          className="px-8 my-14 py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center h-[450px] w-full">
                <span className="absolute inset-0 rounded-full bg-fuchsia-500 blur-3xl filter opacity-[0] group-hover:opacity-[0.08] transition duration-300"></span>

                <div className="flex flex-col justify-between h-full relative pr-36 py-10 w-full">
                  <span className='font-mont font-bold text-3xl text-gray-100'>{project.title}</span>
                  <span className='font-fira text-2xl text-white my-4'>{project.description}</span>
                  <span className='font-mont text-3xl text-indigo-500 group-hover:text-green-500 transition duration-200'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Click Here to view  &rarr;</a>
                  </span>
                </div>

                <img className='h-[400px] object-contain relative' src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
