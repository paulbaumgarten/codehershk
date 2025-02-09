import { motion } from "framer-motion";

interface HalftoneGradientProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
  maxDotScale?: number;
}

const HalftoneGradient: React.FC<HalftoneGradientProps> = ({
  rows = 15,
  cols = 40,
  dotSize = 5,
  gap = 10,
  color = "#fff",
  className = "",
  maxDotScale = 3.5,
}) => {
  const dots = Array.from({ length: rows * cols });

  const dotMeetScale = gap / dotSize; 
  const firstTouchingRowIndex = Math.ceil(
    ((dotMeetScale - 1) / (maxDotScale - 1)) * rows
  ) + 1;

  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {dots.map((_, index) => {
        const rowIndex = Math.floor(index / cols);
        const rowProgress = (rowIndex + 1) / rows;
        const scale = 1 + rowProgress * (maxDotScale - 1);
        const touching = (scale * dotSize) >= (gap + dotSize);

        const opacity = touching ? 1 : (rowIndex + 1) / firstTouchingRowIndex;

        return (
          <motion.div
            key={index}
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              borderRadius: "50%",
              background: color,
              transform: `scale(${scale})`,
              position: "relative",
              zIndex: rowIndex,
              transformOrigin: "center",
              opacity: opacity,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default HalftoneGradient;
