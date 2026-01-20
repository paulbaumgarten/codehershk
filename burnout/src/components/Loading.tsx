import React from 'react'
import { motion } from 'framer-motion'

function Loading() {
  return (
    <motion.div style={{
      position: 'absolute', 
      width: '100vw',
      height: '100vh',
      zIndex: '99999999',
      backgroundColor: '#afd8bd',
      left: '0',
      right: '0'
    }}
    initial={{ top: '0' }}
    animate={{ top: '-100vh' }}
    transition={{ duration: 1, delay: 2 }}
    ></motion.div>
  )
}

export default Loading