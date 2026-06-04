import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { resources } from '../../data/homeContent'

export default function ResourcesMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute left-0 top-full z-50 min-w-[280px] rounded-b-xl border border-white/10 bg-navy-light py-3 shadow-xl"
          onMouseLeave={onClose}
        >
          {resources.map((item) => (
            <Link
              key={item.title}
              to="/#resources"
              onClick={onClose}
              className="block px-5 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
