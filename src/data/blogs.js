export const blogs = [
  {
    id: 1,
    slug: 'd6049-dental-code-procedure',
    title: 'D6049 Dental Code - D6049 Procedure Code',
    excerpt:
      'D6049 is a new updated code announced earlier this year. This code covers scaling and the removal of tartar or calculus from a single implant.',
    content: `
      <p>D6049 is a new updated code announced earlier this year. This code covers scaling and the removal of tartar or calculus from a single implant. This usually happens when there is bleeding during a probe, peri-implantitis inflammation, or increased pocket depths, including cleaning of the implant surfaces, without flap entry and closure.</p>
      <p>This procedure should be documented carefully to ensure proper reimbursement. Dental practices should train their clinical and billing teams on when to use D6049 versus related implant maintenance codes.</p>
      <h3>Key Documentation Requirements</h3>
      <ul>
        <li>Clinical notes supporting peri-implantitis or increased pocket depths</li>
        <li>Date of service and provider information</li>
        <li>Correct CDT coding on the claim form</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    author: 'Capline Team',
    date: '2026-01-15',
    category: 'CDT Codes',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'fsa-dental-coverage-eligible',
    title: "FSA Dental Coverage: What's Eligible & What's Not",
    excerpt:
      'How to use FSA dental funds for dental expenses. Learn how a budget-friendly option with a lower contribution limit can protect your expenses.',
    content: `
      <p>Are you struggling to understand how to use the FSA Dental and how to take advantage of it? Money contributed to a flexible spending account for dental is lucrative for both employees and dependents.</p>
      <p>Understanding eligible versus non-eligible expenses helps patients maximize benefits while practices can guide conversations at the front desk.</p>
    `,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    author: 'Capline Team',
    date: '2026-01-10',
    category: 'Patient Billing',
    readTime: '6 min read',
  },
  {
    id: 3,
    slug: 'what-is-a-dso',
    title: 'What is a DSO (Dental Service Organization)?',
    excerpt:
      'What are DSOs, and how are they becoming a trend? DSO numbers are growing as a viable solution to struggling practices.',
    content: `
      <p>What are DSOs, and what is driving this transformation rather than pursuing ownership? DSO numbers are growing; it is a viable solution to struggling practices.</p>
      <p>The evolution of the dental industry has created new operational models. Understanding DSO structure helps billing teams align workflows across multiple locations.</p>
    `,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    author: 'Capline Team',
    date: '2025-12-20',
    category: 'Industry Trends',
    readTime: '7 min read',
  },
  {
    id: 4,
    slug: '2026-limited-purpose-fsa',
    title: '2026 Limited Purpose Flexible Spending Account (LPFSA)',
    excerpt:
      'A guide to the LPFSA limit and managing insights for success as healthcare expenses continue to rise.',
    content: `
      <p>The cost of healthcare expenses is rising, and keeping them as planned isn't easy. A Limited Purpose FSA (LPFSA) is versatile when it comes to paying dental and vision expenses.</p>
      <p>Practices should stay informed on annual limits and communicate clearly with patients about eligible services.</p>
    `,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    author: 'Capline Team',
    date: '2025-12-05',
    category: 'Compliance',
    readTime: '5 min read',
  },
  {
    id: 5,
    slug: 'understanding-locum-tenens-dental-billing',
    title: 'Understanding locum tenens in dental billing',
    excerpt:
      'Locum tenens dentists work at a dental practice temporarily to fill vacant positions. Learn what this means for billing workflows.',
    content: `
      <p>By locum tenens, one would mean dentists who work at a dental practice temporarily to fill vacant positions. Thus, locum tenens can be viewed as dental practitioners contracted to work for a brief period based on the dental practice's requirements.</p>
      <p>Billing teams must ensure provider numbers, taxonomy codes, and payer enrollments align for temporary providers to avoid claim rejections.</p>
    `,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    author: 'Capline Team',
    date: '2025-11-18',
    category: 'Billing Tips',
    readTime: '6 min read',
  },
  {
    id: 6,
    slug: 'reduce-dental-claim-denials',
    title: 'How to Reduce Dental Claim Denials in 2026',
    excerpt:
      'Practical strategies to fix coding errors, documentation gaps, and payer-specific requirements at the source.',
    content: `
      <p>Recurring denials usually point to gaps in the billing process. Fixing issues at the source—coding errors, missing documentation, eligibility mistakes—keeps collections consistent as your practice grows.</p>
    `,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    author: 'Capline Team',
    date: '2025-11-01',
    category: 'RCM',
    readTime: '8 min read',
  },
]

export const getBlogBySlug = (slug) => blogs.find((b) => b.slug === slug)
