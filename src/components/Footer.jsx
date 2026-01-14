import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@roscompass.dev', label: 'Email' },
]

function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-2 text-xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/images/main_logo.png"
                alt="ROS Compass Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span>
                ROS <span className="gradient-text">Compass</span>
              </span>
            </motion.a>
            <p className="text-soft-gray text-sm leading-relaxed max-w-xs">
              Production-grade ROS engineering and simulation services for the robotics industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-soft-gray hover:text-cyber-blue transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-soft-gray hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-soft-gray text-sm">
              <a href="mailto:hello@roscompass.dev" className="hover:text-cyber-blue transition-colors">
                hello@roscompass.dev
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-soft-gray text-sm">
            © {new Date().getFullYear()} ROS Startup Compass. All rights reserved.
          </p>
          <p className="text-soft-gray text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-robotic-teal" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
