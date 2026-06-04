import { motion } from 'framer-motion'
import { statistics } from '../../data/homeContent'
import { useCounter } from '../../hooks/useCounter'

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2000)

  return (
    <motion.div ref={ref} className="text-center text-white">
      <div className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-primary-100 sm:text-base">
        {label}
      </p>
    </motion.div>
  )
}

export default function StatisticsSection() {
  return (
    <section className="gradient-stats py-10 sm:py-12">
      <div className="container-capline px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statistics.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
