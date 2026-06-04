import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone, HiMail, HiSearch } from 'react-icons/hi'
import { FaChevronDown } from 'react-icons/fa'
import HeaderTopBar from './HeaderTopBar'
import ServicesMegaMenu from './ServicesMegaMenu'
import ResourcesMenu from './ResourcesMenu'
import { NAV_LINKS, ROUTES } from '../../constants/routes'
import { SITE_CONFIG } from '../../constants/site'
import { services } from '../../data/services'

const navLinkClass = ({ isActive }) =>
  `whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
    isActive
      ? 'text-primary-300'
      : 'text-white/90 hover:text-white'
  }`

const navButtonClass =
  'flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white xl:px-3.5'

export default function Header({ hideTopBar = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        hideTopBar ? 'shadow-xl' : ''
      }`}
    >
      <motion.div
        initial={false}
        animate={{
          maxHeight: hideTopBar ? 0 : 120,
          opacity: hideTopBar ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
        aria-hidden={hideTopBar}
      >
        <HeaderTopBar />
      </motion.div>

      <div
        className="relative bg-navy"
        onMouseLeave={() => {
          setMegaOpen(false)
          setResourcesOpen(false)
        }}
      >
        <nav className="container-capline relative flex items-center justify-between gap-2 px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
          </button>

          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) =>
              link.hasMegaMenu ? (
                <li
                  key={link.path}
                  onMouseEnter={() => {
                    setMegaOpen(true)
                    setResourcesOpen(false)
                  }}
                >
                  <button
                    type="button"
                    className={`${navButtonClass} ${
                      megaOpen
                        ? 'rounded border border-white/90 bg-white/10 text-white'
                        : ''
                    }`}
                    onClick={() => setMegaOpen(!megaOpen)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </li>
              ) : link.hasResourcesMenu ? (
                <li
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    setResourcesOpen(true)
                    setMegaOpen(false)
                  }}
                >
                  <button
                    type="button"
                    className={navButtonClass}
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                  >
                    {link.label}
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <ResourcesMenu isOpen={resourcesOpen} onClose={() => setResourcesOpen(false)} />
                </li>
              ) : link.path.includes('#') ? (
                <li key={link.path}>
                  <a href={link.path} className={navButtonClass}>
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.path}>
                  <NavLink to={link.path} className={navLinkClass}>
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://www.caplinemedicalbilling.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
            >
              Medical Billing
            </a>
            <Link to={ROUTES.CONTACT} className="btn-cyan">
              Free Consultation
            </Link>
            <Link
              to={ROUTES.BLOG}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10"
              aria-label="Search blog"
            >
              <HiSearch className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-white"
              aria-label="Call"
            >
              <HiPhone className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <ServicesMegaMenu
          isOpen={megaOpen}
          onClose={() => setMegaOpen(false)}
          hideTopBar={hideTopBar}
        />

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
            >
              <ul className="flex flex-col gap-0.5 px-4 py-4">
                {NAV_LINKS.map((link) =>
                  link.hasMegaMenu ? (
                    <li key={link.path}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-white"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {link.label}
                        <FaChevronDown
                          className={`h-3 w-3 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <ul className="ml-4 border-l-2 border-white/20 pl-4">
                          {services.map((s) => (
                            <li key={s.id}>
                              <Link
                                to={`/services/${s.slug}`}
                                className="block py-2 text-sm text-gray-300"
                                onClick={closeMobile}
                              >
                                {s.shortTitle}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              to={ROUTES.SERVICES}
                              className="block py-2 text-sm font-semibold text-primary-300"
                              onClick={closeMobile}
                            >
                              All Services
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  ) : link.hasResourcesMenu ? (
                    <li key={link.path}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-white"
                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      >
                        {link.label}
                        <FaChevronDown
                          className={`h-3 w-3 ${mobileResourcesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileResourcesOpen && (
                        <ul className="ml-4 border-l-2 border-white/20 pl-4">
                          <li>
                            <a
                              href="/#resources"
                              className="block py-2 text-sm text-gray-300"
                              onClick={closeMobile}
                            >
                              Free RCM Resources
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  ) : link.path.includes('#') ? (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className="block rounded-lg px-4 py-3 font-medium text-white"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        className="block rounded-lg px-4 py-3 font-medium text-white"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  )
                )}
                <li className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <a
                    href="https://www.caplinemedicalbilling.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyan w-full justify-center py-3"
                  >
                    Medical Billing
                  </a>
                  <Link
                    to={ROUTES.CONTACT}
                    className="btn-cyan w-full justify-center py-3"
                    onClick={closeMobile}
                  >
                    Free Consultation
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center justify-center gap-2 py-3 text-sm text-primary-300"
                  >
                    <HiMail /> {SITE_CONFIG.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
