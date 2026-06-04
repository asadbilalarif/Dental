import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import SectionHeading from '../common/SectionHeading'
import { instagramPosts } from '../../data/homeContent'
import { SITE_CONFIG } from '../../constants/site'

export default function InstagramSection() {
  const [index, setIndex] = useState(0)
  const post = instagramPosts[index]

  const next = () => setIndex((i) => (i + 1) % instagramPosts.length)
  const prev = () => setIndex((i) => (i - 1 + instagramPosts.length) % instagramPosts.length)

  return (
    <section className="section-padding bg-white">
      <div className="container-capline">
        <SectionHeading
          title="Follow Us For More!"
          description="Connect with us on our social media handles for industry insights, service updates, and tips to optimize your healthcare practice."
        />

        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
            >
              <div className="grid md:grid-cols-2">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="h-64 w-full object-cover md:h-full"
                />
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <FaInstagram className="h-8 w-8 text-pink-600" />
                    <p className="mt-4 text-gray-700 leading-relaxed">{post.caption}</p>
                    <p className="mt-3 text-sm text-gray-500">{post.date}</p>
                  </div>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-bold text-primary-600 hover:underline"
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-primary-100 p-2 text-primary-600 hover:bg-primary-200"
              aria-label="Previous post"
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>
            <span className="text-sm font-medium text-gray-600">
              {index + 1} / {instagramPosts.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-primary-100 p-2 text-primary-600 hover:bg-primary-200"
              aria-label="Next post"
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
