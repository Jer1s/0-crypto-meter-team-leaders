import PropTypes from 'prop-types';
import CategoryButtonChip from './CategoryButtonChip';

const CategoryButtonChipContainer = ({
  selected, setSelected, list, width,
}) => {
  return (
    <div>
      {list?.map((termItem) => {
        return (
          <CategoryButtonChip
            selectedTerm={selected}
            setSelectedTerm={setSelected}
            key={termItem.text}
            termItem={termItem}
            width={width}
          />
        );
      })}
    </div>
  );
};

CategoryButtonChipContainer.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.shape({
    term: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  setSelected: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default CategoryButtonChipContainer;
