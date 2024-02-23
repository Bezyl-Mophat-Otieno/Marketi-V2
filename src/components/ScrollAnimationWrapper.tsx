import { motion } from 'framer-motion'
import React from 'react'

function ScrollAnimationWrapper({ children, className,  }: Readonly<{ children: React.ReactNode, className: string,  }>) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimationWrapper
