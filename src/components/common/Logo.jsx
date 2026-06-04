import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import CaplineLogoMark from './CaplineLogoMark'

export default function Logo({ light = false, variant = 'default', className = '' }) {
  const isBrand = variant === 'brand'

  return (
    <Link to={ROUTES.HOME} className={`flex items-center gap-3 ${className}`}>
      <CaplineLogoMark className={isBrand ? 'h-11 w-11 sm:h-12 sm:w-12' : 'h-10 w-10'} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${
            isBrand ? 'text-xl sm:text-2xl' : 'text-lg'
          } ${light ? 'text-white' : 'text-gray-800'}`}
        >
          {isBrand ? 'CAPLINE' : 'Capline'}
        </span>
        <span
          className={`mt-0.5 font-medium uppercase tracking-[0.2em] ${
            isBrand ? 'text-[9px] sm:text-[10px]' : 'text-[10px]'
          } ${light ? 'text-primary-200' : 'text-gray-500'}`}
        >
          Dental Services
        </span>
      </div>
    </Link>
  )
}
