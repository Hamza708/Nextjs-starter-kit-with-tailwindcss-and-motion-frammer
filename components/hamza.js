import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Hamza = () => {
  return (
    <motion.div
      className="font-bold mb-[1000px]"
      variants={fadeIn('right', 'spring', 1, 0.5)}
    >
      <div>ssss</div>
    </motion.div>
  );
};

export default Hamza;
