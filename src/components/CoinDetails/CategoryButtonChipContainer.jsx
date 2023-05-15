import PropTypes from 'prop-types';
import CategoryButtonChip from './CategoryButtonChip';

const termList = ['전체', '1년', '1개월', '1주', '1일'];

const CategoryButtonChipContainer = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div>
      {termList.map((term) => {
        return (
          <CategoryButtonChip
            selectedTerm={selectedTerm}
            setSelectedTerm={setSelectedTerm}
            key={term}
            text={term}
          />
        );
      })}
    </div>
  );
};

CategoryButtonChipContainer.propTypes = {
  selectedTerm: PropTypes.string.isRequired,
  setSelectedTerm: PropTypes.func.isRequired,
};

export default CategoryButtonChipContainer;
