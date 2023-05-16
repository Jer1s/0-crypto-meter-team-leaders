import PropTypes from 'prop-types';
import CategoryButtonChip from './CategoryButtonChip';

const coinHistoryArray = ['전체', '1년', '1개월', '1주', '1일'];

const CategoryButtonChipContainer = ({
  selectedCoinHistory,
  setSelectedCoinHistory,
}) => {
  return (
    <div>
      {coinHistoryArray.map((coin) => {
        return (
          <CategoryButtonChip
            selectedCoinHistory={selectedCoinHistory}
            setSelectedCoinHistory={setSelectedCoinHistory}
            key={coin}
            text={coin}
          />
        );
      })}
    </div>
  );
};

CategoryButtonChipContainer.propTypes = {
  selectedCoinHistory: PropTypes.string.isRequired,
  setSelectedCoinHistory: PropTypes.func.isRequired,
};

export default CategoryButtonChipContainer;
