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
              ROS 2 Humble • Gazebo • Webots
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

        {/* Right Visual - Compass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            {/* Outer Compass Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyber-blue/30" />

            {/* Compass Tick Marks */}
            {[...Array(72)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-1/2 h-full w-px origin-bottom"
                style={{ transform: `translateX(-50%) rotate(${i * 5}deg)` }}
              >
                <div className={`w-px ${i % 6 === 0 ? 'h-3 bg-cyber-blue/60' : 'h-1.5 bg-cyber-blue/30'}`} />
              </div>
            ))}

            {/* Middle Ring */}
            <div className="absolute inset-12 rounded-full border border-robotic-teal/20" />

            {/* Inner Ring */}
            <div className="absolute inset-24 rounded-full border border-cyber-blue/20" />

            {/* Rotating Compass Needle */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="relative w-full h-full">
                {/* Needle pointing up */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-cyber-blue to-transparent" />
                {/* Needle pointing down */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-t from-robotic-teal to-transparent" />
              </div>
            </motion.div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-36 h-36 rounded-full bg-gradient-to-br from-cyber-blue/10 to-robotic-teal/10 glass-card flex items-center justify-center overflow-hidden p-2"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0, 212, 255, 0.3)',
                    '0 0 50px rgba(20, 241, 149, 0.4)',
                    '0 0 30px rgba(0, 212, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img
                  src="/images/main_logo.png"
                  alt="ROS Compass Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>

            {/* Technology Logos around circumference */}
            {/* ROS 2 - Top */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="px-3 py-2 rounded-xl glass-card border border-cyber-blue/30 flex items-center gap-2">
                <img src="/images/ros2_logo.png" alt="ROS 2" className="w-8 h-8 object-contain" />
                <span className="text-cyber-blue font-mono text-sm font-semibold">ROS 2</span>
              </div>
            </motion.div>

            {/* Gazebo - Top Right */}
            <motion.div
              className="absolute top-[15%] right-[5%]"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <div className="px-3 py-2 rounded-xl glass-card border border-robotic-teal/30 flex items-center gap-2">
                <img src="/images/gazebo_logo.png" alt="Gazebo" className="w-8 h-8 object-contain" />
                <span className="text-robotic-teal font-mono text-sm font-semibold">Gazebo</span>
              </div>
            </motion.div>

            {/* Webots - Bottom Right */}
            <motion.div
              className="absolute bottom-[15%] right-[5%]"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
            >
              <div className="px-3 py-2 rounded-xl glass-card border border-cyber-blue/30 flex items-center gap-2">
                <img src="/images/webots_logo.png" alt="Webots" className="w-8 h-8 object-contain" />
                <span className="text-cyber-blue font-mono text-sm font-semibold">Webots</span>
              </div>
            </motion.div>

            {/* Nav2 - Bottom Left */}
            <motion.div
              className="absolute bottom-[15%] left-[5%]"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: 1.5 }}
            >
              <div className="px-3 py-2 rounded-xl glass-card border border-robotic-teal/30 flex items-center gap-2">
                <img src="/images/nav2_logo.png" alt="Nav2" className="w-8 h-8 object-contain" />
                <span className="text-robotic-teal font-mono text-sm font-semibold">Nav2</span>
              </div>
            </motion.div>

            {/* MoveIt2 - Top Left */}
            <motion.div
              className="absolute top-[15%] left-[5%]"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 2 }}
            >
              <div className="px-3 py-2 rounded-xl glass-card border border-cyber-blue/30 flex items-center gap-2">
                <img src="/images/moveit2_logo.png" alt="MoveIt2" className="w-8 h-8 object-contain" />
                <span className="text-cyber-blue font-mono text-sm font-semibold">MoveIt2</span>
              </div>
            </motion.div>

            {/* Compass Direction Indicators */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-cyber-blue/50 font-mono text-xs">N</div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyber-blue/50 font-mono text-xs">S</div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-cyber-blue/50 font-mono text-xs">W</div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-cyber-blue/50 font-mono text-xs">E</div>
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
