import PropTypes from 'prop-types';
import CategoryButtonChip from './CategoryButtonChip';

const termList = [{ text: '전체', term: 'max' }, { text: '1년', term: '365' }, { text: '1개월', term: '30' }, { text: '1주', term: '7' }, { text: '1일', term: '1' }];

const CategoryButtonChipContainer = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div>
      {termList.map((termItem) => {
        return (
          <CategoryButtonChip
            selectedTerm={selectedTerm}
            setSelectedTerm={setSelectedTerm}
            key={termItem.text}
            termItem={termItem}
          />
        );
      })}
    </div>
  );
};

CategoryButtonChipContainer.propTypes = {
  selectedTerm: PropTypes.object,
  setSelectedTerm: PropTypes.func.isRequired,
};

export default CategoryButtonChipContainer;
