import { motion } from 'framer-motion'

function ServiceCard({ icon: Icon, title, description, subPoints, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-6 rounded-2xl glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyber-blue/50"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyber-blue/5 to-robotic-teal/5" />
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/10 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyber-blue/20 transition-all">
          <Icon size={24} className="text-cyber-blue" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyber-blue transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-soft-gray text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Sub-points */}
        <div className="flex flex-wrap gap-2">
          {subPoints.map((point, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-soft-gray border border-white/5"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
