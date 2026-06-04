import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import ServicesListing from '../pages/ServicesListing'
import ServiceDetail from '../pages/ServiceDetail'
import BlogListing from '../pages/BlogListing'
import BlogDetail from '../pages/BlogDetail'
import Contact from '../pages/Contact'
import { ROUTES } from '../constants/routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.ABOUT.slice(1), element: <About /> },
      { path: ROUTES.SERVICES.slice(1), element: <ServicesListing /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: ROUTES.BLOG.slice(1), element: <BlogListing /> },
      { path: 'blog/:slug', element: <BlogDetail /> },
      { path: ROUTES.CONTACT.slice(1), element: <Contact /> },
    ],
  },
])
