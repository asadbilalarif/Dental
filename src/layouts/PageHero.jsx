import { motion } from 'framer-motion'
import Button from '../components/common/Button'
import { ROUTES } from '../constants/routes'

export default function PageHero({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
  showCta = true,
  breadcrumbs,
}) {
  return (
    <section className="relative flex min-h-[240px] items-center overflow-hidden bg-hero-light sm:min-h-[280px]">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="container-capline relative z-10 section-padding !py-14 sm:!py-16">
        {breadcrumbs && (
          <nav className="mb-4 text-sm text-primary-700">{breadcrumbs}</nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">{subtitle}</p>
          )}
          {showCta && (
            <div className="mt-8">
              <Button to={ROUTES.CONTACT} variant="primary" size="lg">
                Get Started
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
