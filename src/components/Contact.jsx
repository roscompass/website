import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Linkedin, Github, Twitter } from 'lucide-react'
import ContactForm from './ContactForm'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@roscompass.dev',
    href: 'mailto:hello@roscompass.dev',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote / Worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-robotic-teal/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-blue font-mono text-sm tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Unstick</span>
            <span className="text-white"> Your Development?</span>
          </h2>
          <p className="text-soft-gray max-w-xl mx-auto">
            Let's discuss how we can accelerate your robotics project. Whether you need 
            full-stack development or targeted consulting, I'm here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-robotic-teal/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={22} className="text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-soft-gray">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-cyber-blue transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-soft-gray mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-soft-gray hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyber-blue/10 to-robotic-teal/5 border border-cyber-blue/20"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                Prefer a quick call?
              </h3>
              <p className="text-soft-gray text-sm leading-relaxed mb-4">
                Schedule a 30-minute technical discovery call to discuss your project 
                requirements and explore how we can work together.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-cyber-blue font-medium text-sm hover:underline"
                whileHover={{ x: 3 }}
              >
                Schedule a Call →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl glass relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-robotic-teal/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-soft-gray text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
