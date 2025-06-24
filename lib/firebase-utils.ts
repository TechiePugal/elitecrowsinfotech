export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  timeline?: string
  message: string
}

export interface ProjectFormData {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: string
  budget?: string
  timeline?: string
  description: string
  features: string[]
}

export const submitContactForm = async (formData: ContactFormData) => {
  // In a real application, you would send this data to a server
  // to be processed and stored in a database.
  console.log("Contact form submitted:", formData)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export const submitProjectInquiry = async (formData: ProjectFormData) => {
  // In a real application, you would send this data to a server
  // to be processed and stored in a database.
  console.log("Project inquiry submitted:", formData)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export const trackPageView = (pageName: string) => {
  // In a real application, you would use a service like Google Analytics
  // to track page views.
  console.log("Page view tracked:", pageName)
}

export const trackEvent = (eventName: string, eventParams: any) => {
  // In a real application, you would use a service like Google Analytics
  // to track events.
  console.log("Event tracked:", eventName, eventParams)
}
