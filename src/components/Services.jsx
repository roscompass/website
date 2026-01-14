import { motion } from 'framer-motion'
import { Box, Code, Navigation, MessageSquare } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Box,
    title: 'Rapid Prototyping & Virtual Commissioning',
    description:
      'Bridge the gap between hardware concept and functional reality. We build high-fidelity virtual environments to validate logic before a single part is ordered.',
    subPoints: ['URDF/Xacro Modeling', 'Sensor Integration', 'Gazebo/Isaac Sim'],
  },
  {
    icon: Code,
    title: 'Specialized ROS Module Development',
    description:
      'Expert outsourcing for specific subsections of your robot project. Clean, documented, and tested nodes.',
    subPoints: ['Custom CV Pipelines', 'Nav2 Planners', 'Trajectory Execution'],
  },
  {
    icon: Navigation,
    title: 'Advanced Autonomy Stacks (Nav2 & MoveIt2)',
    description:
      "Specializing in the configuration and fine-tuning of the industry's most robust frameworks.",
    subPoints: ['Behavior Trees', '6-DOF Collision Avoidance', 'ROS1 to ROS2 Migration'],
  },
  {
    icon: MessageSquare,
    title: 'Technical Advisory & Strategy',
    description:
      'High-level consultation to ensure your architecture is scalable and future-proof.',
    subPoints: ['Hardware Selection', 'Stack Audits', 'Architecture Design'],
  },
]

function Services() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-blue font-mono text-sm tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Engineering </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-soft-gray max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end ROS engineering
            solutions tailored to your robotics project.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              subPoints={service.subPoints}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
