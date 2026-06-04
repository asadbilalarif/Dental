import SectionHeading from '../common/SectionHeading'
import BlogCard from '../blog/BlogCard'
import Button from '../common/Button'
import { blogs } from '../../data/blogs'
import { ROUTES } from '../../constants/routes'

export default function BlogSection() {
  const featured = blogs.slice(0, 3)

  return (
    <section className="section-padding">
      <div className="container-capline">
        <SectionHeading title="Blogs" subtitle="Latest Insights" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to={ROUTES.BLOG} variant="outlineDark">
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  )
}
