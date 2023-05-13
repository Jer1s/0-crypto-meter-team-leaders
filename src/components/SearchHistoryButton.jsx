// import styled from '@emotion/styled';
import styled from '@emotion/styled';
import NavButton from './NavButton';

const StyledNavButton = styled(NavButton)`
  display: none;
`;

const SearchHistoryButton = () => {
  return (
    <StyledNavButton>검색 기록</StyledNavButton>
  );
};

// SearchHistoryButton.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default SearchHistoryButton;
