import React from 'react';

const FilterTags = ({
  selectedGender,
  selectedCategory,
  selectedPrice,
  clearGender,
  clearCategory,
  clearPrice
}) => {
  const tags = [];

  if (selectedGender) {
    tags.push({ label: selectedGender, onClear: clearGender });
  }
  if (selectedCategory) {
    tags.push({ label: selectedCategory, onClear: clearCategory });
  }
  if (selectedPrice) {
    let label =
      selectedPrice === 'under100' ? 'Under $100' :
      selectedPrice === '100to200' ? '$100 - $200' : 'Over $200';
    tags.push({ label, onClear: clearPrice });
  }

  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="flex items-center bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
        >
          {tag.label}
          <button
            onClick={tag.onClear}
            className="ml-2 text-gray-500 hover:text-red-500"
          >
            &times;
          </button>
        </span>
      ))}
    </div>
  );
};

export default FilterTags;
