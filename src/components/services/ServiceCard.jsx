import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaChartLine,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaIdCard,
  FaReceipt,
} from 'react-icons/fa'

const iconMap = {
  billing: FaFileInvoiceDollar,
  verification: FaUserCheck,
  credentialing: FaIdCard,
  patient: FaReceipt,
  'pre-auth': FaClipboardCheck,
  payment: FaMoneyCheckAlt,
  ar: FaChartLine,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || FaFileInvoiceDollar

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex h-full flex-col border border-gray-200 bg-white p-6 transition-shadow hover:border-primary-300 hover:shadow-lg"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-bold text-navy group-hover:text-primary-600">
        {service.shortTitle || service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        {service.excerpt}
      </p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-4 text-sm font-bold uppercase tracking-wide text-primary-600 hover:text-primary-700"
      >
        Read More...
      </Link>
    </motion.article>
  )
}
