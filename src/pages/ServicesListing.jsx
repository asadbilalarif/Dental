import PageHero from '../layouts/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import ServiceCard from '../components/services/ServiceCard'
import CTABanner from '../components/common/CTABanner'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

export default function ServicesListing() {
  return (
    <>
      <PageHero
        title="Grow Your Dental Practice with Capline's Comprehensive Services"
        subtitle="Professional dental billing, credentialing, insurance verification, and more."
        backgroundImage="https://images.unsplash.com/photo-1629909613654-28e377b37d8b?w=1920&q=80"
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <span className="text-navy">Services</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <SectionHeading
            title="Our Professional Services"
            description="End-to-end dental RCM solutions designed to maximize collections and minimize administrative burden."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
