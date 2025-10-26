import { motion } from "framer-motion";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, name, price, image, quantity } = item;
  const subtotal = price * quantity;

  return (
    <motion.div
      className="flex gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      layout
    >
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
            {name}
          </h3>
          <p className="text-blue-600 font-bold">${price}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <motion.button
              onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaMinus className="text-gray-600 text-xs" />
            </motion.button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <motion.button
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlus className="text-gray-600 text-xs" />
            </motion.button>
          </div>

          <motion.button
            onClick={() => onRemove(id)}
            className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTrash />
          </motion.button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="text-right">
        <p className="text-lg font-bold text-gray-800">
          ${subtotal.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default CartItem;
