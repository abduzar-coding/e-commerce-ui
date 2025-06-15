import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col border p-4 shadow-sm rounded hover:shadow-md transition h-[420px]">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {product.badge && (
            <p className="text-xs font-semibold text-red-600 mb-1"> {product.badge} </p>
          )}

          {/* Fixed height image box */}
          <div className="h-48 flex items-center justify-center mb-2">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>

          {/* Text block */}
          <h2 className="text-sm font-medium text-gray-800">{product.name}</h2>
          <p className="text-xs text-gray-500">{product.category}</p>
          <p className="text-xs text-gray-500">{product.colors} Colors</p>
          <p className="font-semibold mt-1">${product.price}</p>
        </div>

        {/* Button pinned to bottom */}
        <button
          onClick={() => addToCart(product)}
          className="text-sm bg-black text-white mt-4 px-4 py-2 rounded hover:bg-gray-800 transition self-start"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
