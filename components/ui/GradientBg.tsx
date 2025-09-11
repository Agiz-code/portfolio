/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  // ✅ Inject CSS variables safely
  useEffect(() => {
    if (typeof document === "undefined") return;

    const vars: Record<string, string> = {
      "--gradient-background-start": gradientBackgroundStart,
      "--gradient-background-end": gradientBackgroundEnd,
      "--first-color": firstColor,
      "--second-color": secondColor,
      "--third-color": thirdColor,
      "--fourth-color": fourthColor,
      "--fifth-color": fifthColor,
      "--pointer-color": pointerColor,
      "--size": size,
      "--blending-value": blendingValue,
    };

    Object.entries(vars).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });
  }, []);

  // ✅ Smooth pointer animation
  useEffect(() => {
    if (!interactiveRef.current) return;

    const move = () => {
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);
      interactiveRef.current!.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    };

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  // ✅ Detect Safari only in browser
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <div
      className={cn(
        "w-full h-full absolute overflow-hidden top-0 left-0",
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* Blur Filter */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Children */}
      <div className={cn("", className)}>{children}</div>

      {/* Animated Gradients */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {[
          {
            color: "--first-color",
            anim: "animate-first",
            opacity: "opacity-100",
          },
          {
            color: "--second-color",
            anim: "animate-second",
            opacity: "opacity-100",
          },
          {
            color: "--third-color",
            anim: "animate-third",
            opacity: "opacity-100",
          },
          {
            color: "--fourth-color",
            anim: "animate-fourth",
            opacity: "opacity-70",
          },
          {
            color: "--fifth-color",
            anim: "animate-fifth",
            opacity: "opacity-100",
          },
        ].map(({ color, anim, opacity }, i) => (
          <div
            key={i}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(${color}),_0.8)_0,_rgba(var(${color}),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)]`,
              `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              anim,
              opacity
            )}
          />
        ))}

        {/* Pointer Effect */}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70`
            )}
          />
        )}
      </div>
    </div>
  );
};
