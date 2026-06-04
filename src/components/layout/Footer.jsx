import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import Logo from '../common/Logo'
import { ROUTES, NAV_LINKS } from '../../constants/routes'
import { SITE_CONFIG, PARTNER_STATS } from '../../constants/site'
import { services } from '../../data/services'

const socialIcons = [
  { icon: FaFacebookF, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
  { icon: FaTwitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
  { icon: FaYoutube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="gradient-primary border-b border-primary-400/30">
        <div className="container-capline section-padding text-center">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Partner with Capline and Unlock Success in 6 Months
          </h3>
          <p className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-primary-100 sm:gap-8">
            <span>{PARTNER_STATS.collections}</span>
            <span className="hidden sm:inline">|</span>
            <span>{PARTNER_STATS.costs}</span>
            <span className="hidden sm:inline">|</span>
            <span>{PARTNER_STATS.time}</span>
          </p>
        </div>
      </div>

      <div className="container-capline section-padding">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI-enabled end-to-end dental RCM services. We protect, manage, and accelerate your dental revenue.
            </p>
            <div className="mt-6">
              <h4 className="mb-3 font-semibold text-white">Follow Us For More!</h4>
              <p className="mb-4 text-sm text-gray-400">
                Connect for industry insights, service updates, and tips to optimize your practice.
              </p>
              <div className="flex gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-300"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <HiLocationMarker className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex gap-3 transition-colors hover:text-primary-300"
                >
                  <HiPhone className="h-5 w-5 shrink-0 text-primary-400" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex gap-3 transition-colors hover:text-primary-300"
                >
                  <HiMail className="h-5 w-5 shrink-0 text-primary-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-capline flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
