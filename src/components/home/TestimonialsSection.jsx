import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import SectionHeading from '../common/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[index]

  const goTo = (dir) => {
    setIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section id="testimonials" className="section-padding scroll-mt-36">
      <div className="container-capline">
        <SectionHeading title="Testimonials" subtitle="Client Reviews" />

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100 sm:p-12"
            >
              <FaQuoteLeft className="h-10 w-10 text-primary-200" />
              <p className="mt-6 text-lg leading-relaxed text-gray-700 italic">
                "{current.text}"
              </p>
              <div className="mt-6 flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-accent" />
                ))}
              </div>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="font-bold text-navy">{current.name}</p>
                <p className="text-sm text-gray-500">{current.role}</p>
                <p className="text-sm text-primary-500">{current.date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo('prev')}
              className="rounded-full bg-primary-100 p-3 text-primary-600 transition-colors hover:bg-primary-200"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary-500' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo('next')}
              className="rounded-full bg-primary-100 p-3 text-primary-600 transition-colors hover:bg-primary-200"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
