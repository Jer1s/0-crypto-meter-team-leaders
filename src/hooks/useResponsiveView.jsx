import { useState, useEffect } from 'react';

const useViewportType = () => {
  const [viewportType, setViewportType] = useState('');

  const debounce = (fn, ms) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, ms);
    };
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      console.log(innerWidth);
      let type = '';
      if (innerWidth < 440) {
        type = 'SuperMobile';
      } else if (innerWidth < 768) {
        type = 'Mobile';
      } else if (innerWidth < 1200) {
        type = 'Tablet';
      } else {
        type = 'Desktop';
      }
      setViewportType(type);
    };

    const debouncedHandleResize = debounce(handleResize, 500);

    handleResize(); // 초기값 설정

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return viewportType;
};

export default useViewportType;
