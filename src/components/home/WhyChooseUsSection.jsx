import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBrain,
  FaRobot,
  FaLink,
  FaTooth,
  FaIdCard,
  FaChartLine,
  FaShieldAlt,
} from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { whyChooseItems } from '../../data/homeContent'
import { ROUTES } from '../../constants/routes'

const iconMap = {
  expertise: FaBrain,
  ai: FaRobot,
  integrated: FaLink,
  dentistry: FaTooth,
  credentialing: FaIdCard,
  denials: FaChartLine,
  compliance: FaShieldAlt,
}

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0)
  const activeItem = whyChooseItems[active]
  const Icon = iconMap[activeItem.icon] || FaBrain

  return (
    <section className="section-padding bg-white">
      <div className="container-capline">
        <SectionHeading
          title="Why Choose Capline Dental Services?"
          description="Most dental billing companies focus on just processing claims. At Capline Dental Services, we protect, manage, and accelerate your dental revenue."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-1 lg:col-span-5">
            {whyChooseItems.map((item, index) => {
              const ItemIcon = iconMap[item.icon] || FaBrain
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center gap-3 border-l-4 px-4 py-3.5 text-left transition-all ${
                    active === index
                      ? 'border-primary-500 bg-primary-50 text-navy'
                      : 'border-transparent text-gray-600 hover:border-primary-200 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      active === index
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-primary-600'
                    }`}
                  >
                    <ItemIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-snug">{item.title}</span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 lg:col-span-7 lg:p-10"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-navy lg:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{activeItem.content}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-navy">
          Ready to unlock up to 23% more revenue from your dental practice?
        </p>
        <div className="mt-5 text-center">
          <Button to={ROUTES.CONTACT} variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
