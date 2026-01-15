import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Code, Navigation, MessageSquare, X, ArrowRight, ChevronDown } from 'lucide-react'

// Detailed content for each service
const servicesData = [
  {
    icon: Box,
    title: 'Rapid Prototyping & Virtual Commissioning',
    description: 'Bridge the gap between hardware concept and functional reality. We build high-fidelity virtual environments to validate logic before a single part is ordered.',
    subPoints: ['URDF/Xacro Modeling', 'Sensor Integration', 'Gazebo/Isaac Sim'],
    expandedContent: {
      sections: [
        {
          heading: 'What We Simulate',
          items: [
            { icon: '✅', title: 'Physics-Rich Environments', desc: 'Complex interactions in Gazebo (Ignition) or NVIDIA Isaac Sim, including friction, gravity, and sensor noise models.' },
            { icon: '✅', title: 'Sensor Suites', desc: 'Realistic data streams from LiDARs (Velodyne, Ouster), Depth Cameras (Realsense), IMUs, and GPS.' },
            { icon: '✅', title: 'Actuator Dynamics', desc: 'Accurate modeling of joint limits, torque constraints, and motor controller responses.' },
          ]
        },
        {
          heading: 'Key Deliverables',
          items: [
            { title: 'URDF/Xacro Robot Description', desc: 'Clean, modular, and visually accurate robot models ready for Rviz and simulation.' },
            { title: 'Task Verification Scenarios', desc: 'Scripted environments to test specific robot behaviors (e.g., "navigate diverse terrain," "pick-and-place challenge").' },
            { title: 'Sim-to-Real Pipeline', desc: 'Documentation and configuration to ensure code developed in simulation runs on real hardware with minimal changes.' },
          ]
        }
      ],
      ctaText: 'Start Your Virtual Proof-of-Concept',
      hookText: 'Ready to validate your robot concept before bending metal?'
    }
  },
  {
    icon: Code,
    title: 'Specialized ROS Module Development',
    description: 'Expert outsourcing for specific subsections of your robot project. Clean, documented, and tested nodes.',
    subPoints: ['Custom CV Pipelines', 'Nav2 Planners', 'Trajectory Execution'],
    expandedContent: {
      sections: [
        {
          heading: 'Domain Expertise',
          items: [
            { icon: '👁️', title: 'Computer Vision & Perception', desc: 'Custom OpenCV pipelines for feature tracking and visual servoing. Deep Learning integration (YOLO/PyTorch) within ROS nodes for object detection. 3D Point Cloud processing (PCL) for segmentation and obstacle identification.' },
            { icon: '🧠', title: 'Custom Logic & State Machines', desc: 'Robust behavior modeling using BehaviorTree.CPP or FlexBE. Fault-tolerant state machines for mission-critical operations.' },
          ]
        },
        {
          heading: 'Our Code Promise',
          items: [
            { title: 'Modern C++ / Python 3', desc: 'Strictly typed, highly efficient code following ROS 2 style guidelines.' },
            { title: 'Fully Documented', desc: 'Doxygen-style comments and clear READMEs for easy handoff to your team.' },
            { title: 'Unit Tested', desc: 'Delivered with pytest or gtest suites to ensure reliability.' },
          ]
        }
      ],
      ctaText: 'Discuss Your Module Needs',
      hookText: 'Need a specific, high-performance ROS node built for your stack?'
    }
  },
  {
    icon: Navigation,
    title: 'Advanced Autonomy Stacks (Nav2 & MoveIt2)',
    description: "Specializing in the configuration and fine-tuning of the industry's most robust frameworks.",
    subPoints: ['Behavior Trees', '6-DOF Collision Avoidance', 'ROS1 to ROS2 Migration'],
    expandedContent: {
      sections: [
        {
          heading: 'Nav2 (Mobile Robotics) Services',
          items: [
            { title: 'Costmap Tuning', desc: 'Optimizing inflation layers and obstacle marking for specific environments (warehouses, crowded spaces, outdoors).' },
            { title: 'Controller Optimization', desc: 'Fine-tuning DWB, TEB, or MPC local planners for smooth, jerk-free motion.' },
            { title: 'Recovery Behaviors', desc: 'Custom logic to handle robots getting stuck or lost without human intervention.' },
          ]
        },
        {
          heading: 'MoveIt2 (Manipulation) Services',
          items: [
            { title: 'Trajectory Execution', desc: 'Ensuring smooth, collision-free path planning for 6+ DOF arms.' },
            { title: 'Perception Integration', desc: 'Setting up Octomaps for dynamic obstacle avoidance during arm movement.' },
            { title: 'Custom Kinematics', desc: 'Integrating solvers like IKFast or TRAC-IK for difficult workspace constraints.' },
          ]
        }
      ],
      ctaText: 'Get Expert Stack Tuning',
      hookText: 'Struggling with unreliable navigation or complex motion planning?'
    }
  },
  {
    icon: MessageSquare,
    title: 'Technical Advisory & Strategy',
    description: 'High-level consultation to ensure your architecture is scalable and future-proof.',
    subPoints: ['Hardware Selection', 'Stack Audits', 'Architecture Design'],
    expandedContent: {
      sections: [
        {
          heading: 'Strategic Engagements',
          items: [
            { icon: '🕵️', title: 'The ROS Stack Audit', desc: 'A 1-week deep dive into your existing codebase to identify latency bottlenecks, reliability risks, and deviations from best practices.' },
            { icon: '🗺️', title: 'Architecture Roadmap Design', desc: 'Defining the node structure, DDS configuration, and communication patterns for scalable multi-robot systems.' },
          ]
        },
        {
          heading: 'Hardware & Integration Advisory',
          items: [
            { title: 'Compute Selection', desc: 'Unbiased advice on choosing Jetson, Intel NUC, or FPGA-based solutions based on your computational load.' },
            { title: 'Sensor Vetting', desc: 'Helping you select the right LiDAR, camera, or IMU that has reliable ROS 2 driver support.' },
            { title: 'ROS 1 to ROS 2 Migration Planning', desc: 'A phased, risk-mitigated approach to upgrading legacy systems to ROS 2 Humble/Jazzy.' },
          ]
        }
      ],
      ctaText: 'Schedule an Architecture Review',
      hookText: 'Unsure about your ROS architecture or facing scaling issues?'
    }
  },
]

