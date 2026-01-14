import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Cpu, Bot } from 'lucide-react'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-robotic-teal/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-cyber-blue font-medium">
              <Terminal size={16} />
              ROS 2 Humble • Gazebo • Isaac Sim
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-white">Production-Grade</span>
            <br />
            <span className="gradient-text">ROS Engineering</span>
            <br />
            <span className="text-white">& Simulation.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-soft-gray max-w-xl leading-relaxed"
          >
            Moving robotics from concept to deployment with robust ROS 2
            architectures and high-fidelity virtual testing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-robotic-teal text-obsidian font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyber-blue/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Technical Deep-Dive
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
            <motion.a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-lg hover:border-cyber-blue/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-6">
            {['ROS 2', 'C++', 'Python', 'Linux', 'Docker', 'Nav2'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-soft-gray bg-white/5 rounded-md border border-white/10"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyber-blue/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute inset-8 rounded-full border border-robotic-teal/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-16 rounded-full border border-cyber-blue/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/20 glass-card flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    '0 0 30px rgba(0, 212, 255, 0.2)',
                    '0 0 60px rgba(20, 241, 149, 0.3)',
                    '0 0 30px rgba(0, 212, 255, 0.2)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Bot size={64} className="text-cyber-blue" />
              </motion.div>
            </div>

            {/* Floating Nodes */}
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Cpu size={24} className="text-robotic-teal" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 w-10 h-10 rounded-lg glass-card flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <Terminal size={20} className="text-cyber-blue" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 w-10 h-10 rounded-lg glass-card flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <span className="text-robotic-teal font-mono text-xs">ROS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-soft-gray/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-cyber-blue rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
