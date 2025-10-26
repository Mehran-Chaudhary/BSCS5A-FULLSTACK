import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

const Header = ({ name, title, email, phone, github, location }) => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="name"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {name}
      </motion.h1>

      <motion.p
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {title}
      </motion.p>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>{email}</span>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <span>{phone}</span>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <span>{github}</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>{location}</span>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
