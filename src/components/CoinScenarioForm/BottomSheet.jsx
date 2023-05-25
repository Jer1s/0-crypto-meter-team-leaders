/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useViewportType from 'hooks/useResponsiveView';
import PropTypes from 'prop-types';

const BottomSheetStyle = css`
  padding: 6.4rem 5.4rem 5.6rem; 

  @media (max-width: 768px){
    padding: 4.4rem 2.4rem 4.8rem; 
  }
`;

const PullerContainer = css`
  padding-top: 2rem;

  @media (max-width: 768px){
    padding-top: 1.2rem; 
  }
`;

const Puller = styled.div`
  width: 8rem;
  height: 0.6rem;
  background-color: var(--gray7);
  border-radius: 0.3rem;
  margin: 0 auto;
`;

const BottomSheet = ({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  children,
}) => {
  const viewportType = useViewportType();

  const heightLookup = {
    Tablet: '60rem',
    Mobile: '56.5rem',
    SuperMobile: '47.2rem',
  };

  const bottomSheetHeight = heightLookup[viewportType];

  const handleBottomSheeOpen = () => {
    setIsBottomSheetOpen(true);
  };
  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isBottomSheetOpen}
      onOpen={handleBottomSheeOpen}
      onClose={handleBottomSheetClose}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        style: { borderRadius: '2.4rem 2.4rem 0 0', height: bottomSheetHeight, overflow: 'visible' },
      }}
    >
      <div css={PullerContainer}>
        <Puller />
      </div>
      <div css={BottomSheetStyle}>
        {children}
      </div>
    </SwipeableDrawer>
  );
};

export default BottomSheet;

BottomSheet.propTypes = {
  isBottomSheetOpen: PropTypes.bool.isRequired,
  setIsBottomSheetOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
