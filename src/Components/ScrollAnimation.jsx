import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children,animationClass }) => {
  const [ref, inView] = useInView({
   
    threshold: 0.5, // Trigger animation when element is 50% in view
  });

  return (
    <div ref={ref} className={`scroll-animation ${inView ? 'animationClass' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
