import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSortBar from '../components/FilterSortBar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
      setDisplayedProducts(data.products);

      const uniqueCategories = [...new Set(data.products.map(p => p.category))];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    const filtered = category
      ? products.filter(p => p.category === category)
      : products;
    setDisplayedProducts(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...displayedProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setDisplayedProducts(sorted);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <FilterSortBar categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
