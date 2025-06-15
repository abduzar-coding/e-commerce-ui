import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import FilterTags from './components/FilterTags';
import CartDrawer from './components/CartDrawer';

function App() {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar
        setMobileSidebarOpen={setMobileSidebarOpen}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      <div className="flex min-h-screen bg-gray-50">
        <Sidebar
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          mobileSidebarOpen={mobileSidebarOpen}
          setMobileSidebarOpen={setMobileSidebarOpen}
        />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Men’s Shoes & Sneakers (636)</h1>

          <FilterTags
            selectedGender={selectedGender}
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            clearGender={() => setSelectedGender('')}
            clearCategory={() => setSelectedCategory('')}
            clearPrice={() => setSelectedPrice('')}
          />

          <ProductGrid
            selectedGender={selectedGender}
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            sortBy={sortBy}
            setSortBy={setSortBy}
            addToCart={addToCart}
          />
        </main>
      </div>

      {isCartOpen && (
        <CartDrawer
          cart={cart}
          setIsCartOpen={setIsCartOpen}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
}

export default App;