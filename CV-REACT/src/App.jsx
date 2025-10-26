import { motion } from "framer-motion";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import LanguageSection from "./components/LanguageSection";
import { cvData } from "./data/cvData";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="background-gradient"></div>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header {...cvData.personal} />

        <main className="main-content">
          <ExperienceSection experiences={cvData.experience} />
          <ProjectSection projects={cvData.projects} />
          <EducationSection education={cvData.education} />
          <SkillsSection skills={cvData.skills} />
          <LanguageSection languages={cvData.languages} />
        </main>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>Built with React + Vite • Designed with ❤️ by Mehran Akhtar</p>
          <p className="footer-subtitle">© 2024 • Air University, Islamabad</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
