import { motion } from 'framer-motion'
import {
  FaRobot,
  FaClock,
  FaCode,
  FaSmile,
  FaHeart,
} from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { billingApproach } from '../../data/homeContent'

const stepIcons = [FaRobot, FaClock, FaCode, FaSmile, FaHeart]

export default function BillingProcessSection() {
  return (
    <section className="section-padding bg-hero-light">
      <div className="container-capline">
        <SectionHeading title="NUMCARE-RCM Ultimate Dental Billing Approach" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {billingApproach.map((step, index) => {
            const Icon = stepIcons[index] || FaRobot
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="border-t-4 border-primary-500 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold uppercase leading-snug text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
