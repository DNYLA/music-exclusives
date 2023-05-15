'use client';
import React, { ReactNode, useState } from 'react';

interface EffectItemProps {
  animation: string;
  baseAnimation?: string;
  handleOnClick?: () => void;
  hoverAnimation?: string;
  children: ReactNode;
}
const EffectItem = ({
  animation,
  baseAnimation,
  hoverAnimation,
  children,
}: EffectItemProps) => {
  const [effect, setEffect] = useState(false);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    console.log(`Animationed ended ${e.animationName}`);

    if (baseAnimation && e.animationName === baseAnimation) {
      setEffect(false);
      return;
    } else if (baseAnimation) return; //If base animation is set we do not want to continue the checks below

    if (
      e.animationName === animation ||
      e.animationName.includes(animation.split('-')[0])
    ) {
      setEffect(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(`Clicked`);
    e.stopPropagation();
    setEffect(true);
  };

  return (
    <div
      className={`${effect && `animate-${animation}`} ${
        !effect && hoverAnimation && `hover:animate-${hoverAnimation}`
      }`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default EffectItem;
