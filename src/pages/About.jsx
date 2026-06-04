import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import PageHero from '../layouts/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTABanner from '../components/common/CTABanner'
import TestimonialsSection from '../components/home/TestimonialsSection'
import { aboutContent } from '../data/homeContent'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

export default function About() {
  return (
    <>
      <PageHero
        title={aboutContent.heroTitle}
        subtitle={aboutContent.heroSubtitle}
        backgroundImage={aboutContent.teamImage}
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <span className="text-navy">About Us</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                align="left"
                subtitle="Who We Are"
                title="Protecting & Accelerating Your Dental Revenue"
              />
              <p className="text-lg leading-relaxed text-gray-600">{aboutContent.mission}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{aboutContent.vision}</p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={aboutContent.teamImage}
              alt="Capline Dental Services team"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-capline">
          <SectionHeading title="Our Core Values" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100"
              >
                <HiCheckCircle className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-capline">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: '800+', label: 'Clients Served' },
              { stat: '12+', label: 'Years Experience' },
              { stat: 'HIPAA', label: 'Compliant Workflows' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl gradient-primary p-8 text-center text-white"
              >
                <p className="text-4xl font-bold">{item.stat}</p>
                <p className="mt-2 text-primary-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner
        title="Ready to Partner with Capline?"
        subtitle="Join hundreds of dental practices that trust us with their revenue cycle."
      />
    </>
  )
}
