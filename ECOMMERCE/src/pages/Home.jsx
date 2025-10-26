import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaUndoAlt,
} from "react-icons/fa";

const Home = ({ onAddToCart }) => {
  const featuredProducts = products.filter((p) => p.featured);

  const features = [
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      description: "On orders over $100",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      description: "100% secure transactions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Dedicated customer service",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaUndoAlt,
      title: "Easy Returns",
      description: "30-day return policy",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div>
      <Hero
        title="Discover the Future of Technology"
        subtitle="Premium tech gadgets and electronics for the modern lifestyle"
        ctaText="Shop Now"
        ctaLink="/products"
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}
                  >
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked selection of our best-selling tech products
            </p>
          </motion.div>

          <ProductGrid products={featuredProducts} onAddToCart={onAddToCart} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Tech?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our complete collection of premium electronics
            </p>
            <motion.a
              href="/products"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse All Products
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
