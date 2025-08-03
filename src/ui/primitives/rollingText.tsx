'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  type Target,
  type TargetAndTransition,
  type Transition,
} from 'framer-motion';

const DEFAULT_TRANSITION: Transition = { duration: 0.5, ease: 'easeOut' };
const DEFAULT_GET_ENTER_DELAY = (i: number) => i * 0.05;

const DEFAULT_ENTER_VARIANT = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
};

interface RollingTextProps {
  text: string;
  className?: string;
  transition?: Transition;
  getEnterDelay?: (index: number) => number;
  inView?: boolean;
  inViewMargin?: string;
  inViewOnce?: boolean;
  enterVariant?: {
    initial: Target;
    animate: TargetAndTransition;
  };
  onAnimationComplete?: () => void;
}

export function RollingText({
  text,
  className,
  transition = DEFAULT_TRANSITION,
  getEnterDelay = DEFAULT_GET_ENTER_DELAY,
  inView = true,
  inViewMargin = '0px',
  inViewOnce = true,
  enterVariant = DEFAULT_ENTER_VARIANT,
  onAnimationComplete,
}: RollingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(localRef, {
    margin: inViewMargin,
    once: inViewOnce,
  });

  const visible = !inView || isInView;
  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <span ref={localRef} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const index = globalCharIndex++;
            return (
              <span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block relative [perspective:1000px] [transform-style:preserve-3d]"
                aria-hidden="true"
              >
                <motion.span
                  initial={enterVariant.initial}
                  animate={visible ? enterVariant.animate : {}}
                  transition={{
                    ...transition,
                    delay: getEnterDelay(index),
                  }}
                  className="inline-block [backface-visibility:hidden] [transform-origin:50%_25%]"
                  onAnimationComplete={
                    wordIndex === words.length - 1 &&
                    charIndex === word.length - 1
                      ? onAnimationComplete
                      : undefined
                  }
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}