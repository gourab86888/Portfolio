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
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 no-underline text-white"
        >
          Building Fast <br />Reliable Results
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
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl break-words whitespace-pre-line no-underline"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique, 
          magni suscipit asperiores voluptatibus quia tempora fuga temporibus placeat 
          maiores laudantium. Cupiditate voluptates laborum aspernatur. Illo fuga 
          perferendis atque eius corporis. Est dolorem at adipisci debitis eius modi sequi.
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-end items-center h-full">
        <Spline
         className="w-full max-w-xl h-[500px] xl:h-[600px]"
         scene="https://prod.spline.design/3-EiF59NShCfUUPS/scene.splinecode"
        />
      </div>

    </section>
  );
};

export default HeroSection;
