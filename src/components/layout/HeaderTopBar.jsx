import { HiPhone, HiMail } from 'react-icons/hi'
import Logo from '../common/Logo'
import { SITE_CONFIG } from '../../constants/site'

export default function HeaderTopBar() {
  return (
    <div className="relative border-b border-gray-100 bg-white">
      <div className="container-capline flex items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3">
        <Logo variant="brand" />

        <div className="hidden flex-col items-end gap-1.5 text-sm text-gray-700 md:flex">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 font-medium transition-colors hover:text-primary-600"
          >
            <HiPhone className="h-5 w-5 shrink-0 text-primary-500" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 font-medium transition-colors hover:text-primary-600"
          >
            <HiMail className="h-5 w-5 shrink-0 text-primary-500" />
            {SITE_CONFIG.email}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600"
            aria-label="Call us"
          >
            <HiPhone className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600"
            aria-label="Email us"
          >
            <HiMail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Curved transition into navy nav (desktop) */}
      <div
        className="pointer-events-none absolute -bottom-px right-0 hidden h-10 w-32 bg-navy lg:block"
        style={{ borderTopLeftRadius: '2rem' }}
        aria-hidden
      />
    </div>
  )
}
