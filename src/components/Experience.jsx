import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='mt-20 mb-5 text-center text-6xl font-fira font-bold'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h1>
      <div className="w-full">
        <motion.div
          className="experience-item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex justify-between pt-16 mx-2 text-3xl font-fira">
            <span className='font-bold'>Deeplearning.ai / Ambassador</span>
            <span className='font-extralight'>April 2024 - Present</span>
          </span>
          <p className='text-3xl font-fira pt-8'>
            Organized and led workshops, webinars, and study groups to educate and inspire learners about AI and ML. Collaborated with AI enthusiasts and professionals to build a strong community and share knowledge and resources.
          </p>
        </motion.div>

        <motion.div
          className="experience-item"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex justify-between pt-16 mx-2 text-3xl font-fira">
            <span className='font-bold'>Thapovan Info Systems Inc. / Artificial Intelligence Intern</span>
            <span className='font-extralight'>July 2024 - August 2024</span>
          </span>
          <p className='text-3xl font-fira pt-8'>
            Contributed to the development of an AI-Based Applicant Tracking System (ATS), enhancing recruitment efficiency. Recognized for fostering productive collaboration and delivering high-quality results.
          </p>
        </motion.div>

        <motion.div
          className="experience-item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex justify-between pt-16 mx-2 text-3xl font-fira">
            <span className='font-bold'>YHills / Artificial Intelligence Intern</span>
            <span className='font-extralight'>December 2023 - January 2024</span>
          </span>
          <p className='text-3xl font-fira pt-8'>
            Developed various ML models to predict vaccination status and taxi fare, utilizing Python libraries such as Numpy, Pandas, Scikit-learn, and Seaborn. Gained hands-on experience in data analysis, model development, and deployment, contributing to real-world AI solutions.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience
