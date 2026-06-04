import Button from '../common/Button'
import { ROUTES } from '../../constants/routes'

export default function GetStartedStrip() {
  return (
    <section className="bg-navy py-8">
      <div className="container-capline flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl">Get Started</h2>
        <Button to={ROUTES.CONTACT} variant="cyan" size="md">
          Get Started
        </Button>
      </div>
    </section>
  )
}
