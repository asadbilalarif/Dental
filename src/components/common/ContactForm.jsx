import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { submitContactForm } from '../../services/api'

const initialState = {
  name: '',
  email: '',
  phone: '',
  practice: '',
  message: '',
}

export default function ContactForm({ compact = false, onSuccess }) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    const result = await submitContactForm(form)

    setLoading(false)
    if (result.success) {
      setStatus({ type: 'success', message: result.data.message })
      setForm(initialState)
      onSuccess?.()
    } else {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-navy placeholder-gray-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="practice"
          placeholder="Practice Name"
          value={form.practice}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        placeholder="How can we help you?"
        rows={compact ? 4 : 5}
        value={form.message}
        onChange={handleChange}
        className={inputClass}
      />
      {status.message && (
        <p
          className={`text-sm font-medium ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {status.message}
        </p>
      )}
      <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? 'Sending...' : 'Submit'}
      </Button>
    </motion.form>
  )
}
