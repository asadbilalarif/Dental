import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaComments } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { SITE_CONFIG } from '../../constants/site'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

export default function FloatingContactWidget() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-100"
          >
            <div className="gradient-primary px-5 py-4 text-white">
              <p className="font-semibold">Need Help?</p>
              <p className="text-sm text-primary-100">Talk to our dental RCM experts</p>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 rounded-xl bg-primary-50 px-4 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-100"
              >
                <FaPhone className="text-primary-500" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                to={ROUTES.CONTACT}
                className="flex items-center gap-3 rounded-xl bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-hover transition-colors hover:bg-accent/20"
                onClick={() => setExpanded(false)}
              >
                <FaComments className="text-accent" />
                Contact Form
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/40 transition-shadow hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact options"
      >
        {expanded ? <HiX className="h-6 w-6" /> : <FaPhone className="h-5 w-5" />}
      </motion.button>
    </div>
  )
}
