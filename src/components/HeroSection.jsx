import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between px-10 relative overflow-hidden">
      {/* Left Section */}
      <div className='z-40 xl:mb-0 mb-[20%'>
        <motion.h1
        style={{textDecoration: 'none'}}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 15,
            delay: 1.3,
            duration: 0.8,
          }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold z-10 mb-6 no-underline text-white"
        >
         Hii, I am Gourab 
        </motion.h1>

        <motion.p
          style={{textDecoration: 'none'}}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 15,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-base md:text-xl lg:text-2xl text-purple-200 max-w-2xl break-words whitespace-pre-line no-underline"
        >
          Software Developer
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center h-full">
        <Spline
         className="absolute xl-right-[-70%]"
         scene="https://prod.spline.design/3-EiF59NShCfUUPS/scene.splinecode"
        />
       </div>

    </section>
  );
};

export default HeroSection;
