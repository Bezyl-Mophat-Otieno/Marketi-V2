import { motion } from 'framer-motion'
import React from 'react'

function ScrollAnimationWrapper({ children, className, ...props }: Readonly<{ children: React.ReactNode, className: string, props: any }>) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimationWrapper
