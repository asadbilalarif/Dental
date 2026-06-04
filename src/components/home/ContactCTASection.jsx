import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import ContactForm from '../common/ContactForm'
import { revenueAuditBenefits } from '../../data/homeContent'
import { submitAuditRequest } from '../../services/api'
import { useState } from 'react'
import Button from '../common/Button'

export default function ContactCTASection() {
  const [auditEmail, setAuditEmail] = useState('')
  const [auditStatus, setAuditStatus] = useState('')

  const handleAudit = async (e) => {
    e.preventDefault()
    const result = await submitAuditRequest({ email: auditEmail })
    if (result.success) {
      setAuditStatus(result.data.message)
      setAuditEmail('')
    }
  }

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container-capline">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              We're here to help!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch to know more about us or our services!
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-primary-200 bg-primary-50 p-8 shadow-sm lg:p-10"
          >
            <h3 className="text-2xl font-bold text-navy">
              Is Your Dental Revenue Leaking?
            </h3>
            <p className="mt-4 text-gray-600">
              Many dental practices lose 5–12% of monthly collections due to billing errors, denials, and credentialing delays.
            </p>
            <p className="mt-6 font-semibold text-accent">FREE Dental Revenue Health Check</p>
            <p className="mt-2 text-sm font-semibold text-navy">What You'll Get?</p>
            <ul className="mt-4 space-y-2">
              {revenueAuditBenefits.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <form onSubmit={handleAudit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email for free audit"
                value={auditEmail}
                onChange={(e) => setAuditEmail(e.target.value)}
                className="flex-1 rounded-lg border-0 px-4 py-3 text-navy focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" variant="primary" size="md">
                Get Free Audit
              </Button>
            </form>
            {auditStatus && (
              <p className="mt-3 text-sm text-primary-600">{auditStatus}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
