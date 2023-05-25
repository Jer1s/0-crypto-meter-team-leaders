import { useState, useEffect } from 'react';

const useViewportType = () => {
  const [viewportType, setViewportType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let type = '';
      if (innerWidth < 440) {
        type = 'SuperMobile';
      } else if (innerWidth < 768) {
        type = 'Mobile';
      } else if (innerWidth < 1199) {
        type = 'Tablet';
      } else {
        type = 'Desktop';
      }
      setViewportType(type);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return viewportType;
};

export default useViewportType;
