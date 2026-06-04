export const ROUTES = {
  HOME: '/',
  ABOUT: '/about-us',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:slug',
  BLOG: '/blog',
  BLOG_DETAIL: '/blog/:slug',
  CONTACT: '/contact-us',
  PRICING: '/contact-us',
  TESTIMONIALS: '/#testimonials',
  RESOURCES: '/#resources',
}

export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About Us', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES, hasMegaMenu: true },
  { label: 'Pricing', path: ROUTES.PRICING },
  { label: 'Blog', path: ROUTES.BLOG },
  { label: 'Resources', path: ROUTES.RESOURCES, hasResourcesMenu: true },
  { label: 'Testimonials', path: ROUTES.TESTIMONIALS },
  { label: 'Contact Us', path: ROUTES.CONTACT },
]
