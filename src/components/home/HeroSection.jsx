import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'
import { ROUTES } from '../../constants/routes'
import { heroSlides } from '../../data/homeContent'

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[current]

  return (
    <section className="relative overflow-hidden bg-hero-light">
      <div className="container-capline">
        <div className="grid min-h-[480px] items-center gap-8 lg:min-h-[520px] lg:grid-cols-2 lg:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.5 }}
              className="py-10 lg:py-16"
            >
              <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                {slide.headline}
                <br />
                <span className="text-primary-600">{slide.headlineAccent}</span>
              </h1>
              {slide.subheadline && (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
                  {slide.subheadline}
                </p>
              )}
              <div className="mt-8">
                <Button to={ROUTES.CONTACT} variant="primary" size="lg">
                  {slide.cta}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative hidden h-[420px] lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative h-full w-full"
              >
                <img
                  src={slide.images[0]}
                  alt=""
                  className="absolute left-0 top-8 h-[320px] w-[55%] rounded-2xl object-cover shadow-xl ring-4 ring-white"
                />
                <img
                  src={slide.images[1]}
                  alt=""
                  className="absolute right-0 top-0 z-10 h-[360px] w-[58%] rounded-2xl object-cover shadow-2xl ring-4 ring-white"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-6 lg:pb-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'w-8 bg-primary-500' : 'w-2 bg-primary-300'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
