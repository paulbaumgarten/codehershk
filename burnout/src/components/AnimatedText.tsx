import { motion, Variant, Variants } from 'framer-motion';
import React from 'react';

type AnimationType = 
  | 'fadeIn' 
  | 'slideUp' 
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'rotate'
  | 'flip'
  | 'letterByLetter'
  | 'wordByWord'
  | 'elasticScale'
  | 'wave'
  | 'bounce'
  | 'spiral'
  | 'blur'
  | 'gradient'
  | 'shake'
  | 'pulse';

interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  scale?: number;
  x?: number;
  y?: number;
  rotate?: number;
  opacity?: number;
  blur?: number;
  springDamping?: number;
  springStiffness?: number;
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
  staggerChildren?: number;
  viewportMargin?: string;
  viewportAmount?: number;
  once?: boolean;
  yOffset?: number;
}

interface Props {
  type: AnimationType;
  children?: React.ReactElement | string;
  className?: string;
  config?: AnimationConfig;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

const defaultConfig: AnimationConfig = {
  duration: 0.8,
  delay: 0,
  ease: "easeOut",
  scale: 1,
  x: 0,
  y: 0,
  rotate: 0,
  opacity: 1,
  blur: 0,
  springDamping: 10,
  springStiffness: 100,
  repeat: 0,
  staggerChildren: 0.05,
  viewportMargin: "-100px",
  viewportAmount: 0.1,
  once: true,
  yOffset: 50
};

export default ({ 
  type, 
  children = '', 
  className = '',
  config = {},
  style = {},
  textStyle = {}
}: Props) => {
  if (typeof children !== 'string') return

  const finalConfig = { ...defaultConfig, ...config };

  const springTransition = {
    type: "spring",
    damping: finalConfig.springDamping,
    stiffness: finalConfig.springStiffness,
    duration: finalConfig.duration,
    delay: finalConfig.delay
  };

  const tweenTransition = {
    type: "tween",
    duration: finalConfig.duration,
    delay: finalConfig.delay,
    ease: finalConfig.ease,
    repeat: finalConfig.repeat,
    repeatType: finalConfig.repeatType
  };

  // Define all possible animations
  const createAnimationVariants = (): Variants => {
    const baseVariants: { [key: string]: Variant } = {
      hidden: {},
      visible: {}
    };

    switch (type) {
      case 'fadeIn':
        baseVariants.hidden = { opacity: 0 };
        baseVariants.visible = { opacity: 1 };
        break;

      case 'slideUp':
        baseVariants.hidden = { y: 100, opacity: 0 };
        baseVariants.visible = { y: 0, opacity: 1 };
        break;

      case 'slideDown':
        baseVariants.hidden = { y: -100, opacity: 0 };
        baseVariants.visible = { y: 0, opacity: 1 };
        break;

      case 'slideLeft':
        baseVariants.hidden = { x: 100, opacity: 0 };
        baseVariants.visible = { x: 0, opacity: 1 };
        break;

      case 'slideRight':
        baseVariants.hidden = { x: -100, opacity: 0 };
        baseVariants.visible = { x: 0, opacity: 1 };
        break;

      case 'scale':
        baseVariants.hidden = { scale: 0, opacity: 0 };
        baseVariants.visible = { scale: 1, opacity: 1 };
        break;

      case 'rotate':
        baseVariants.hidden = { rotate: 180, opacity: 0 };
        baseVariants.visible = { rotate: 0, opacity: 1 };
        break;

      case 'flip':
        baseVariants.hidden = { rotateX: 180, opacity: 0 };
        baseVariants.visible = { rotateX: 0, opacity: 1 };
        break;

      case 'elasticScale':
        baseVariants.hidden = { scale: 0 };
        baseVariants.visible = { scale: 1 };
        break;

      case 'wave':
        baseVariants.hidden = { y: 0 };
        baseVariants.visible = { 
          y: [0, -20, 0],
          transition: {
            repeat: Infinity,
            duration: 1
          }
        };
        break;

      case 'bounce':
        baseVariants.hidden = { y: 0 };
        baseVariants.visible = {
          y: [0, -30, 0],
          transition: {
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut"
          }
        };
        break;

      case 'spiral':
        baseVariants.hidden = { scale: 0, rotate: 0, opacity: 0 };
        baseVariants.visible = { 
          scale: 1, 
          rotate: 360, 
          opacity: 1,
          transition: springTransition
        };
        break;

      case 'blur':
        baseVariants.hidden = { 
          opacity: 0,
          filter: "blur(20px)",
        };
        baseVariants.visible = { 
          opacity: 1,
          filter: "blur(0px)",
        };
        break;

      case 'shake':
        baseVariants.hidden = { x: 0 };
        baseVariants.visible = {
          x: [0, -10, 10, -10, 10, 0],
          transition: {
            repeat: finalConfig.repeat,
            duration: 0.4
          }
        };
        break;

      case 'pulse':
        baseVariants.hidden = { scale: 1 };
        baseVariants.visible = {
          scale: [1, 1.1, 1],
          transition: {
            repeat: Infinity,
            duration: 1
          }
        };
        break;
      }
      
      return baseVariants;
    };
    
    // Special handling for letter-by-letter and word-by-word animations
  const defaultStyle: React.CSSProperties = {};
    
  if (type === 'letterByLetter' || type === 'wordByWord') {
    defaultStyle.overflowY = 'hidden';
    defaultStyle.height = 'fit-content';
  }

  const getTextElements = () => {
    if (type === 'letterByLetter') {
      return children.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: finalConfig.yOffset }}
          whileInView={{ y: 0 }}
          transition={{
            delay: index * finalConfig.staggerChildren!,
            ease: 'easeInOut'
          }}
          style={{...{ display: 'inline-block' }, ...textStyle}}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }

    if (type === 'wordByWord') {
      return children.split(' ').map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: finalConfig.yOffset }}
          whileInView={{ y: 0 }}
          transition={{
            delay: index * finalConfig.staggerChildren!,
            ease: 'easeInOut'
          }}
          style={{...{ display: 'inline-block', marginRight: '0.3em' }, ...textStyle}}
        >
          {word}
        </motion.span>
      ));
    }

    return children;
  };

  const variants = createAnimationVariants();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: finalConfig.once,
        margin: finalConfig.viewportMargin,
        amount: finalConfig.viewportAmount
      }}
      variants={variants}
      transition={type === 'elasticScale' ? springTransition : tweenTransition}
      style={{...defaultStyle, ...style}}
    >
      {getTextElements()}
    </motion.div>
  );
};