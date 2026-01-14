import { motion } from 'framer-motion'
import { Code2, Cpu, Server, GitBranch, Terminal } from 'lucide-react'

const skills = [
  { name: 'ROS 2', icon: Code2 },
  { name: 'C++', icon: Terminal },
  { name: 'Python', icon: Code2 },
  { name: 'Linux', icon: Server },
  { name: 'Docker', icon: Cpu },
  { name: 'Git', icon: GitBranch },
]

function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Placeholder Image Container */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-4 rounded-2xl border border-cyber-blue/20 -rotate-6" />
              <div className="absolute inset-4 rounded-2xl border border-robotic-teal/20 rotate-3" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card aspect-square flex items-center justify-center">
                {/* Placeholder Content */}
                <div className="text-center p-8">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-cyber-blue/30 to-robotic-teal/30 mx-auto mb-6 flex items-center justify-center"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(0, 212, 255, 0.4)',
                        '0 0 0 20px rgba(0, 212, 255, 0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-5xl">🤖</span>
                  </motion.div>
                  <p className="text-soft-gray text-sm">
                    [ Your headshot here ]
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-robotic-teal animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Available for Projects
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-cyber-blue font-mono text-sm tracking-wider uppercase">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                <span className="text-white">The Engineer</span>
                <br />
                <span className="gradient-text">Behind the Stack</span>
              </h2>
            </div>

            <div className="space-y-4 text-soft-gray leading-relaxed">
              <p>
                I believe robotics is <span className="text-white font-medium">10% hardware and 90% reliable middleware</span>. 
                My goal is to build ROS architectures that are as stable in the field as they are in simulation.
              </p>
              <p>
                With years of experience in production robotics systems, I've learned that the difference 
                between a demo and a deployed solution comes down to robust architecture, thorough testing, 
                and maintainable code.
              </p>
              <p>
                Whether you're building your first robot or scaling a fleet, I'm here to help you 
                navigate the complexities of ROS 2 development and get your project from prototype to production.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Core Technologies
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl glass-card hover:border-cyber-blue/30 transition-all cursor-default"
                  >
                    <skill.icon size={20} className="text-cyber-blue" />
                    <span className="text-xs text-soft-gray font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Delivered' },
                { number: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-soft-gray mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
