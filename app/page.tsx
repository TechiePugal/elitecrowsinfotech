"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Brain,
  Code,
  Shield,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Target,
  Globe,
  Star,
  Rocket,
  Play,
  Menu,
  X,
  Cloud,
  Cpu,
  Wifi,
  Loader2,
} from "lucide-react"
import { ProjectFormModal } from "@/components/project-form-modal"
import { submitContactForm, trackPageView, trackEvent, type ContactFormData } from "@/lib/firebase-utils"
import { Logo } from "@/components/logo"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

// Floating Particles Background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

// Tech Stack Carousel
function TechStackCarousel() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll space-x-4 sm:space-x-8">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-xl sm:text-2xl">{tech.icon}</span>
            <span className="text-gray-300 text-sm sm:text-base">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Interactive Stats Dashboard
function StatsDashboard() {
  const stats = [
    {
      label: "Projects Completed",
      value: 150,
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-blue-500",
    },
    {
      label: "Client Satisfaction",
      value: 99,
      suffix: "%",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-green-500",
    },
    { label: "Team Members", value: 25, icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, color: "text-purple-500" },
    {
      label: "Countries Served",
      value: 15,
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group"
        >
          <CardContent className="p-4 sm:p-6 text-center">
            <div
              className={`${stat.color} mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Client Testimonials Carousel
function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content:
        "EliteCrows transformed our legacy system into a modern, scalable cloud architecture. Their expertise in edge computing helped us reduce latency by 70%.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder, DataFlow Solutions",
      content:
        "The AI automation solutions they built for us increased our operational efficiency by 300%. Exceptional team with deep technical knowledge.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, CloudTech",
      content:
        "Outstanding custom software development. They delivered a complex IoT platform ahead of schedule and under budget. Highly recommended!",
      rating: 5,
      avatar: "ER",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative">
      <Card className="bg-gray-900/50 border-gray-700 min-h-[200px]">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-base sm:text-lg text-gray-300 mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
              {testimonials[currentTestimonial].avatar}
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-400 text-xs sm:text-sm">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentTestimonial ? "bg-blue-600" : "bg-gray-600"
            }`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Mobile Navigation
function MobileNav({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-gray-700 p-6">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold">Menu</span>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <nav className="space-y-4">
          <Link href="/services/edge-computing" className="block text-gray-300 hover:text-white transition-colors py-2">
            Edge Computing
          </Link>
          <Link href="/services/ai-ml" className="block text-gray-300 hover:text-white transition-colors py-2">
            AI & ML
          </Link>
          <Link href="/services/cloud" className="block text-gray-300 hover:text-white transition-colors py-2">
            Cloud Solutions
          </Link>
          <Link href="/services/custom" className="block text-gray-300 hover:text-white transition-colors py-2">
            Custom Development
          </Link>
          <Link href="/services/security" className="block text-gray-300 hover:text-white transition-colors py-2">
            Security
          </Link>
          <Link href="/services/iot" className="block text-gray-300 hover:text-white transition-colors py-2">
            IoT Solutions
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-white transition-colors py-2">
            About
          </Link>
          <Link href="/portfolio" className="block text-gray-300 hover:text-white transition-colors py-2">
            Portfolio
          </Link>
          <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors py-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formData)
      trackEvent("contact_form_submitted", {
        service: formData.service,
      })
      setIsSubmitted(true)
      setFormData({ name: "", email: "", service: "", message: "" })
    } catch (error) {
      console.error("Error submitting contact form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700">
        <CardContent className="p-6 sm:p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-gray-300 mb-4">We've received your message and will get back to you within 24 hours.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Start Your Project</CardTitle>
        <CardDescription className="text-gray-400">
          Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name *</label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
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
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Service Interest</label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
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
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Project Details *</label>
            <Textarea
              placeholder="Tell us about your project requirements, challenges, and goals..."
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px] focus:border-blue-500"
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
                Sending...
              </>
            ) : (
              <>
                Send Message & Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  useEffect(() => {
    trackPageView("Home Page")

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "Edge Computing Solutions",
      description:
        "Real-time IoT data processing, Edge AI & analytics, Low-latency infrastructure for mission-critical applications",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "blue",
      href: "/services/edge-computing",
      features: ["Sub-millisecond latency", "Real-time processing", "Distributed computing", "Edge AI integration"],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Business process automation, Predictive analytics, NLP for chatbots, Computer vision for smart applications",
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "purple",
      href: "/services/ai-ml",
      features: ["Predictive analytics", "Process automation", "Computer vision", "Natural language processing"],
    },
    {
      title: "Cloud Integration & Migration",
      description:
        "Multi-cloud strategies (AWS, Azure, GCP), Cloud modernization, Cost optimization & cloud-native development",
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "green",
      href: "/services/cloud",
      features: ["Multi-cloud strategy", "Cost optimization", "Cloud migration", "Serverless architecture"],
    },
    {
      title: "Custom Business Applications",
      description:
        "ERP/CRM tailored solutions, Automation tools, API integration & microservices, UX/UI with business impact",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "orange",
      href: "/services/custom",
      features: ["Custom ERP/CRM", "API integration", "Microservices", "Modern UI/UX"],
    },
    {
      title: "Security-Focused Development",
      description: "Secure app architecture, Data privacy best practices (GDPR, HIPAA), Threat detection & mitigation",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "red",
      href: "/services/security",
      features: ["Zero-trust architecture", "Compliance (GDPR, HIPAA)", "Threat detection", "Security audits"],
    },
    {
      title: "IoT Solutions",
      description: "Smart city applications, Manufacturing IoT, Retail analytics, Connected device management",
      icon: <Wifi className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "cyan",
      href: "/services/iot",
      features: ["Smart city solutions", "Industrial IoT", "Device management", "Real-time analytics"],
    },
  ]

  const colorClasses = {
    blue: "border-blue-600 hover:border-blue-500 bg-blue-600",
    purple: "border-purple-600 hover:border-purple-500 bg-purple-600",
    green: "border-green-600 hover:border-green-500 bg-green-600",
    orange: "border-orange-600 hover:border-orange-500 bg-orange-600",
    red: "border-red-600 hover:border-red-500 bg-red-600",
    cyan: "border-cyan-600 hover:border-cyan-500 bg-cyan-600",
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingParticles />

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo noLink showText={false} />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                EliteCrows Infotech
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    <Link
                      href="/services/edge-computing"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      Edge Computing
                    </Link>
                    <Link
                      href="/services/ai-ml"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      AI & Machine Learning
                    </Link>
                    <Link
                      href="/services/cloud"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      Cloud Solutions
                    </Link>
                    <Link
                      href="/services/custom"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      Custom Development
                    </Link>
                    <Link
                      href="/services/security"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      Security Solutions
                    </Link>
                    <Link
                      href="/services/iot"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded"
                    >
                      IoT Solutions
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
              <Button
                onClick={() => {
                  setIsProjectModalOpen(true)
                  trackEvent("start_project_clicked", { location: "header" })
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Project
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileNavOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-4 h-full">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-700 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-6xl mt-20 mx-auto">
            <Badge
              variant="outline"
              className="mb-10 sm:mb-12 bg-gray-900/50 border-gray-700 text-gray-300 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg animate-bounce"
            >
              🚀 Next-Gen Technology Solutions
            </Badge>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                Innovation
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Meets
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-3xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
              Transforming businesses with cutting-edge{" "}
              <span className="text-blue-400 font-semibold">Edge Computing</span>,{" "}
              <span className="text-purple-400 font-semibold">AI Integration</span>,{" "}
              <span className="text-cyan-400 font-semibold">Cloud Solutions</span> &{" "}
              <span className="text-green-400 font-semibold">Custom Enterprise Software</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
              <Button
                size="lg"
                onClick={() => {
                  setIsProjectModalOpen(true)
                  trackEvent("start_project_clicked", { location: "hero" })
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                Watch Demo
              </Button>
            </div>

            {/* Tech Stack Showcase */}
            <div className="mb-12 sm:mb-16">
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">Powered by cutting-edge technologies</p>
              <TechStackCarousel />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-16 sm:py-32 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 bg-gray-900/50 border-gray-700 text-gray-300">
              Our Expertise
            </Badge>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Comprehensive Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              From concept to deployment, we deliver end-to-end technology solutions that drive innovation and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-gray-900 border-gray-800 ${colorClasses[service.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(" ")[1]} transition-all duration-300 group hover:scale-105`}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClasses[service.color as keyof typeof colorClasses].split(" ")[2]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-16 sm:py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>
          <StatsDashboard />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="portfolio" className="py-16 sm:py-32 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 bg-gray-900/50 border-gray-700 text-gray-300">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What Clients Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 sm:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <Badge variant="outline" className="mb-4 sm:mb-6 bg-gray-900/50 border-gray-700 text-gray-300">
                Let's Connect
              </Badge>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Start Your Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Ready to transform your business with cutting-edge technology? Let's discuss your vision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base">Email Us</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">elitecrowsindia@gmail.com</p>
                      <Badge variant="outline" className="text-xs">
                        24/7 Response
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-600/30 hover:border-green-500/50 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base">Call Us</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">+91 63831 06107</p>
                      <Badge variant="outline" className="text-xs">
                        Business Hours
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-600/30">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Visit Our Office</h3>
                        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                          100, Aththipalaya, Coimbatore, TN, India
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            Mon-Fri 9AM-6PM
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            IST Timezone
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
  <footer className="py-12 sm:py-16 px-4 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-2">
            <Logo className="mb-4 sm:mb-6" />
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Empowering businesses through innovative technology solutions. We transform complex challenges into
              simple, scalable solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/services/edge-computing" className="hover:text-white transition-colors">
                  Edge Computing
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/custom" className="hover:text-white transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="hover:text-white transition-colors">
                  Security Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/iot" className="hover:text-white transition-colors">
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/Terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
 

      <ProjectFormModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} />
    </div>
  )
}
