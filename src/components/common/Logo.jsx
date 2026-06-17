import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { SITE_CONFIG } from '../../constants/site'

export default function Logo({ variant = 'default', className = '' }) {
  const isBrand = variant === 'brand'

  return (
    <Link to={ROUTES.HOME} className={`inline-flex shrink-0 items-center ${className}`}>
      <span
        className={
          isBrand
            ? 'block h-[4.25rem] w-52 sm:h-20 sm:w-60'
            : 'block h-16 w-44 sm:h-[4.5rem] sm:w-48'
        }
      >
        <img
          src={SITE_CONFIG.logo}
          alt={SITE_CONFIG.name}
          className="h-full w-full origin-left scale-[2.15] object-contain object-left"
        />
      </span>
    </Link>
  )
}
