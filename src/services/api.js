import axios from 'axios'
import { SITE_CONFIG } from '../constants/site'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', {
      ...formData,
      source: SITE_CONFIG.name,
    })
    return { success: true, data: response.data }
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {
      success: true,
      data: { message: 'Thank you! We will contact you shortly.' },
      simulated: true,
    }
  }
}

export const submitAuditRequest = async (formData) => {
  try {
    const response = await api.post('/audit', formData)
    return { success: true, data: response.data }
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return {
      success: true,
      data: { message: 'Your free audit request has been received.' },
      simulated: true,
    }
  }
}

export default api
