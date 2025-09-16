'use client';
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ShootingStars = ({
  className,
  starColor = "#FFFFFF",
  minSpeed = 1.5,
  maxSpeed = 2.5,
  minSize = 0.4,
  maxSize = 1,
  numStars = 100,
}) => {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const starsRef = useRef(stars);

  useEffect(() => {
    starsRef.current = stars; // Update the ref whenever stars state changes
  }, [stars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateStars = () => {
      const newStars = [];
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        });
      }
      setStars(newStars);
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = starColor;
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fill();
      });
    };

    const animate = () => {
      starsRef.current.forEach((star) => {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
        }
      });
      drawStars();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateStars();
      drawStars();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numStars, starColor, minSpeed, maxSpeed, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed top-0 left-0 w-full h-full", className)}
      style={{ zIndex: 1 }}
    />
  );
};
