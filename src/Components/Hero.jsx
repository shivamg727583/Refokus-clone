import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';


function Hero() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);
const {scrollYProgress}=useScroll();

    scrollYProgress.on("change",(latest)=>{
   
 showImages(Math.floor(latest*100))
       
    })

    function showImages(scrollValue) {
      const updatedImages = images.map((image, idx) => {
        const activationThreshold = (idx + 1); 
        return {
          ...image,
          isActive: scrollValue >= activationThreshold,
        };
      });
      setImages(updatedImages);
    }

  return (
    <div className='max-w-screen-xl mx-auto h-[550px]  pointer-events-none  mt-2 relative flex flex-col items-center justify-center '>
      <h1 className='text-[34vw] text-white text-center leading-4  select-none '>work</h1>

      <div className="absolute w-full h-full top-0 left-0 rounded-xl">
        {images.map((elem, idx) => (
        elem.isActive?  <div 
        key={`hero-img${idx}`} 
        className='absolute w-[300px] h-[300px] overflow-hidden roundex-xl'
        style={{ top: elem.top, left: elem.left }}
      >
        <img src={elem.url} className='absolute w-full h-full object-cover rounded-xl' alt="" />
      </div> :""
        ))}
      </div>
    </div>
  );
}

export default Hero;
