import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import Button from '../common/Button'
import { revenueAuditBenefits } from '../../data/homeContent'
import { submitAuditRequest } from '../../services/api'

export default function RevenueAuditBar() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) setVisible(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await submitAuditRequest({ email })
    if (result.success) {
      setStatus(result.data.message)
      setEmail('')
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t-4 border-accent bg-navy shadow-2xl"
        >
          <div className="container-capline px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="text-left"
                >
                  <p className="text-sm font-bold uppercase text-accent">
                    Free Dental Revenue Health Check
                  </p>
                  <p className="text-sm text-white">
                    Is Your Dental Revenue Leaking? Many practices lose 5–12% monthly.
                  </p>
                </button>
                {expanded && (
                  <div className="mt-3 max-h-40 overflow-y-auto">
                    <p className="text-xs font-semibold text-primary-200">What You'll Get?</p>
                    <ul className="mt-1 grid gap-1 sm:grid-cols-2">
                      {revenueAuditBenefits.map((item) => (
                        <li key={item} className="text-xs text-gray-300">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <form onSubmit={handleSubmit} className="mt-3 flex flex-wrap gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="min-w-[200px] flex-1 rounded border-0 px-3 py-2 text-sm text-navy"
                      />
                      <Button type="submit" variant="accent" size="sm">
                        Get your Free Audit
                      </Button>
                    </form>
                    {status && <p className="mt-2 text-xs text-primary-200">{status}</p>}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="shrink-0 text-white/70 hover:text-white"
                aria-label="Dismiss"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
