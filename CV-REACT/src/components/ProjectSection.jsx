import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Section.css";

const ProjectSection = ({ projects }) => {
  return (
    <section className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="section-content">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
