import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useScroll = () => {
  const [scrollDir, setScrollDir] = useState('up');
  const [isStick, setIsStick] = useState(true);
  const navContainerRef = useRef(null);
  const containerRef = useRef(null);
  function handleScroll() {
    if (containerRef.current && navContainerRef.current) {
      let container = containerRef.current;
      let nav = navContainerRef.current;
      if (
        -container.getBoundingClientRect().y >
        nav.getBoundingClientRect().height
      ) {
        setIsStick(false);
      } else {
        setIsStick(true);
      }
    }
  }

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);
  return { navContainerRef, isStick, containerRef, scrollDir };
};

export default useScroll;
