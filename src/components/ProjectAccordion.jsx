import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Github, Layers } from 'lucide-react'

function ProjectAccordion({ project, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      {/* Header - Always Visible */}
      <motion.button
        onClick={onClick}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-white/5 transition-colors"
        whileTap={{ scale: 0.995 }}
      >
        {/* Project Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/10 flex items-center justify-center flex-shrink-0">
          <Layers size={28} className="text-cyber-blue" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">
            {project.name}
          </h3>
          <p className="text-soft-gray text-sm">{project.summary}</p>
          
          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-cyber-blue border border-cyber-blue/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-soft-gray">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Expand Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-soft-gray"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-white/10 pt-6 space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-robotic-teal uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-cyber-blue uppercase tracking-wider mb-2">
                    The Solution
                  </h4>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyber-blue/10 to-robotic-teal/10 border border-cyber-blue/20">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Impact
                  </h4>
                  <p className="text-cyber-blue text-sm font-medium">
                    {project.impact}
                  </p>
                </div>

                {/* Full Tech Stack */}
                <div>
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
                <div className="flex gap-4 pt-2">
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectAccordion
