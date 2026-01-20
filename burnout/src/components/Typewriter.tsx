"use client";
import React, { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  textDelay?: number;
  infinite?: boolean;
  className?: string;
}

const Typewriter = ({
  children,
  delay = 0,
  textDelay = 100,
  infinite = false,
  className,
}: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingStarted, setIsTypingStarted] = useState(false);

  const text = children?.toString() || "";

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      setIsTypingStarted(true);
    }, delay);

    return () => clearTimeout(startTypingTimeout);
  }, [delay]);

  useEffect(() => {
    if (isTypingStarted && currentIndex <= text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, textDelay);

      return () => clearTimeout(typingTimeout);
    } else if (isTypingStarted && infinite && currentIndex > text.length) {
      const resetTimeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
      }, textDelay * 2);

      return () => clearTimeout(resetTimeout);
    }
  }, [isTypingStarted, currentIndex, textDelay, infinite, text]);

  return <span className={className}>{currentText}</span>;
};

export default Typewriter;