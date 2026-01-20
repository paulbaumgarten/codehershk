"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./css/CustomCursor.module.css";

interface Props {
  stiffness?: number;
  damping?: number;
  width?: number;
  height?: number;
}

const mobileAndTabletCheck = () => {
  if (typeof window === "undefined") return false;
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      )
    )
      check = true;
    // @ts-expect-error opera does in fact exist ty
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const CustomCursor: React.FC = ({
  stiffness = 300,
  damping = 20,
  width = 25,
  height = 25,
}: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      // Check if the element under the cursor is clickable
      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setIsHoveringClickable(computedStyle.cursor === 'pointer');
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (
        !event.relatedTarget &&
        (event.clientX <= 0 ||
          event.clientY <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight)
      ) {
        setVisible(false);
      }
    };

    const handleWindowBlur = () => {
      setVisible(false);
    };

    const handleWindowFocus = () => {
      setVisible(true);
    };

    const initializePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    document.addEventListener("mousemove", initializePosition, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("mousemove", initializePosition);
    };
  }, []);

  if (!visible || mobileAndTabletCheck()) return null;

  return (
    <motion.div
      className={`${styles.customCursor} ${isHoveringClickable ? styles.smaller : ''}`}
      animate={{
        x: mousePosition.x - (isHoveringClickable ? 7.5 : width / 2),
        y: mousePosition.y - (isHoveringClickable ? 7.5 : height / 2),
      }}
      transition={{
        type: "spring",
        stiffness: stiffness,
        damping: damping,
      }}
    />
  );
};

export default CustomCursor;