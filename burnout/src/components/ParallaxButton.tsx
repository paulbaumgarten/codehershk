"use client"

import React, { useEffect, useRef, useState } from 'react';
import styles from './css/ParallaxButton.module.css';

interface ParallaxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  size?: number;
  buttonIntensity?: number;
  textIntensity?: number;
  buttonTriggerDistance?: number;
  textTriggerDistance?: number;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  disableParallax?: boolean;
  transitionDuration?: number;
  shadowColor?: string;
  hoverScale?: number;
}

export default ({
  children,
  color = '#4169e1',
  size = 120,
  buttonIntensity = 0.03,    // Increased for more noticeable movement
  textIntensity = 0.3,
  buttonTriggerDistance = 50,
  textTriggerDistance = 200,
  containerClassName = '',
  containerStyle,
  className = '',
  style,
  disableParallax = false,
  transitionDuration = 0.2,
  shadowColor = 'rgba(0, 0, 0, 0.1)',
  hoverScale = 1.05,
  ...props
}: ParallaxButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (disableParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !textRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) + 
        Math.pow(mouseY - buttonCenterY, 2)
      );

      // Handle button movement first
      const isButtonRange = distance < buttonTriggerDistance;
      if (isButtonRange) {
        const buttonIntensityFactor = 1 - (distance / buttonTriggerDistance);
        const deltaX = (mouseX - buttonCenterX);
        const deltaY = (mouseY - buttonCenterY);
        
        setButtonPosition({
          x: deltaX * buttonIntensity * buttonIntensityFactor,
          y: deltaY * buttonIntensity * buttonIntensityFactor
        });
      } else {
        setButtonPosition({ x: 0, y: 0 });
      }

      // Handle text movement
      const isTextRange = distance < textTriggerDistance;
      setIsNear(isTextRange);

      if (isTextRange) {
        const textIntensityFactor = 1 - (distance / textTriggerDistance);
        const deltaX = (mouseX - buttonCenterX);
        const deltaY = (mouseY - buttonCenterY);

        setTextPosition({
          x: deltaX * textIntensity * textIntensityFactor,
          y: deltaY * textIntensity * textIntensityFactor
        });
      } else {
        setTextPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [disableParallax, buttonIntensity, textIntensity, buttonTriggerDistance, textTriggerDistance]);

  const computedButtonStyle: React.CSSProperties = {
    '--button-color': color,
    '--button-size': `${size}px`,
    '--transition-duration': `${transitionDuration}s`,
    '--shadow-color': shadowColor,
    '--hover-scale': hoverScale,
    transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
    transition: isNear ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
    ...style
  } as React.CSSProperties;

  const computedTextStyle: React.CSSProperties = {
    transform: `translate(${textPosition.x}px, ${textPosition.y}px)`,
    transition: isNear ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
  };

  const computedContainerStyle: React.CSSProperties = {
    position: 'relative',
    ...containerStyle,
  };

  return (
    <div 
      className={`${styles.buttonContainer} ${containerClassName}`}
      style={computedContainerStyle}
    >
      <button
        ref={buttonRef}
        className={`${styles.parallaxButton} ${className}`}
        style={computedButtonStyle}
        {...props}
      >
        <div 
          ref={textRef}
          className={styles.buttonContent}
          style={computedTextStyle}
        >
          {children}
        </div>
      </button>
    </div> 
  );
};