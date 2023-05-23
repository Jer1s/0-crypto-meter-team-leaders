import CategoryButtonChip from './CategoryButtonChip';

const TypeButtonChipContainer = ({ selectedType, setSelectedType }) => {
  console.log(selectedType);
  return (
    <CategoryButtonChip selectedType={selectedType} setSelectedTerm={setSelectedType} />
  );
};

export default TypeButtonChipContainer;
