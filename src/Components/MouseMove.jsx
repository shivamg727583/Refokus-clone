import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const transformX = useTransform(x, [0, window.innerWidth], [-16, window.innerWidth - 16]);
  const transformY = useTransform(y, [0, window.innerHeight], [-16, window.innerHeight - 16]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y]);

  return (
    <motion.div 
    className='cursor'
      style={{
        x: transformX,
        y: transformY,
        width: '32px',
        height: '32px'
       
      }}
    />
  );
};

export default useMousePosition;
