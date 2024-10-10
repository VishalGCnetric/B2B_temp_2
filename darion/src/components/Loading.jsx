// src/components/Loading.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex space-x-2">
        {/* Square Shape */}
        <motion.div
          className="w-10 h-10 border-4 border-purple-500 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>

        {/* Circular Shape */}
        <motion.div
          className="w-10 h-10 border-4 border-orange-500 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>

        {/* Arrow Shape */}
        <motion.div
          className="w-10 h-10 border-4 border-blue-500 transform rotate-45"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
        >
          <div className="w-10 h-10  transform rotate-45"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
