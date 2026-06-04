import { useParams, Link, Navigate } from 'react-router-dom'
import { HiClock } from 'react-icons/hi'
import PageHero from '../layouts/PageHero'
import BlogCard from '../components/blog/BlogCard'
import CTABanner from '../components/common/CTABanner'
import { getBlogBySlug, blogs } from '../data/blogs'
import { ROUTES } from '../constants/routes'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)

  if (!post) {
    return <Navigate to={ROUTES.BLOG} replace />
  }

  const related = blogs.filter((b) => b.id !== post.id).slice(0, 3)
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${formattedDate} · ${post.readTime}`}
        backgroundImage={post.image}
        showCta={false}
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <Link to={ROUTES.BLOG} className="hover:text-primary-600">
              Blog
            </Link>
            {' / '}
            <span className="text-navy">Article</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <p className="mb-6 text-sm text-gray-500">
            By {post.author} ·{' '}
            <span className="inline-flex items-center gap-1">
              <HiClock className="h-4 w-4" /> {post.readTime}
            </span>
          </p>
          <article
            className="prose prose-lg mx-auto max-w-3xl prose-headings:text-navy prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-capline">
          <h2 className="mb-8 text-2xl font-bold text-navy">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.id} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need Help With Dental Billing?" />
    </>
  )
}
