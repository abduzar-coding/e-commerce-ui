import React from 'react';

const Sidebar = ({
  selectedGender,
  setSelectedGender,
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  mobileSidebarOpen,
  setMobileSidebarOpen
}) => {
  const sidebarContent = (
    <>
      {/* Category List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Shop By Category</h2>
        <ul className="space-y-1 text-gray-700 text-sm">
          {["Jordan", "Lifestyle", "Running", "Basketball", "Training & Gym", "Football"].map(cat => (
            <li key={cat}>
              <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setMobileSidebarOpen(false);
                }}
                className={`$ {
                  selectedCategory === cat ? "text-black font-bold" : "text-gray-700"
                } hover:underline`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Gender</h3>
        <div className="space-y-1 text-sm">
          {["Men", "Women", "Kids"].map(gender => (
            <div key={gender}>
              <label
                className={`flex items-center cursor-pointer ${
                  selectedGender === gender ? 'text-black font-semibold' : 'text-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === gender}
                  onChange={() => {
                    setSelectedGender(gender);
                    setMobileSidebarOpen(false);
                  }}
                  className="mr-2 accent-black"
                />
                {gender}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Price</h3>
        <div className="space-y-1 text-sm">
          <div>
            <label className={`flex items-center cursor-pointer ${selectedPrice === 'under100' ? 'text-black font-semibold' : 'text-gray-600'}`}>
              <input
                type="radio"
                name="price"
                checked={selectedPrice === 'under100'}
                onChange={() => {
                  setSelectedPrice('under100');
                  setMobileSidebarOpen(false);
                }}
                className="mr-2 accent-black"
              />
              Under $100
            </label>
          </div>
          <div>
            <label className={`flex items-center cursor-pointer ${selectedPrice === '100to200' ? 'text-black font-semibold' : 'text-gray-600'}`}>
              <input
                type="radio"
                name="price"
                checked={selectedPrice === '100to200'}
                onChange={() => {
                  setSelectedPrice('100to200');
                  setMobileSidebarOpen(false);
                }}
                className="mr-2 accent-black"
              />
              $100 - $200
            </label>
          </div>
          <div>
            <label className={`flex items-center cursor-pointer ${selectedPrice === 'over200' ? 'text-black font-semibold' : 'text-gray-600'}`}>
              <input
                type="radio"
                name="price"
                checked={selectedPrice === 'over200'}
                onChange={() => {
                  setSelectedPrice('over200');
                  setMobileSidebarOpen(false);
                }}
                className="mr-2 accent-black"
              />
              Over $200
            </label>
          </div>
        </div>
      </div>

      {/* Reset Filters Button */}
      <div className="mt-8">
        <button
          onClick={() => {
            setSelectedGender('');
            setSelectedCategory('');
            setSelectedPrice('');
            setMobileSidebarOpen(false);
          }}
          className="text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded shadow-sm transition"
        >
          Reset Filters
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 bg-white p-6 shadow-md transform transition-transform duration-300 ease-in-out md:hidden ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          onClick={() => setMobileSidebarOpen(false)}
          className="mb-4 text-sm text-gray-500 hover:text-black"
        >
          Close
        </button>
        {sidebarContent}
      </div>

      {/* Desktop Sidebar */}
      <div className="w-64 hidden md:block">
        <div className="p-6 shadow-md bg-white h-full">
          {sidebarContent}
        </div>
      </div>
    </>
  );
};

export default Sidebar;