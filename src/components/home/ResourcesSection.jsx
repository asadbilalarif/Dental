import { motion } from 'framer-motion'
import { FaFileDownload, FaListAlt, FaClipboardList, FaCheckDouble } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { resources } from '../../data/homeContent'

const iconMap = {
  codes: FaListAlt,
  insurance: FaClipboardList,
  form: FaFileDownload,
  eligibility: FaCheckDouble,
}

export default function ResourcesSection() {
  const firstRow = resources.slice(0, 2)
  const secondRow = resources.slice(2, 4)

  const ResourceGrid = ({ items }) => (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((resource, index) => {
        const Icon = iconMap[resource.icon] || FaFileDownload
        return (
          <motion.a
            key={resource.title}
            href={resource.link}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex items-start gap-4 border border-gray-200 bg-white p-5 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white group-hover:bg-navy">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-navy group-hover:text-primary-600">
                {resource.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
              <span className="mt-2 inline-block text-xs font-bold uppercase text-primary-600">
                Download →
              </span>
            </div>
          </motion.a>
        )
      })}
    </div>
  )

  return (
    <section id="resources" className="section-padding scroll-mt-36 bg-gray-50">
      <div className="container-capline space-y-10">
        <div>
          <SectionHeading title="Free Dental RCM Resources" />
          <ResourceGrid items={firstRow} />
        </div>
        <div>
          <SectionHeading title="Free Dental RCM Resources" />
          <ResourceGrid items={secondRow} />
        </div>
      </div>
    </section>
  )
}
