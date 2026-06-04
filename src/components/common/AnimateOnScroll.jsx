import { motion } from 'framer-motion'

const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export default function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  as: Component = motion.div,
}) {
  const offset = directions[direction] || directions.up

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Component>
  )
}
