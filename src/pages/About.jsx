import { motion } from 'framer-motion'
import {
  HiChartBar,
  HiCog,
  HiInformationCircle,
  HiSupport,
  HiUserGroup,
} from 'react-icons/hi'
import PageHero from '../layouts/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTABanner from '../components/common/CTABanner'
import TestimonialsSection from '../components/home/TestimonialsSection'
import { aboutContent } from '../data/homeContent'
import { SITE_CONFIG } from '../constants/site'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

const sectionIcons = {
  overview: HiInformationCircle,
  team: HiUserGroup,
  process: HiCog,
  reporting: HiChartBar,
  'dedicated-support': HiSupport,
}

export default function About() {
  const [overview, ...otherSections] = aboutContent.sections

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
              <SectionHeading align="left" title={overview.title} />
              <p className="text-lg leading-relaxed text-gray-600">{overview.content}</p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={aboutContent.teamImage}
              alt={`${aboutContent.heroSubtitle} team`}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-capline">
          <div className="grid gap-8 md:grid-cols-2">
            {otherSections.map((section, index) => {
              const Icon = sectionIcons[section.id] || HiInformationCircle

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-navy">{section.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    {section.content}
                    {section.cta && (
                      <>
                        {' '}
                        {section.cta.split('{{phone}}')[0]}
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="font-semibold text-primary-600 hover:underline"
                        >
                          {SITE_CONFIG.phoneDisplay}
                        </a>
                        {section.cta.split('{{phone}}')[1]}
                      </>
                    )}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner
        title="Ready to Partner with NUMCARE-RCM?"
        subtitle="Connect with our team to learn how we can support your practice growth."
      />
    </>
  )
}
