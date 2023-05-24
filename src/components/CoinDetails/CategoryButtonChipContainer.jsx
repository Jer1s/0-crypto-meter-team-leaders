import PropTypes from 'prop-types';
import CategoryButtonChip from './CategoryButtonChip';

const CategoryButtonChipContainer = ({ selected, setSelected, list }) => {
  return (
    <div>
      {list?.map((termItem) => {
        return (
          <CategoryButtonChip
            selectedTerm={selected}
            setSelectedTerm={setSelected}
            key={termItem.text}
            termItem={termItem}
          />
        );
      })}
    </div>
  );
};

CategoryButtonChipContainer.propTypes = {
  selected: PropTypes.shape({
    term: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  setSelected: PropTypes.func.isRequired,
};

export default CategoryButtonChipContainer;
