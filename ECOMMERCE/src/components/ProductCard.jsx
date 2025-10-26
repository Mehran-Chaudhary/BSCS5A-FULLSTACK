import { motion } from "framer-motion";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart, index }) => {
  const { id, name, price, rating, reviews, image, inStock, featured } =
    product;

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
    >
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          {featured && (
            <motion.div
              className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.3 }}
            >
              FEATURED
            </motion.div>
          )}
          {!inStock && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
              OUT OF STOCK
            </div>
          )}

          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Quick Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
          >
            <motion.button
              className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaHeart className="text-gray-600 hover:text-red-500" />
            </motion.button>
          </motion.div>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/product/${id}`}>
          <h3 className="font-bold text-lg mb-2 text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 h-14">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${
                  i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </p>
          </div>

          <motion.button
            onClick={() => onAddToCart(product)}
            disabled={!inStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
              inStock
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={inStock ? { scale: 1.05 } : {}}
            whileTap={inStock ? { scale: 0.95 } : {}}
          >
            <FaShoppingCart />
            <span className="text-sm">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
