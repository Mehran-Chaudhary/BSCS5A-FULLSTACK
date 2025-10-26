import { motion } from "framer-motion";
import { FaFilter, FaTimes } from "react-icons/fa";

const FilterSidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  showInStock,
  onStockChange,
  isOpen,
  onClose,
}) => {
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: -300, opacity: 0 },
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] 
          bg-white rounded-2xl shadow-lg p-6 z-50 lg:z-0
          w-72 overflow-y-auto
          ${isOpen ? "block" : "hidden lg:block"}
        `}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaFilter className="text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Filters</h3>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-600">
            <FaTimes />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-700 mb-4">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all font-medium ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Max Price: ${priceRange}
              </label>
              <input
                type="range"
                min="0"
                max="4000"
                step="100"
                value={priceRange}
                onChange={(e) => onPriceChange(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>$4000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-4">Availability</h4>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={showInStock}
                onChange={(e) => onStockChange(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  showInStock ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  showInStock ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            <span className="text-gray-700 font-medium">In Stock Only</span>
          </label>
        </div>

        {/* Reset Button */}
        <motion.button
          onClick={() => {
            onCategoryChange("All Products");
            onPriceChange(4000);
            onStockChange(false);
          }}
          className="w-full py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Reset Filters
        </motion.button>
      </motion.aside>
    </>
  );
};

export default FilterSidebar;
