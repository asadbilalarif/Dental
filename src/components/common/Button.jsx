import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const variants = {
  primary: 'btn-navy shadow-md',
  secondary: 'rounded bg-primary-500 text-white hover:bg-primary-600 shadow-md',
  cyan: 'btn-cyan',
  accent: 'rounded bg-accent text-white hover:bg-accent-hover shadow-md',
  outline:
    'rounded border-2 border-white text-white hover:bg-white hover:text-navy',
  outlineDark:
    'rounded border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white',
  ghost: 'rounded text-primary-600 hover:bg-primary-50',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  size = 'md',
  disabled = false,
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-3.5 text-base font-bold',
  }

  const baseClass = `inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 ${variants[variant]} ${variant === 'primary' || variant === 'cyan' ? '' : sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${sizes[size]}`} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${sizes[size]}`} {...props}>
        {children}
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${sizes[size]}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
