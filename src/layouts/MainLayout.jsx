import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingContactWidget from '../components/layout/FloatingContactWidget'
import RevenueAuditBar from '../components/layout/RevenueAuditBar'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { TOP_BAR_HIDE_THRESHOLD, MAIN_PADDING } from '../constants/layout'

export default function MainLayout() {
  const hideTopBar = useScrollPosition(TOP_BAR_HIDE_THRESHOLD)

  return (
    <div className="flex min-h-screen flex-col">
      <Header hideTopBar={hideTopBar} />
      <main
        className={`flex-1 transition-[padding] duration-300 ease-in-out ${
          hideTopBar ? MAIN_PADDING.navOnly : MAIN_PADDING.withTopBar
        }`}
      >
        <Outlet />
      </main>
      <Footer />
      <FloatingContactWidget />
      <RevenueAuditBar />
      <ScrollRestoration />
    </div>
  )
}
