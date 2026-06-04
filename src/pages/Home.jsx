import HeroSection from '../components/home/HeroSection'
import StatisticsSection from '../components/home/StatisticsSection'
import ServicesSection from '../components/home/ServicesSection'
import TrustedServicesSection from '../components/home/TrustedServicesSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import GetStartedStrip from '../components/home/GetStartedStrip'
import BillingProcessSection from '../components/home/BillingProcessSection'
import CTABanner from '../components/common/CTABanner'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BenefitsSection from '../components/home/BenefitsSection'
import ResourcesSection from '../components/home/ResourcesSection'
import BlogSection from '../components/home/BlogSection'
import InstagramSection from '../components/home/InstagramSection'
import ContactCTASection from '../components/home/ContactCTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <TrustedServicesSection />
      <WhyChooseUsSection />
      <GetStartedStrip />
      <BillingProcessSection />
      <CTABanner />
      <TestimonialsSection />
      <BenefitsSection />
      <ResourcesSection />
      <BlogSection />
      <InstagramSection />
      <ContactCTASection />
    </>
  )
}
