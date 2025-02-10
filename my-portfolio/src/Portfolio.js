import { motion } from "framer-motion";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce solution serving 10k+ monthly users. Improved checkout conversion by 25%.",
      skills: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com",
    },
    {
      title: "Analytics Dashboard",
      description: "Developed real-time analytics dashboard for enterprise clients. Processes 1M+ daily events.",
      skills: ["Vue.js", "Python", "AWS"],
      link: "https://github.com",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "AWS"] },
    { category: "Tools", items: ["Git", "Docker", "Jest", "CI/CD"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-red-50 text-black"}`}
    >
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="absolute right-8 top-8"
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-all duration-300 hover:bg-red-100 dark:hover:bg-gray-700 hover:scale-110"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </motion.div>

        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-32 h-32 object-cover border-4 border-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            />
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-2 hover:text-red-600 transition-colors duration-300"
          >
            John Doe
          </motion.h1>
          <h2 className="text-xl font-semibold mb-4">Full Stack Developer</h2>
          <p className="max-w-2xl mx-auto">
            Building elegant solutions to complex problems. Focused on web technologies and user experience.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          {["projects", "skills"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab ? "bg-red-500 text-white" : "bg-red-100 text-black dark:bg-gray-700 dark:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {activeTab === "projects" && (
          <motion.div className="grid gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg cursor-pointer`}
              >
                <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-red-100 text-black dark:bg-gray-700 dark:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "skills" && (
          <motion.div className="grid gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-semibold mb-4 hover:text-red-500 transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 rounded-lg bg-red-100 text-black dark:bg-gray-700 dark:text-white cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        <motion.footer className="mt-12 pt-8 border-t border-red-200 dark:border-gray-700">
          <div className="flex gap-6 justify-center">
            <motion.a
              href="mailto:john@example.com"
              whileHover={{ scale: 1.2 }}
              className="transition-all duration-300 hover:text-red-500"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.2 }}
              className="transition-all duration-300 hover:text-red-500"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.2 }}
              className="transition-all duration-300 hover:text-red-500"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Portfolio;
