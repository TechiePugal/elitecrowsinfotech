"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Logo } from "@/components/logo"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Loader2,
  Calendar,
  Video,
  Headphones,
  ChevronRight,
  Home,
  Award,
  Zap,
} from "lucide-react"
import { submitContactForm, trackPageView, trackEvent, type ContactFormData } from "@/lib/firebase-utils"

// Contact methods data
const contactMethods = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "Get in touch via email for detailed discussions",
    contact: "elitecrowsindia@gmail.com",
    availability: "24/7 Response",
    color: "blue",
    action: "mailto:elitecrowsindia@gmail.com",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+91 63831 06107",
    availability: "Mon-Fri 9AM-6PM IST",
    color: "green",
    action: "tel:+916383106107",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "WhatsApp",
    description: "Quick chat for immediate assistance",
    contact: "+91 63831 06107",
    availability: "Mon-Fri 9AM-9PM IST",
    color: "emerald",
    action: "https://wa.me/916383106107",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Call",
    description: "Schedule a video consultation",
    contact: "Book Meeting",
    availability: "By Appointment",
    color: "purple",
    action: "#",
  },
]

// Office locations
const offices = [
  {
    city: "Coimbatore",
    country: "India",
    address: "100, Aththipalaya, Coimbatore, Tamil Nadu, India",
    phone: "+91 63831 06107",
    email: "elitecrowsindia@gmail.com",
    hours: "Mon-Fri: 9AM-6PM IST",
    isHeadquarters: true,
  },
]

// FAQ data
const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in Edge Computing, AI & Machine Learning, Cloud Solutions, Custom Software Development, Security Solutions, and IoT platforms.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple applications take 2-3 months, while enterprise solutions can take 6-12 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients globally. We have experience working across different time zones and have delivered projects to clients in North America, Europe, and Asia.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow Agile methodology with regular sprints, continuous integration, and client feedback loops. Our process includes discovery, design, development, testing, and deployment phases.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and technical support. We have different support packages to suit various needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We maintain quality through code reviews, automated testing, continuous integration, security audits, and performance optimization. All projects undergo rigorous testing before deployment.",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  useEffect(() => {
    trackPageView("Contact Page")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      trackEvent("contact_form_submitted", {
        service: formData.service,
        budget: formData.budget,
      })
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting contact form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Home className="w-4 h-4" />
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Contact</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-blue-900/50 border-blue-600 text-blue-300">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
              turn your vision into reality. Get in touch and let's start your digital transformation journey.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">99%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're available through multiple channels to ensure you can reach us in the way that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-${method.color}-900/20 to-${method.color}-800/10 border-${method.color}-600/30 hover:border-${method.color}-500/50 transition-all duration-300 group cursor-pointer`}
                onClick={() => {
                  if (
                    method.action.startsWith("http") ||
                    method.action.startsWith("mailto") ||
                    method.action.startsWith("tel")
                  ) {
                    window.open(method.action, "_blank")
                  }
                  trackEvent("contact_method_clicked", { method: method.title })
                }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`text-${method.color}-400 mb-4 flex justify-center group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <p className="text-white font-medium mb-2">{method.contact}</p>
                  <Badge variant="outline" className="text-xs">
                    {method.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form and Info */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below with your project details, and we'll get back to you within 24 hours with a
                detailed proposal.
              </p>

              {isSubmitted ? (
                <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-600/30">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      We've received your message and will get back to you within 24 hours with a detailed response.
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                      <p>✓ Your inquiry has been logged</p>
                      <p>✓ Our team has been notified</p>
                      <p>✓ You'll receive a confirmation email shortly</p>
                    </div>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-green-600 hover:bg-green-700">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Full Name *</label>
                          <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email Address *</label>
                          <Input
                            placeholder="john@company.com"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone Number</label>
                          <Input
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Company Name</label>
                          <Input
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Service Interest *</label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleInputChange("service", value)}
                          >
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                              <SelectValue placeholder="Select primary service" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="edge-computing">Edge Computing Solutions</SelectItem>
                              <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                              <SelectItem value="cloud">Cloud Integration & Migration</SelectItem>
                              <SelectItem value="custom-apps">Custom Business Applications</SelectItem>
                              <SelectItem value="security">Security Solutions</SelectItem>
                              <SelectItem value="iot">IoT Solutions</SelectItem>
                              <SelectItem value="consultation">Technology Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Project Budget</label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="under-10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-25k">₹10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">₹25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">₹50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-plus">₹100,000+</SelectItem>
                              <SelectItem value="discuss">Let's Discuss</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Project Timeline</label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleInputChange("timeline", value)}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                            <SelectValue placeholder="When do you need this completed?" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                            <SelectItem value="flexible">Flexible timeline</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Project Details *</label>
                        <Textarea
                          placeholder="Tell us about your project requirements, challenges, goals, and any specific features you need..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[150px] focus:border-blue-500"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message & Get Free Consultation
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Office</h3>
                {offices.map((office, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-700 mb-6">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-lg">
                              {office.city}, {office.country}
                            </h4>
                            {office.isHeadquarters && (
                              <Badge className="bg-blue-600 text-white text-xs">Headquarters</Badge>
                            )}
                          </div>
                          <p className="text-gray-400 mb-3">{office.address}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{office.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{office.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-300">{office.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose EliteCrows?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Team</h4>
                      <p className="text-gray-400 text-sm">25+ experienced developers and technology specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Proven Track Record</h4>
                      <p className="text-gray-400 text-sm">150+ successful projects with 99% client satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cutting-Edge Technology</h4>
                      <p className="text-gray-400 text-sm">Latest technologies and best practices in development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-gray-400 text-sm">Round-the-clock support and maintenance services</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 justify-start"
                    onClick={() => window.open("tel:+916383106107", "_self")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +91 63831 06107
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-800 justify-start"
                    onClick={() => window.open("https://wa.me/916383106107", "_blank")}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-800 justify-start"
                    onClick={() => window.open("mailto:elitecrowsindia@gmail.com", "_blank")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-400 hover:bg-purple-900/20 justify-start"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">Get answers to common questions about our services and process.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedFaq === index ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait! Get in touch today and let's discuss how we can help transform your business with innovative
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              onClick={() => window.open("tel:+916383106107", "_self")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3"
              onClick={() => window.open("mailto:elitecrowsindia@gmail.com", "_blank")}
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 text-sm mb-4">
                Transforming businesses with innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  Twitter
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    IoT Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    AI & ML
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>elitecrowsindia@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 63831 06107</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Coimbatore, Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
