import React from 'react';
import { Hamza } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Card = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Hamza />
    </motion.div>
  );
};

export default Card;
