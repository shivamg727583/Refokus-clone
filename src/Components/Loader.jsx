import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import React, { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {showLoader ? (
        <motion.div 
          initial={{ opacity: 1}}
          animate={{ opacity: 1 }}

          transition={{ease:easeInOut ,duration: 4 }}
          className="fixed top-0 left-0 w-full h-screen bg-gray-900 z-[10] flex flex-col text-white items-center justify-center"
        >
            <Triangle color="#00BFFF" height={400} width={400} radius={9
            }

            />
            <div className='h-fit overflow-hidden'>
            <motion.h1 initial={{y:'100%'}}
            animate={{y:0 }}
            transition={{ease:'easeIn' ,duration: 1, }}


            className='text-[12vw] font-semibold  '>Work</motion.h1>
            </div>
         
        </motion.div>
      ) : (
        <motion.div 
        initial={{ y:0}}
        animate={{y:'-120%' }}

        transition={{ease:'easeInOut' ,duration: 2 }}
        className="fixed top-[-200%] left-0 w-full h-screen bg-gray-900 z-[10] flex flex-col text-white items-center justify-center"
      >
          <Triangle color="#00BFFF" height={400} width={400} radius={9
          }

          />
          <div className='h-fit overflow-hidden'>
          <motion.h1 initial={{y:'100%'}}
          animate={{y:0 }}
          transition={{ease:'easeIn' ,duration: 1, }}


          className='text-[12vw] font-semibold  '>Work</motion.h1>
          </div>
       
      </motion.div>
      )}
    </>
  );
}

export default Loader;
