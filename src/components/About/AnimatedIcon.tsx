'use client';

import { motion } from 'framer-motion';

type AnimatedIconProps = {
  children: React.ReactNode;
};

export default function AnimatedIcon({ children }: AnimatedIconProps) {
  return (
    <motion.div
      className="relative w-40 h-40 mx-auto flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-primary/20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.08, rotateY: 180 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}