"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  Globe,
  Zap,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Lightbulb,
  Heart,
  Shield,
  TrendingUp,
  Brain,
} from "lucide-react"
import { ProjectFormModal } from "@/components/project-form-modal"
import { trackPageView, trackEvent } from "@/lib/firebase-utils"

export default function AboutPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  useEffect(() => {
    trackPageView("About Page")
  }, [])

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "EliteCrows Infotech was established with a vision to transform businesses through innovative technology solutions.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "First Major Client",
      description:
        "Successfully delivered our first enterprise-level cloud migration project, establishing our reputation in the market.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "AI/ML Division Launch",
      description:
        "Expanded our services to include artificial intelligence and machine learning solutions for business automation.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our services internationally, serving clients across 15 countries with 24/7 support.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Edge Computing Pioneer",
      description:
        "Became a leading provider of edge computing solutions, helping businesses achieve real-time processing capabilities.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description:
        "Established our innovation lab focusing on next-generation technologies including IoT, blockchain, and quantum computing.",
      icon: <Target className="w-6 h-6" />,
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      bio: "15+ years in enterprise software development and cloud architecture. Former tech lead at major Fortune 500 companies.",
      expertise: ["Cloud Architecture", "Enterprise Solutions", "Team Leadership"],
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      bio: "AI/ML expert with PhD in Computer Science. Published researcher in machine learning and edge computing.",
      expertise: ["AI/ML", "Edge Computing", "Research & Development"],
      avatar: "PS",
    },
    {
      name: "Arjun Patel",
      role: "Head of Engineering",
      bio: "Full-stack developer and DevOps specialist. Expert in microservices architecture and cloud-native development.",
      expertise: ["Full-Stack Development", "DevOps", "Microservices"],
      avatar: "AP",
    },
    {
      name: "Sneha Reddy",
      role: "Head of Security",
      bio: "Cybersecurity expert with certifications in ethical hacking and compliance. Specializes in zero-trust architecture.",
      expertise: ["Cybersecurity", "Compliance", "Risk Assessment"],
      avatar: "SR",
    },
  ]

  const values = [
    {
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and encourage creative problem-solving to deliver breakthrough solutions.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-yellow-500",
    },
    {
      title: "Client Success",
      description:
        "Our success is measured by the success of our clients. We go above and beyond to exceed expectations.",
      icon: <Heart className="w-8 h-8" />,
      color: "text-red-500",
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      icon: <Award className="w-8 h-8" />,
      color: "text-blue-500",
    },
    {
      title: "Security & Trust",
      description: "We prioritize security and build trust through transparency, reliability, and ethical practices.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-500",
    },
    {
      title: "Continuous Growth",
      description:
        "We invest in our team's development and stay ahead of technology trends to serve our clients better.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-500",
    },
    {
      title: "Global Impact",
      description:
        "We aim to make a positive impact on businesses worldwide through transformative technology solutions.",
      icon: <Globe className="w-8 h-8" />,
      color: "text-cyan-500",
    },
  ]

  const stats = [
    { label: "Years of Experience", value: "5+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Projects Completed", value: "150+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Happy Clients", value: "100+", icon: <Users className="w-6 h-6" /> },
    { label: "Countries Served", value: "15+", icon: <Globe className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EliteCrows Infotech</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button
                onClick={() => {
                  setIsProjectModalOpen(true)
                  trackEvent("start_project_clicked", { location: "about_header" })
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Project
              </Button>
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
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
          <span className="text-white">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-blue-900/50 border-blue-600 text-blue-300">
              About EliteCrows Infotech
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Innovating the Future of Technology
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              We are a team of passionate technologists dedicated to transforming businesses through cutting-edge
              solutions. Our mission is to bridge the gap between complex technology and business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                onClick={() => {
                  setIsProjectModalOpen(true)
                  trackEvent("start_project_clicked", { location: "about_hero" })
                }}
                className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3"
              >
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              These values guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className={`${value.color} mb-4`}>{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              From a small startup to a global technology partner, here's how we've grown and evolved.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
                >
                  <div className="flex items-center space-x-4 md:w-48 shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      {milestone.icon}
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{milestone.year}</div>
                  </div>
                  <Card className="bg-gray-900/50 border-gray-700 flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Our experienced leadership team brings together decades of expertise in technology and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Located in the heart of Coimbatore's tech hub, our office is designed to foster innovation and
                collaboration.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Office Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-300 text-sm">100, Aththipalaya, Coimbatore, Tamil Nadu, India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-400 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-300 text-sm">+91 63831 06107</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-300 text-sm">elitecrowsindia@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-orange-400 mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-gray-300 text-sm">Saturday: 10:00 AM - 2:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Why Choose EliteCrows?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Proven Track Record</p>
                        <p className="text-gray-300 text-sm">150+ successful projects across various industries</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Expert Team</p>
                        <p className="text-gray-300 text-sm">Certified professionals with deep technical expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">24/7 Support</p>
                        <p className="text-gray-300 text-sm">Round-the-clock support for critical business needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Global Reach</p>
                        <p className="text-gray-300 text-sm">Serving clients across 15+ countries worldwide</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Let's discuss how our innovative technology solutions can drive your business forward and help you achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              onClick={() => {
                setIsProjectModalOpen(true)
                trackEvent("start_project_clicked", { location: "about_cta" })
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +91 63831 06107
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Innovating the future of technology, one solution at a time.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/edge-computing" className="hover:text-white transition-colors">
                    Edge Computing
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
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    Custom Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Contact</h3>
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

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ProjectFormModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} />
    </div>
  )
}
