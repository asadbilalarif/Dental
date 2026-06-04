export const services = [
  {
    id: 'billing-collection',
    slug: 'dental-insurance-billing-collection',
    title: 'Dental Insurance Billing & Collection',
    shortTitle: 'Billing & Collection',
    excerpt:
      'We excel at recovering your lost revenue. Our experts take care of your unpaid accounts while you take care of your patients.',
    description:
      'Simplify dental insurance billing and collections, ensuring efficient financial management for dental practices. Our professional billing team decongests your unpaid claims with timely follow-ups and payment posting.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    icon: 'billing',
    features: [
      'Clean claims submission',
      'Regular follow-ups on unpaid claims',
      'Timely payment posting',
      'Denial management and appeals',
      'Monthly customized reports',
    ],
  },
  {
    id: 'eligibility-verification',
    slug: 'dental-insurance-verification',
    title: 'Dental Insurance Verification',
    shortTitle: 'Eligibility Verification',
    excerpt:
      'Transform patient experiences with swift Eligibility Verification. Free your front office to focus on welcoming patients.',
    description:
      'Effortlessly verify dental insurance coverage with our streamlined services, ensuring smooth administrative processes and fewer claim denials due to eligibility gaps.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    icon: 'verification',
    features: [
      'Real-time eligibility checks',
      'Benefit breakdown for patients',
      'Pre-visit verification workflows',
      'Reduced front-desk workload',
      'Fewer eligibility-related denials',
    ],
  },
  {
    id: 'credentialing',
    slug: 'dental-credentialing',
    title: 'Dental Credentialing',
    shortTitle: 'Credentialing',
    excerpt:
      'Let Capline help you get your credentialing applications processed faster in accordance with all regulations.',
    description:
      'Simplify your dental practice with our credentialing services, ensuring hassle-free compliance, CAQH profile maintenance, and smooth operations for providers.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    icon: 'credentialing',
    features: [
      'New provider credentialing',
      'Re-credentialing management',
      'CAQH profile updates',
      'Payer follow-up',
      'Bi-weekly progress reports',
    ],
  },
  {
    id: 'patient-statement',
    slug: 'dental-patient-billing',
    title: 'Dental Patient Billing',
    shortTitle: 'Patient Statement',
    excerpt:
      'Capline specializes in generating easy-to-understand dental patient statements to inform patients about their due balance.',
    description:
      'Streamline dental patient billing with our efficient services, ensuring seamless financial transactions and enhanced patient experience.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377b37d8b?w=800&q=80',
    icon: 'patient',
    features: [
      'Clear patient statements',
      'Payment plan support',
      'Patient balance follow-up',
      'Improved patient communication',
      'Reduced billing confusion',
    ],
  },
  {
    id: 'content-writing',
    slug: 'content-writing-services',
    title: 'Content Writing Services',
    shortTitle: 'Content Writing',
    excerpt:
      'Enhance your online presence with informative, relevant, and quality-assured dental content.',
    description:
      'Enhance your online presence and curate content that is informative, relevant and quality-assured for your dental practice marketing.',
    image: 'https://images.unsplash.com/photo-1455390576242-844a8ef05b45?w=800&q=80',
    icon: 'content',
    features: [
      'Blog and article writing',
      'Website copy',
      'SEO-optimized content',
      'Patient education materials',
      'Social media content',
    ],
  },
  {
    id: 'medicaid-roster',
    slug: 'medicaid-roster-analysis',
    title: 'Medicaid Roster Analysis',
    shortTitle: 'Medicaid Roster',
    excerpt:
      'Efficient Medicaid roster analysis for dental practices, simplifying patient assignment management.',
    description:
      'Efficient Medicaid roster analysis for dental practices, simplifying patient assignment management and compliance.',
    image: 'https://images.unsplash.com/photo-1519494026894-80bbd2d6fd69?w=800&q=80',
    icon: 'medicaid',
    features: [
      'Roster compliance review',
      'Patient assignment optimization',
      'Medicaid workflow support',
      'Reporting and analytics',
    ],
  },
  {
    id: 'claim-validation',
    slug: 'claim-validation-tool',
    title: 'Claim Validation Tool',
    shortTitle: 'Claim Validation',
    excerpt:
      'Streamline claim validation with our efficient tool, ensuring accuracy for dental providers.',
    description:
      'Streamline claim validation with our efficient tool, ensuring accuracy and simplifying the process for dental providers before submission.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    icon: 'validation',
    features: [
      'Pre-submission claim checks',
      'Coding error detection',
      'Documentation gap flags',
      'AI-driven pattern analysis',
    ],
  },
]

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug)

export const homeServices = services.slice(0, 4)
