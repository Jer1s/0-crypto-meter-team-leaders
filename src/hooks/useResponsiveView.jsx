import { useState, useEffect, useCallback } from 'react';

const useViewportType = () => {
  const [viewportType, setViewportType] = useState('');

  const handleResize = useCallback(() => {
    const { innerWidth } = window;
    let type = '';

    if (innerWidth < 768) {
      type = 'Mobile';
    } else if (innerWidth < 1200) {
      type = 'Tablet';
    } else {
      type = 'Desktop';
    }

    setViewportType(type);

    const timer = setTimeout(() => {
      window.addEventListener('resize', handleResize);
      clearTimeout(timer);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  return viewportType;
};

export default useViewportType;
