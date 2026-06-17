import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../../data/services'
import { ROUTES } from '../../constants/routes'
import { MEGA_MENU_TOP } from '../../constants/layout'
import { HiArrowRight } from 'react-icons/hi'

/** Primary services shown in nav dropdown */
const navDropdownServices = services.slice(0, 4)

export default function ServicesMegaMenu({ isOpen, onClose, hideTopBar = false }) {
  const panelTop = hideTopBar ? MEGA_MENU_TOP.navOnly : MEGA_MENU_TOP.withTopBar

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed left-0 right-0 bottom-0 z-40 bg-black/30 ${panelTop}`}
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-50 border-t-4 border-primary-400 bg-white shadow-2xl ${panelTop}`}
            role="menu"
          >
            <div className="container-capline px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
                {navDropdownServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    onClick={onClose}
                    role="menuitem"
                    className="group flex min-h-[120px] flex-col border-b border-gray-100 p-5 transition-colors hover:bg-primary-50 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:min-h-[140px] lg:p-6"
                  >
                    <div className="mb-4 h-20 w-full overflow-hidden rounded-md bg-gray-100 sm:h-24">
                      <img
                        src={service.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-base font-bold leading-snug text-navy group-hover:text-primary-600">
                      {service.shortTitle}
                    </h4>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
                      {service.excerpt}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-2 flex justify-center border-t border-gray-200 pt-5 lg:mt-4">
                <Link
                  to={ROUTES.SERVICES}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary-600 transition-colors hover:text-primary-700"
                >
                  View All Services
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
