import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import PageHero from '../layouts/PageHero'
import CTABanner from '../components/common/CTABanner'
import ServiceCard from '../components/services/ServiceCard'
import { getServiceBySlug, services } from '../data/services'
import { ROUTES } from '../constants/routes'

function ServiceContent({ content }) {
  const paragraphs = Array.isArray(content) ? content : [content]

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-gray-600">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} replace />
  }

  const related = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.tagline}
        backgroundImage={service.image}
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <Link to={ROUTES.SERVICES} className="hover:text-primary-600">
              Services
            </Link>
            {' / '}
            <span className="text-navy">{service.shortTitle}</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <Link
            to={ROUTES.SERVICES}
            className="mb-8 inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
          >
            <HiArrowLeft /> Back to Services
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-xl"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy">Overview</h2>
              <div className="mt-4">
                <ServiceContent content={service.content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-capline">
          <h2 className="mb-8 text-2xl font-bold text-navy">Related Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready for ${service.shortTitle}?`}
        subtitle="Get started with a free consultation today."
      />
    </>
  )
}
