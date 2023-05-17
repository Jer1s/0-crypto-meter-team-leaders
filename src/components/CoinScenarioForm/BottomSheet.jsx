import React, { useState } from 'react';

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const openBottomSheet = () => {
    setIsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsOpen(false);
  };

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
    setCurrentY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    setCurrentY(event.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const deltaY = currentY - startY;

    if (deltaY > 100) {
      closeBottomSheet();
    } else if (deltaY < -100) {
      openBottomSheet();
    }
  };

  return (
    <div
      className={`bottom-sheet-container ${isOpen ? 'open' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button type="button" onClick={openBottomSheet}>Open Bottom Sheet</button>
      <div className="bottom-sheet">
        <h2>Bottom Sheet Content</h2>
        <p>This is the content of the bottom sheet.</p>
        <button type="button" onClick={closeBottomSheet}>Close</button>
      </div>
    </div>
  );
};

export default BottomSheet;
