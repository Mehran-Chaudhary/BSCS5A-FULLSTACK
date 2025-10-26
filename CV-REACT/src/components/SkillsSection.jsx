import { motion } from "framer-motion";
import { FaCode, FaTools, FaUsers } from "react-icons/fa";
import "./SkillsSection.css";

const SkillsSection = ({ skills }) => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: FaCode,
      skills: skills.technical,
      color: "blue",
    },
    {
      title: "Development",
      icon: FaTools,
      skills: skills.development,
      color: "purple",
    },
    {
      title: "Soft Skills",
      icon: FaUsers,
      skills: skills.soft,
      color: "green",
    },
  ];

  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={category.title}
              className={`skill-category skill-${category.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="skill-header">
                <div
                  className={`skill-icon-wrapper skill-icon-${category.color}`}
                >
                  <IconComponent className="skill-icon" />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.split(", ").map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className={`skill-tag skill-tag-${category.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
