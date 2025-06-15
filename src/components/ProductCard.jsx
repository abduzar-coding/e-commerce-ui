import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 shadow-sm rounded hover:shadow-md transition">
      {product.badge && (
        <p className="text-xs font-semibold text-red-600 mb-1">{product.badge}</p>
      )}
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-2" />
      <h2 className="text-sm font-medium text-gray-800">{product.name}</h2>
      <p className="text-xs text-gray-500">{product.category}</p>
      <p className="text-xs text-gray-500">{product.colors} Colors</p>
      <p className="font-semibold mt-1 mb-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;