'use client';
import * as React from "react";
import { type HTMLMotionProps, motion, type SpringOptions, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StarsBackgroundProps extends HTMLMotionProps<"div"> {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
  ...props
}) => {
  const [stars, setStars] = React.useState<
    Array<{
      id: string;
      x: number;
      y: number;
      size: number;
      twinkle: boolean;
      speed: number;
    }>
  >([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const generateStars = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const numStars = Math.floor(width * height * starDensity);
      const newStars = Array.from({ length: numStars }).map((_, i) => {
        const twinkle = allStarsTwinkle
          ? true
          : Math.random() < twinkleProbability;
        const speed = twinkle
          ? Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) + minTwinkleSpeed
          : 0;

        return {
          id: `star-${i}`,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5, // Stars between 0.5 and 2px
          twinkle,
          speed,
        };
      });
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

  const starVariants: Variants = {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.01,
        duration: 0.5,
      },
    }),
    twinkle: (speed) => ({
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          variants={starVariants}
          initial="initial"
          animate={star.twinkle ? "twinkle" : "animate"}
          custom={star.twinkle ? star.speed : star.id}
        />
      ))}
    </motion.div>
  );
};
