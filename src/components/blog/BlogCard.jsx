import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiClock } from 'react-icons/hi'

export default function BlogCard({ post, index = 0 }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <HiClock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-navy line-clamp-2 group-hover:text-primary-600">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-gray-600">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary-600">
            Read More <HiArrowRight />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
