import SectionHeading from '../common/SectionHeading'
import ServiceCard from '../services/ServiceCard'
import { homeServices } from '../../data/services'

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-capline">
        <SectionHeading title="We Provide Specialized Services Tailored to Meet Your Needs" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
