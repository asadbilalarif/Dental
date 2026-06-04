import { useState } from 'react'
import PageHero from '../layouts/PageHero'
import BlogCard from '../components/blog/BlogCard'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

const categories = ['All', ...new Set(blogs.map((b) => b.category))]

export default function BlogListing() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? blogs : blogs.filter((b) => b.category === filter)

  return (
    <>
      <PageHero
        title="Dental RCM Blog & Insights"
        subtitle="Stay updated with CDT codes, billing tips, and industry trends."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
        showCta={false}
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <span className="text-navy">Blog</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