// Service Card Component
function ServiceCard({ service, index, isExpanded, onClick }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative p-6 rounded-2xl glass-card overflow-hidden cursor-pointer transition-all duration-300 ${isExpanded ? 'border-cyber-blue/50 bg-cyber-blue/5' : 'hover:border-cyber-blue/50'
        }`}
    >
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-br from-cyber-blue/5 to-robotic-teal/5 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`} />

      {/* Top Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/10 flex items-center justify-center mb-4 transition-all ${isExpanded ? 'shadow-lg shadow-cyber-blue/20' : 'group-hover:shadow-lg group-hover:shadow-cyber-blue/20'
              }`}>
              <Icon size={24} className="text-cyber-blue" />
            </div>

            {/* Title */}
            <h3 className={`text-xl font-semibold mb-3 transition-colors ${isExpanded ? 'text-cyber-blue' : 'text-white group-hover:text-cyber-blue'
              }`}>
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-soft-gray text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Sub-points */}
            <div className="flex flex-wrap gap-2">
              {service.subPoints.map((point, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-soft-gray border border-white/5"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-soft-gray"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Expanded Content Component
function ExpandedContent({ service, onClose }) {
  const contentRef = useRef(null)

  const scrollToContact = () => {
    onClose()
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <motion.div
      ref={contentRef}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="overflow-hidden col-span-full"
    >
      <div className="p-6 rounded-2xl glass-card border border-cyber-blue/30 mt-4">
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-soft-gray hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.expandedContent.sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h4 className="text-sm font-semibold text-robotic-teal uppercase tracking-wider mb-4">
                {section.heading}
              </h4>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="flex items-start gap-3">
                      {item.icon && (
                        <span className="text-lg">{item.icon}</span>
                      )}
                      <div>
                        <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                        <p className="text-soft-gray text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-soft-gray text-sm">
            🚀 {service.expandedContent.hookText}
          </p>
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-robotic-teal text-obsidian font-semibold rounded-lg whitespace-nowrap text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {service.expandedContent.ctaText}
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Main Services Component
function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const expandedRef = useRef(null)
  const servicesGridRef = useRef(null)

  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  // Scroll to expanded content when it opens
  useEffect(() => {
    if (expandedIndex !== null && expandedRef.current) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }, [expandedIndex])

  // Close when clicking outside the services grid
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expandedIndex !== null && servicesGridRef.current && !servicesGridRef.current.contains(event.target)) {
        setExpandedIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [expandedIndex])

  // Determine which row the expanded card is in (for 2-column layout)
  const getExpandedRow = () => {
    if (expandedIndex === null) return -1
    return Math.floor(expandedIndex / 2)
  }

  const expandedRow = getExpandedRow()

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

        {/* Services Grid with Dynamic Expansion */}
        <div ref={servicesGridRef} className="grid md:grid-cols-2 gap-6">
          {/* Row 0: Cards 0 and 1 */}
          <ServiceCard
            service={servicesData[0]}
            index={0}
            isExpanded={expandedIndex === 0}
            onClick={() => handleCardClick(0)}
          />
          <ServiceCard
            service={servicesData[1]}
            index={1}
            isExpanded={expandedIndex === 1}
            onClick={() => handleCardClick(1)}
          />

          {/* Expanded content for Row 0 */}
          <AnimatePresence>
            {expandedRow === 0 && (
              <div ref={expandedRef} className="col-span-full">
                <ExpandedContent
                  service={servicesData[expandedIndex]}
                  onClose={() => setExpandedIndex(null)}
                />
              </div>
            )}
          </AnimatePresence>

          {/* Row 1: Cards 2 and 3 */}
          <ServiceCard
            service={servicesData[2]}
            index={2}
            isExpanded={expandedIndex === 2}
            onClick={() => handleCardClick(2)}
          />
          <ServiceCard
            service={servicesData[3]}
            index={3}
            isExpanded={expandedIndex === 3}
            onClick={() => handleCardClick(3)}
          />

          {/* Expanded content for Row 1 */}
          <AnimatePresence>
            {expandedRow === 1 && (
              <div ref={expandedRef} className="col-span-full">
                <ExpandedContent
                  service={servicesData[expandedIndex]}
                  onClose={() => setExpandedIndex(null)}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Services
