import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import PageHero from '../layouts/PageHero'
import ContactForm from '../components/common/ContactForm'
import { SITE_CONFIG } from '../constants/site'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import ContactCTASection from '../components/home/ContactCTASection'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to know more about us or our services!"
        showCta={false}
        breadcrumbs={
          <span>
            <Link to={ROUTES.HOME} className="hover:text-primary-600">
              Home
            </Link>
            {' / '}
            <span className="text-navy">Contact Us</span>
          </span>
        }
      />

      <section className="section-padding">
        <div className="container-capline">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-navy">{SITE_CONFIG.name}</h2>
              <p className="mt-4 text-gray-600">
                We're here to help your practice thrive. Reach out for billing, credentialing, or insurance verification support.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiLocationMarker className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Address</p>
                    <p className="text-gray-600">{SITE_CONFIG.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-primary-600 hover:underline"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-primary-600 hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiClock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Business Hours</p>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM CST</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <p className="font-semibold text-navy">Follow Us</p>
                <div className="mt-4 flex gap-3">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-100"
            >
              <h3 className="text-xl font-bold text-navy">Send Us a Message</h3>
              <p className="mt-2 text-gray-600">Fill out the form and we'll get back to you shortly.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
            <iframe
              title={`${SITE_CONFIG.name} Location`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d-95.3!3d29.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjlCsDU0JzAwLjAiTiA5NcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  )
}
