import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-2xl text-gray-400 mb-4">No products found</p>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
