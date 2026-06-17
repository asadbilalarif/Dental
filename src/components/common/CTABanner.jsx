import { motion } from 'framer-motion'
import Button from './Button'
import { ROUTES } from '../../constants/routes'

export default function CTABanner({
  title = 'Ready to Grow Your Dental Practice 3x?',
  subtitle,
  primaryCta = 'Get Started',
  secondaryCta = 'Schedule Free Consultation',
  className = '',
}) {
  return (
    <section className={`section-padding bg-navy ${className}`}>
      <div className="container-capline">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to={ROUTES.CONTACT} variant="cyan" size="lg">
              {primaryCta}
            </Button>
            {secondaryCta && (
              <Button
                to={ROUTES.CONTACT}
                variant="outline"
                size="lg"
                className="!border-white"
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
