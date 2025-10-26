import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendar } from "react-icons/fa";
import "./EducationSection.css";

const EducationSection = ({ education }) => {
  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div className="section-content">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="education-header">
              <div className="left-section">
                <div className="edu-icon-wrapper">
                  <FaGraduationCap className="graduation-icon" />
                </div>
                <div>
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                </div>
              </div>
              <div className="date-wrapper">
                <FaCalendar className="calendar-icon" />
                <span className="date">{edu.date}</span>
              </div>
            </div>
            <p className="education-details">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
