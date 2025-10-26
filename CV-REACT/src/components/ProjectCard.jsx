import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, features, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)" }}
    >
      <div className="project-header">
        <div className="project-icon-wrapper">
          <FaRocket className="project-icon" />
        </div>
        <div>
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>

      <ul className="project-features">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;
