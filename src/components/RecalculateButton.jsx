import restore from 'assets/restore.png';
import styled from '@emotion/styled';
import NavButton from './NavButton';

const StyledNavButton = styled(NavButton)`
  display: none;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: var(--gray2);
`;

const RecalculateButton = () => {
  return (
    <StyledNavButton>
      <Img src={restore} alt="Restore" />
      <Title>다시 계산하기</Title>
    </StyledNavButton>
  );
};

// SearchHistoryButton.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default RecalculateButton;
