import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import SectionHeading from '../common/SectionHeading'
import { trustedServices } from '../../data/homeContent'

function Column({ title, items, headerBg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
    >
      <h3 className={`px-5 py-4 text-base font-bold text-white ${headerBg}`}>{title}</h3>
      <ul className="space-y-2.5 p-5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-gray-700">
            <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function TrustedServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-capline">
        <SectionHeading title="Trusted Services for Dental Offices" />
        <div className="grid gap-6 lg:grid-cols-3">
          <Column
            title="What You Get on Choosing Us?"
            items={trustedServices.whatYouGet}
            headerBg="bg-primary-600"
          />
          <Column
            title="Helping Dental Offices Solve Problems Like"
            items={trustedServices.problemsSolved}
            headerBg="bg-navy"
          />
          <Column
            title="Why Capline Dental Services?"
            items={trustedServices.whyCapline}
            headerBg="bg-primary-500"
          />
        </div>
      </div>
    </section>
  )
}
