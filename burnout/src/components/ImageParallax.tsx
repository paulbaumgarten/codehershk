import React, { useRef, useMemo } from 'react'
import { StaticImageData } from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';

import styles from './css/ImageParallax.module.css'

interface Props {
  images: StaticImageData[];
  main: StaticImageData;
  gap?: number; 
  containerWidth?: number;
  containerHeight?: number;
}

interface LayoutItem {
  width: number;
  height: number;
  x: number;
  y: number;
  originalIndex: number;
}

function calculateOptimalLayout(
  rawWidths: number[],
  containerWidth: number,
  containerHeight: number,
  gap: number
): LayoutItem[] {
  const items: LayoutItem[] = rawWidths.map((width, index) => ({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    originalIndex: index,
  }));

  const totalArea = containerWidth * containerHeight;
  const itemCount = rawWidths.length;
  const gridSize = Math.ceil(Math.sqrt(itemCount));
  
  const availableWidth = containerWidth - (gap * (gridSize - 1));
  const availableHeight = containerHeight - (gap * (gridSize - 1));
  const baseSize = Math.min(
    availableWidth / gridSize,
    availableHeight / gridSize
  );

  items.forEach((item, index) => {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    
    item.width = baseSize;
    item.height = baseSize;
    item.x = col * (baseSize + gap);
    item.y = row * (baseSize + gap);
  });

  return items;
}

function ImageParallax({ 
  images, 
  main,
  gap = 10,
  containerWidth = window.innerWidth,
  containerHeight = window.innerHeight
}: Props) {
  const rawWidths = useMemo(() => 
    images.map(img => img.width), 
    [images]
  );

  const layout = useMemo(() => 
    calculateOptimalLayout(rawWidths, containerWidth, containerHeight, gap),
    [rawWidths, containerWidth, containerHeight, gap]
  );

  return (
    <div 
      className={styles.container}
      style={{
        width: containerWidth,
        height: containerHeight,
        position: 'relative'
      }}
    >
      {layout.map((item, index) => (
        <motion.img
          key={item.originalIndex}
          src={images[item.originalIndex].src}
          style={{
            position: 'absolute',
            width: item.width,
            height: item.height,
            left: item.x,
            top: item.y,
            objectFit: 'cover'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

export default ImageParallax