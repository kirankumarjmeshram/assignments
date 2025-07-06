import React from 'react';

const FilterSortBar = ({ categories, onFilter, onSort }) => (
  <div style={{ margin: '1rem 0' }}>
    <label>
      Filter by Category:
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </label>

    <label style={{ marginLeft: '1rem' }}>
      Sort by Price:
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">None</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </label>
  </div>
);

export default FilterSortBar;
