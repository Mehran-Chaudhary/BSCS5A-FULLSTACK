import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import "./Section.css";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="section-content">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
