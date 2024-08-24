import avatar from "../assets/avatar.png"
import {motion} from "framer-motion"

const container = (delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
  }

}
)
const Hero = () => {
  return (
    <div className="border-b border-neutral-900  pb-4 lg:mb-35">
        
        <div className="flex flex-wrap pl-8 pt-6">

        <div className="w-full lg:w-1/2 lg:p-6">
              <div className="flex justify-center">
                <motion.img  
                initial={{x:-100, opacity: 0 }}
                animate={{ x: [0, 100, 0] ,opacity:1}} 
                src={avatar} alt="HI" />
              </div>

            </div>

            <div className="w-full lg:w-1/2">
            <div></div>
                <div className="flex flex-col items-center lg:items-start pb-8">
                <span className=" absolute w-48 h-48 rounded-full bg-fuchsia-500 blur-3xl filter ml-1 mt-12 opacity-30  -z-1"></span>

                    <motion.span
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="font-fira opacity-100 lg:text-6xl lg:mt-32 mb-3 ml-1 z-1 relative">Hello, I'm</motion.span>
                    
                    <motion.h1 
                    variants={container(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="pb-2  tracking-tight  lg:text-8xl font-mont font-extrabold "><span className="bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-600 from-30% to-sky-500 to-90%">Mohammed</span><br /><span className="bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-600 from-20% to-sky-500 to-100%">Habib</span></motion.h1>

                    <motion.span 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="lg:text-4xl font-pop font-semibold mt-2 ml-1">I do Code & <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tight font-pop "> Chill</span>🍿</motion.span>
                    

                </div>
            </div>
           

           
        </div>     
    </div>
  )
}

export default Hero
