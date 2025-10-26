import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import "./ExperienceCard.css";

const ExperienceCard = ({
  position,
  company,
  location,
  date,
  responsibilities,
  index,
}) => {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="experience-header">
        <div className="left-section">
          <div className="icon-wrapper">
            <FaBriefcase className="briefcase-icon" />
          </div>
          <div>
            <h3 className="position">{position}</h3>
            <p className="company">{company}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="meta-info">
            <FaMapMarkerAlt className="meta-icon" />
            <span>{location}</span>
          </div>
          <div className="meta-info">
            <FaCalendar className="meta-icon" />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <ul className="responsibilities">
        {responsibilities.map((resp, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
          >
            {resp}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
