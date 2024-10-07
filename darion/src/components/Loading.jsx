// src/components/Loading.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';

const Loading = () => {
  useEffect(() => {
    anime({
      targets: '.loading-dot',
      translateY: [-10, 10],
      loop: true,
      easing: 'easeInOutSine',
      duration: 1000,
    });
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex space-x-2">
        <div className="loading-dot w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="loading-dot w-4 h-4 bg-red-500 rounded-full"></div>
        <div className="loading-dot w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default Loading;
