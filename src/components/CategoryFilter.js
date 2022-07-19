import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  const newButton = categories.map((category) => {
    const className = category === selectedCategory ? 'selected' : null;
    return (
    <button key={category} 
    className={className} 
    onClick={() => setSelectedCategory(category)}>
      {category}
      </button>)
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {newButton}
    </div>
  );
}

export default CategoryFilter;
