import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

const ProductGrid = ({
  selectedGender,
  selectedCategory,
  selectedPrice,
  sortBy,
  setSortBy,
  addToCart
}) => {
  const handleSort = (e) => setSortBy(e.target.value);

  const filtered = products.filter(product => {
    const genderMatch = selectedGender ? product.gender === selectedGender : true;
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const priceMatch = selectedPrice
      ? selectedPrice === 'under100'
        ? product.price < 100
        : selectedPrice === '100to200'
          ? product.price >= 100 && product.price <= 200
          : product.price > 200
      : true;

    return genderMatch && categoryMatch && priceMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'low-high') return a.price - b.price;
    if (sortBy === 'high-low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-2">
        <select
          value={sortBy}
          onChange={handleSort}
          className="border px-3 py-2 rounded text-sm text-gray-700"
        >
          <option value="">Sort</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;