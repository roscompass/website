import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, Loader } from 'lucide-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // In production, replace with actual form submission logic
    console.log('Form submitted:', formData)
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const inputClasses = (field) => `
    w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-300 outline-none
    ${focused === field 
      ? 'border-cyber-blue shadow-[0_0_15px_rgba(0,212,255,0.15)]' 
      : 'border-white/10 hover:border-white/20'
    }
    text-white placeholder-soft-gray/50
  `

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-soft-gray mb-2">
          Name
        </label>
        <div className="relative">
          <User
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              focused === 'name' ? 'text-cyber-blue' : 'text-soft-gray/50'
            }`}
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            placeholder="Your name"
            required
            className={`${inputClasses('name')} pl-12`}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-soft-gray mb-2">
          Email
        </label>
        <div className="relative">
          <Mail
            size={18}
            className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
              focused === 'email' ? 'text-cyber-blue' : 'text-soft-gray/50'
            }`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            placeholder="your@email.com"
            required
            className={`${inputClasses('email')} pl-12`}
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-soft-gray mb-2">
          Project Description
        </label>
        <div className="relative">
          <MessageSquare
            size={18}
            className={`absolute left-4 top-4 transition-colors ${
              focused === 'message' ? 'text-cyber-blue' : 'text-soft-gray/50'
            }`}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            placeholder="Tell me about your robotics project..."
            required
            rows={5}
            className={`${inputClasses('message')} pl-12 resize-none`}
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`
          w-full py-4 px-6 rounded-lg font-semibold text-sm flex items-center justify-center gap-2
          transition-all duration-300 
          ${status === 'success' 
            ? 'bg-robotic-teal text-obsidian' 
            : 'bg-gradient-to-r from-cyber-blue to-robotic-teal text-obsidian hover:shadow-lg hover:shadow-cyber-blue/25'
          }
          disabled:opacity-70 disabled:cursor-not-allowed
        `}
        whileHover={status === 'idle' ? { scale: 1.01 } : {}}
        whileTap={status === 'idle' ? { scale: 0.99 } : {}}
      >
        {status === 'idle' && (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
        {status === 'loading' && (
          <>
            Sending...
            <Loader size={18} className="animate-spin" />
          </>
        )}
        {status === 'success' && (
          <>
            Message Sent!
            <CheckCircle size={18} />
          </>
        )}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
