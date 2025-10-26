import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";
import "./LanguageSection.css";

const LanguageSection = ({ languages }) => {
  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Languages
      </motion.h2>
      <motion.div
        className="language-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="language-icon-wrapper">
          <FaLanguage className="language-icon" />
        </div>
        <div className="language-list">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="language-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="language-name">{lang.name}</span>
              <span className="language-level">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LanguageSection;
