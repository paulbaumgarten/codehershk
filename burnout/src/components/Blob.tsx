import React from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { blobShapes } from './scripts/blobLibrary';

interface GradientStop {
	offset: number;
	color: string;
	opacity?: number;
}
  
interface BlobProps {
	type: string;
	gradientColors?: GradientStop[];
	size?: number;
	delay?: number;
	position?: {
		top?: string;
		left?: string;
		right?: string;
		bottom?: string;
		transform?: string;
		position?: 'absolute' | 'relative';
	};
	rotationSpeed?: number;
	pulseScale?: number;
	layers?: number;
	interactive?: boolean;
}

const Blob: React.FC<BlobProps> = ({
  type,
  gradientColors,
  size,
  delay = 0,
  position = { top: '0', left: '0', position: 'absolute' },
  rotationSpeed = 20,
  pulseScale = 1.1,
  layers = 3,
  interactive = true
}) => {
  const blobRef = React.useRef(null);
  const isInView = useInView(blobRef, { 
    once: false,
    margin: "-20% 0px -20% 0px"
  });

  const { scrollYProgress } = useScroll({
    target: blobRef,
    offset: ["start end", "end start"]
  });

  const blobConfig = blobShapes[type] || blobShapes.fluid;
  const blobSize = size || blobConfig.defaultSize;
  const gradientStops = gradientColors || blobConfig.defaultGradient;
  const numLayers = layers || blobConfig.layers || 3;

  // Scroll-based animations
  const scale = useSpring(
    useTransform(scrollYProgress, 
      [0, 0.2, 0.8, 1], 
      [0.8, 1, 1, 0.8]
    ),
    { damping: 15 }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, 
      [0, 0.2, 0.8, 1], 
      [0.3, 1, 1, 0.3]
    ),
    { damping: 15 }
  );

  const yOffset = useSpring(
    useTransform(scrollYProgress, 
      [0, 0.5, 1], 
      [50, 0, -50]
    ),
    { damping: 15 }
  );

  const createLayer = (index: number) => {
    const layerScale = 1 + (index * 0.05);
    const layerRotation = index * (360 / numLayers);
    const springConfig = { 
      damping: 15, 
      stiffness: 100,
      mass: 1 + (index * 0.2)
    };

    const layerScrollProgress = useSpring(scrollYProgress, springConfig);
    const layerRotate = useTransform(
      layerScrollProgress,
      [0, 1],
      [0, 360 + (index * 45)]
    );

    return (
      <motion.g
        key={index}
        style={{
          rotate: layerRotate,
          scale: isInView ? layerScale : 0
        }}
        animate={isInView ? {
          scale: [layerScale, layerScale * pulseScale, layerScale],
        } : { scale: 0 }}
        transition={{
          scale: {
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + (index * 0.1)
          }
        }}
      >
		<path
			d={blobConfig.pathData}
			fill={`url(#gradient-${type}-${index})`}
			fillRule="evenodd"
			transform={`rotate(${layerRotation})`}
		/>
      </motion.g>
    );
  };

  return (
    <motion.div
      ref={blobRef}
      style={{
        position: position.position || 'absolute',
        width: blobSize,
        height: blobSize,
        ...(position.position !== 'relative' && {
			top: position.top,
			left: position.left,
			right: position.right,
			bottom: position.bottom,
		  }),
		transform: 'translate(-50%, -50%)',
        scale,
        opacity,
        y: yOffset
      }}
      whileHover={interactive ? {
        scale: 1.05,
        transition: { duration: 0.3 }
      } : {}}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
      >
        <defs>
          {Array.from({ length: numLayers }).map((_, i) => (
            <radialGradient
              key={`gradient-${type}-${i}`}
              id={`gradient-${type}-${i}`}
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              {gradientStops.map((stop, j) => (
                <stop
                  key={j}
                  offset={`${stop.offset * 100}%`}
                  stopColor={stop.color}
                  stopOpacity={(stop.opacity || 1) * (1 - (i * 0.2))}
                />
              ))}
            </radialGradient>
          ))}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            <feColorMatrix
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
            />
          </filter>
        </defs>
        <g filter="url(#goo)">
          {Array.from({ length: numLayers }).map((_, i) => createLayer(i))}
        </g>
      </svg>
    </motion.div>
  );
};

export default Blob