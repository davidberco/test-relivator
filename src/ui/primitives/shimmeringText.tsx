'use client';
import * as React from 'react';
import { type HTMLMotionProps, motion, type Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '~/lib/utils';

type ShimmeringTextProps = {
  text: string;
  duration?: number;
  transition?: Transition;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
  inViewOnce?: boolean;
} & Omit<HTMLMotionProps<'span'>, 'children'>;

function ShimmeringText({
  text,
  duration = 1,
  transition,
  wave = false,
  className,
  color = 'var(--color-neutral-500)',
  shimmeringColor = 'var(--color-neutral-300)',
  inViewOnce = true,
  ...props
}: ShimmeringTextProps) {
  const { ref, inView } = useInView({ 
    triggerOnce: inViewOnce,
    threshold: 0.1 
  });

  React.useEffect(() => {
    console.log(`[ShimmeringText] In view: ${inView}`);
  }, [inView])

  return (
    <motion.span
      ref={ref}
      className={cn('relative inline-block [perspective:500px]', className)}
      style={
        {
          '--shimmering-color': shimmeringColor,
          '--color': color,
          color: 'var(--color)',
        } as React.CSSProperties
      }
      {...props}
    >
      {text?.split('')?.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre [transform-style:preserve-3d]"
          initial={{
            color: 'var(--color)',
            ...(wave && {
              scale: 1,
              rotateY: 0,
            }),
          }}
          animate={
            inView
              ? {
                  color: ['var(--color)', 'var(--shimmering-color)', 'var(--color)'],
                  ...(wave && {
                    x: [0, 5, 0],
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                    rotateY: [0, 15, 0],
                  }),
                }
              : {}
          }
          transition={{
            duration,
            repeat: 2,
            repeatType: 'loop',
            repeatDelay: text.length * 0.05,
            delay: (i * duration) / text.length,
            ease: 'easeInOut',
            ...transition,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export { ShimmeringText, type ShimmeringTextProps };