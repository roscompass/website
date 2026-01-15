import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Autonomous Mobile Robot Navigation Stack',
    summary: 'Full Nav2 implementation for warehouse logistics robot with dynamic obstacle avoidance.',
    problem:
      'A logistics company needed an autonomous mobile robot capable of navigating complex warehouse environments with dynamic obstacles, tight spaces, and varying floor conditions.',
    solution:
      'Developed a complete navigation stack using ROS 2 Humble and Nav2, featuring custom local planners, behavior trees for task management, and sensor fusion combining 2D LiDAR with depth cameras for robust obstacle detection.',
    impact: 'Achieved 95% navigation success rate with 40% reduction in delivery time compared to manual operations.',
    techStack: ['ROS 2 Humble', 'Nav2', 'Python', 'C++', 'Behavior Trees', 'Gazebo'],
    githubUrl: '#',
    demoUrl: null,
  },
  {
    name: 'Multi-Robot SLAM System',
    summary: 'Distributed mapping solution for fleet of inspection robots using graph-based SLAM.',
    problem:
      'An inspection company required multiple robots to collaboratively map large industrial facilities while maintaining consistent global maps across all agents.',
    solution:
      'Implemented a distributed SLAM system using Cartographer with custom inter-robot communication nodes for map merging, loop closure detection across robot observations, and centralized map optimization.',
    impact: 'Enabled 5 robots to map a 50,000 sq ft facility in under 2 hours with centimeter-level accuracy.',
    techStack: ['ROS 2 Galactic', 'Cartographer', 'C++', 'DDS', 'Docker', 'PostgreSQL'],
    githubUrl: '#',
    demoUrl: null,
  },
  {
    name: '6-DOF Robotic Arm Manipulation Pipeline',
    summary: 'MoveIt2-based pick-and-place system with vision-guided grasping for manufacturing.',
    problem:
      'Manufacturing client needed a flexible robotic arm system capable of identifying, picking, and placing parts of varying sizes without pre-programmed positions.',
    solution:
      'Built a complete manipulation pipeline using MoveIt2 with custom grasp planners, integrated RGB-D perception for object detection and pose estimation, and collision-aware motion planning.',
    impact: 'Reduced part handling time by 60% and achieved 99.2% pick success rate on previously unseen objects.',
    techStack: ['ROS 2 Humble', 'MoveIt2', 'OpenCV', 'PyTorch', 'C++', 'Isaac Sim'],
    githubUrl: '#',
    demoUrl: null,
  },
]

// Project List Item Component
function ProjectListItem({ project, isSelected, onClick, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${isSelected
        ? 'bg-cyber-blue/10 border border-cyber-blue/40'
        : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyber-blue' : 'bg-robotic-teal'}`} />
        <h3 className={`font-semibold text-lg ${isSelected ? 'text-cyber-blue' : 'text-white'}`}>
          {project.name}
        </h3>
      </div>

      {/* Show summary when selected */}
      <AnimatePresence>
        {isSelected && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-soft-gray text-sm mt-3 pl-5 overflow-hidden"
          >
            {project.summary}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// Project Details Panel Component
function ProjectDetailsPanel({ project }) {
  if (!project) {
    return (
      <div className="h-full flex items-center justify-center glass-card rounded-2xl p-8">
        <div className="text-center">
          <Layers size={48} className="text-soft-gray/30 mx-auto mb-4" />
          <p className="text-soft-gray">Select a project to view details</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl p-8 h-full"
    >
      {/* Project Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/10 flex items-center justify-center flex-shrink-0">
          <Layers size={28} className="text-cyber-blue" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-soft-gray">{project.summary}</p>
        </div>
      </div>

      {/* The Challenge */}
      <div className="mb-6">
        <h4 className="text-base font-semibold text-robotic-teal uppercase tracking-wider mb-3">
          The Challenge
        </h4>
        <p className="text-soft-gray text-base leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* The Solution */}
      <div className="mb-6">
        <h4 className="text-base font-semibold text-cyber-blue uppercase tracking-wider mb-3">
          The Solution
        </h4>
        <p className="text-soft-gray text-base leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* Impact */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyber-blue/10 to-robotic-teal/10 border border-cyber-blue/20 mb-6">
        <h4 className="text-base font-semibold text-white mb-2">
          Impact
        </h4>
        <p className="text-cyber-blue text-base font-medium">
          {project.impact}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-soft-gray mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1.5 rounded-md bg-white/5 text-soft-gray border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-white/10">
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-soft-gray hover:text-cyber-blue transition-colors"
            whileHover={{ x: 3 }}
          >
            <Github size={18} />
            View on GitHub
          </motion.a>
        )}
        {project.demoUrl && (
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-soft-gray hover:text-robotic-teal transition-colors"
            whileHover={{ x: 3 }}
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0) // Default to first project

  return (
    <section id="work" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian to-obsidian/90 pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-robotic-teal font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-soft-gray max-w-xl mx-auto">
            Select a project to explore the technical challenges, solutions,
            and measurable impact of our work.
          </p>
        </motion.div>

        {/* Split Panel Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Panel - Project List */}
          <div className="lg:col-span-2 space-y-3">
            {projects.map((project, index) => (
              <ProjectListItem
                key={project.name}
                project={project}
                isSelected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                index={index}
              />
            ))}
          </div>

          {/* Right Panel - Project Details */}
          <div className="lg:col-span-3">
            <ProjectDetailsPanel project={projects[selectedIndex]} />
          </div>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-soft-gray hover:text-cyber-blue hover:border-cyber-blue/30 transition-all rounded-lg font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects on GitHub
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          {/* Want Similar Results CTA */}
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-blue to-robotic-teal text-obsidian font-semibold rounded-xl text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Want similar results? Let's talk
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
