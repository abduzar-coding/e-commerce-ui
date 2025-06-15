import React from 'react';

const CartDrawer = ({ cart, setIsCartOpen, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-lg transform transition-transform duration-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-black">
            &times;
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-sm text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-start text-sm">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t pt-4 text-sm">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-bold">${total}</span>
              </div>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;