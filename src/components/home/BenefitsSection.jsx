import { motion } from 'framer-motion'
import { outdatedPractices } from '../../data/homeContent'
import SectionHeading from '../common/SectionHeading'
import { HiXCircle } from 'react-icons/hi'

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-capline">
        <SectionHeading title="Outdated Dental Billing Practices" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outdatedPractices.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="border border-gray-200 bg-gray-50 p-6"
            >
              <HiXCircle className="mb-3 h-8 w-8 text-red-500" />
              <h3 className="text-xs font-bold uppercase tracking-wide text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
