import { useState } from "react";
import { motion } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import { products, categories } from "../data/products";
import { FaFilter } from "react-icons/fa";

const Products = ({ onAddToCart, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState(4000);
  const [showInStock, setShowInStock] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    const matchesStock = !showInStock || product.inStock;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesStock && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All Products
              </h1>
              <p className="text-gray-600 mt-2">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Mobile Filter Button */}
            <motion.button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter />
              Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            showInStock={showInStock}
            onStockChange={setShowInStock}
            isOpen={filterOpen}
            onClose={() => setFilterOpen(false)}
          />

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
