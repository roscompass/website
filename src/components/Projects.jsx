import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectAccordion from './ProjectAccordion'

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

function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="work" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian to-obsidian/90 pointer-events-none" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            Click on any project to explore the technical challenges, solutions,
            and measurable impact of our work.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectAccordion
              key={project.name}
              project={project}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
