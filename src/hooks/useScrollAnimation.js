import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element is in viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Threshold (0-1) when to trigger
 * @param {number} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {Array} [ref, isVisible] - Ref to attach to element, visibility state
 */
const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
};

/**
 * Custom hook for scroll-based animations
 * @param {Object} options - Configuration options
 * @returns {Object} - Scroll position and direction
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: 'up',
    lastY: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > scrollPosition.lastY ? 'down' : 'up';
      
      setScrollPosition({
        x: window.scrollX,
        y: currentY,
        direction,
        lastY: currentY
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition.lastY]);

  return scrollPosition;
};

/**
 * Custom hook for progressive scroll animations
 * @param {number} startOffset - Offset to start animation
 * @param {number} endOffset - Offset to end animation
 * @returns {number} - Progress percentage (0-1)
 */
export const useScrollProgress = (startOffset = 0, endOffset = 500) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newProgress = 0;
      
      if (scrollY <= startOffset) {
        newProgress = 0;
      } else if (scrollY >= endOffset) {
        newProgress = 1;
      } else {
        newProgress = (scrollY - startOffset) / (endOffset - startOffset);
      }
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startOffset, endOffset]);

  return progress;
};

/**
 * Custom hook for parallax effect
 * @param {number} speed - Parallax speed (0-1)
 * @param {number} offset - Initial offset
 * @returns {number} - Transform value
 */
export const useParallax = (speed = 0.5, offset = 0) => {
  const [transform, setTransform] = useState(offset);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newTransform = offset + scrollY * speed;
      setTransform(newTransform);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return transform;
};

/**
 * Custom hook for element fade-in on scroll
 * @param {Object} options - Animation options
 * @returns {Array} [ref, controls, isVisible]
 */
export const useFadeInOnScroll = (options = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true,
    animationDelay = 0
  } = options;

  const [ref, isVisible] = useScrollAnimation({ threshold, rootMargin, triggerOnce });
  const [controls, setControls] = useState({
    opacity: 0,
    transform: 'translateY(30px)',
    transition: `all 0.6s ease-out ${animationDelay}s`
  });

  useEffect(() => {
    if (isVisible) {
      setControls({
        opacity: 1,
        transform: 'translateY(0)',
        transition: `all 0.6s ease-out ${animationDelay}s`
      });
    } else if (!triggerOnce) {
      setControls({
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `all 0.6s ease-out ${animationDelay}s`
      });
    }
  }, [isVisible, triggerOnce, animationDelay]);

  return [ref, controls, isVisible];
};

/**
 * Custom hook for staggered children animations
 * @param {number} childrenCount - Number of children elements
 * @param {number} staggerDelay - Delay between each child
 * @param {Object} options - Animation options
 * @returns {Array} [parentRef, childStyles, isVisible]
 */
export const useStaggerAnimation = (childrenCount, staggerDelay = 0.1, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    startDelay = 0
  } = options;

  const [parentRef, isVisible] = useScrollAnimation({ threshold, rootMargin, triggerOnce });
  const [childStyles, setChildStyles] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const styles = [];
      for (let i = 0; i < childrenCount; i++) {
        styles.push({
          opacity: 1,
          transform: 'translateY(0)',
          transition: `all 0.5s ease-out ${startDelay + (i * staggerDelay)}s`
        });
      }
      setChildStyles(styles);
    } else if (!triggerOnce) {
      const styles = [];
      for (let i = 0; i < childrenCount; i++) {
        styles.push({
          opacity: 0,
          transform: 'translateY(30px)',
          transition: `all 0.5s ease-out ${startDelay + (i * staggerDelay)}s`
        });
      }
      setChildStyles(styles);
    }
  }, [isVisible, childrenCount, staggerDelay, triggerOnce, startDelay]);

  return [parentRef, childStyles, isVisible];
};

export default useScrollAnimation;