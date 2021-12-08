import { useLayoutEffect } from 'react';

export const useScrollToTop = function <T>(addiction?: T) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useLayoutEffect(() => {
    scrollToTop();
    return () => window.removeEventListener('scroll', scrollToTop);
  }, [addiction]);
};
