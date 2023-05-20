import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ScenarioForm from './ScenarioForm';

const Puller = styled.div`
  width: 30px;
  height: 6px;
  background-color: #dadada;
  border-radius: 3px;
  position: absolute;
  top: 8px;
  left: calc(50% - 15px);
`;

const BottomSheet = ({
  selectedCoin,
  setSelectedCoin,
  addButtonData,
  setBuyPrice,
  buyPrice,
  setSelectedDate,
  selectedDate,
  handleSubmit,
  isBottomSheetOpen,
  setIsBottomSheetOpen,
}) => {
  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isBottomSheetOpen}
      onClose={handleBottomSheetClose}
      onOpen={handleBottomSheetOpen}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Puller />
      <div>
        <ScenarioForm
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          addButtonData={addButtonData}
          setBuyPrice={setBuyPrice}
          buyPrice={buyPrice}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          handleSubmit={handleSubmit}
          isBottomSheetOpen={isBottomSheetOpen}
        />
        {' '}

      </div>
    </SwipeableDrawer>
  );
};

export default BottomSheet;
