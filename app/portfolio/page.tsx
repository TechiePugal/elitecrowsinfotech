"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import {
  ArrowRight,
  ExternalLink,
  Github,
  Star,
  CheckCircle,
  Play,
  Download,
  Eye,
  MessageSquare,
  Search,
  ChevronRight,
  Home,
  Rocket,
} from "lucide-react"
import { ProjectFormModal } from "@/components/project-form-modal"
import { trackPageView, trackEvent } from "@/lib/firebase-utils"

// Portfolio data
const portfolioProjects = [
  {
    id: 1,
    title: "SmartCity IoT Dashboard",
    category: "IoT Solutions",
    type: "Web Application",
    description:
      "Real-time IoT dashboard for smart city management with edge computing integration for traffic, energy, and environmental monitoring.",
    longDescription:
      "A comprehensive smart city management platform that processes real-time data from thousands of IoT sensors across the city. Features include traffic flow optimization, energy consumption monitoring, air quality tracking, and predictive maintenance for city infrastructure.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "AWS IoT", "Docker", "Kubernetes", "TensorFlow"],
    features: [
      "Real-time data processing from 10,000+ IoT sensors",
      "Predictive analytics for traffic optimization",
      "Energy consumption monitoring and optimization",
      "Air quality and environmental tracking",
      "Automated alert system for city officials",
      "Mobile-responsive dashboard for field workers",
    ],
    metrics: {
      users: "50,000+",
      dataPoints: "1M+ daily",
      uptime: "99.9%",
      responseTime: "< 200ms",
    },
    client: "Coimbatore Smart City Initiative",
    duration: "8 months",
    team: "12 developers",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "EliteCrows delivered an exceptional IoT platform that transformed our city management capabilities. The real-time insights have improved our response time by 300%.",
      author: "Dr. Rajesh Kumar",
      position: "Smart City Project Director",
    },
  },
  {
    id: 2,
    title: "AI-Powered Healthcare Analytics",
    category: "AI & Machine Learning",
    type: "SaaS Platform",
    description:
      "Advanced healthcare analytics platform using machine learning for patient diagnosis assistance and hospital resource optimization.",
    longDescription:
      "An AI-driven healthcare platform that assists medical professionals with diagnosis recommendations, predicts patient outcomes, and optimizes hospital resource allocation. The system processes medical imaging, patient records, and real-time vitals to provide actionable insights.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker", "AWS SageMaker"],
    features: [
      "Medical image analysis using computer vision",
      "Predictive patient outcome modeling",
      "Hospital resource optimization algorithms",
      "Real-time patient monitoring dashboard",
      "HIPAA-compliant data handling",
      "Integration with existing hospital systems",
    ],
    metrics: {
      accuracy: "94.5%",
      hospitals: "25+",
      patients: "100,000+",
      timeReduction: "60%",
    },
    client: "Regional Healthcare Network",
    duration: "12 months",
    team: "15 specialists",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "The AI analytics platform has revolutionized our diagnostic process. We've seen a 60% reduction in diagnosis time and improved patient outcomes significantly.",
      author: "Dr. Priya Sharma",
      position: "Chief Medical Officer",
    },
  },
  {
    id: 3,
    title: "Enterprise Cloud Migration Suite",
    category: "Cloud Solutions",
    type: "Enterprise Software",
    description:
      "Comprehensive cloud migration platform for enterprises moving from legacy systems to modern cloud infrastructure.",
    longDescription:
      "A complete cloud migration solution that automates the assessment, planning, and execution of enterprise cloud migrations. Features automated dependency mapping, cost optimization recommendations, and zero-downtime migration strategies.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "Python", "Go", "React", "GraphQL"],
    features: [
      "Automated legacy system assessment",
      "Dependency mapping and analysis",
      "Cost optimization recommendations",
      "Zero-downtime migration strategies",
      "Multi-cloud support (AWS, Azure, GCP)",
      "Real-time migration monitoring",
    ],
    metrics: {
      migrations: "200+",
      costSavings: "40%",
      downtime: "0 hours",
      enterprises: "50+",
    },
    client: "Fortune 500 Manufacturing Company",
    duration: "10 months",
    team: "18 engineers",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "EliteCrows managed our complex cloud migration flawlessly. Zero downtime and 40% cost reduction exceeded all our expectations.",
      author: "Michael Chen",
      position: "CTO, Global Manufacturing Corp",
    },
  },
  {
    id: 4,
    title: "FinTech Security Platform",
    category: "Security Solutions",
    type: "Security Platform",
    description:
      "Advanced cybersecurity platform for financial institutions with real-time threat detection and automated response systems.",
    longDescription:
      "A comprehensive cybersecurity solution designed specifically for financial institutions. Features include real-time fraud detection, automated threat response, compliance monitoring, and advanced encryption for sensitive financial data.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Elasticsearch", "Kafka", "Redis", "React", "Node.js", "Docker", "Kubernetes"],
    features: [
      "Real-time fraud detection algorithms",
      "Automated threat response system",
      "Compliance monitoring (PCI DSS, SOX)",
      "Advanced encryption for financial data",
      "Behavioral analytics for user monitoring",
      "Integration with existing banking systems",
    ],
    metrics: {
      threats: "99.8% blocked",
      responseTime: "< 1 second",
      falsePositives: "< 0.1%",
      institutions: "30+",
    },
    client: "Regional Banking Consortium",
    duration: "14 months",
    team: "20 security experts",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "The security platform has been instrumental in protecting our customers' financial data. The real-time threat detection is unparalleled.",
      author: "Sarah Johnson",
      position: "CISO, Regional Bank",
    },
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    category: "Custom Development",
    type: "Mobile Application",
    description:
      "Feature-rich e-commerce mobile application with AI-powered recommendations and seamless payment integration.",
    longDescription:
      "A modern e-commerce mobile application built with React Native, featuring AI-powered product recommendations, augmented reality try-on features, seamless payment integration, and real-time order tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "AWS", "TensorFlow", "Firebase"],
    features: [
      "AI-powered product recommendations",
      "Augmented reality try-on features",
      "Seamless payment integration",
      "Real-time order tracking",
      "Social commerce features",
      "Multi-language support",
    ],
    metrics: {
      downloads: "500K+",
      rating: "4.8/5",
      conversion: "12.5%",
      retention: "85%",
    },
    client: "Fashion Retail Chain",
    duration: "6 months",
    team: "10 developers",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "The mobile app transformed our retail business. Customer engagement increased by 200% and sales conversion improved significantly.",
      author: "Emily Rodriguez",
      position: "Digital Director, Fashion Retail",
    },
  },
  {
    id: 6,
    title: "Manufacturing IoT Analytics",
    category: "IoT Solutions",
    type: "Industrial Platform",
    description:
      "Industrial IoT platform for manufacturing optimization with predictive maintenance and quality control systems.",
    longDescription:
      "An industrial IoT platform that monitors manufacturing equipment in real-time, predicts maintenance needs, optimizes production schedules, and ensures quality control through advanced sensor integration and machine learning algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "InfluxDB", "Grafana", "MQTT", "Docker", "Kubernetes", "TensorFlow", "React"],
    features: [
      "Real-time equipment monitoring",
      "Predictive maintenance algorithms",
      "Production optimization scheduling",
      "Quality control automation",
      "Energy consumption tracking",
      "Integration with existing MES systems",
    ],
    metrics: {
      efficiency: "+35%",
      downtime: "-70%",
      qualityImprovement: "+25%",
      energySavings: "30%",
    },
    client: "Automotive Manufacturing Plant",
    duration: "9 months",
    team: "14 engineers",
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "#",
    testimonial: {
      text: "The IoT platform revolutionized our manufacturing process. We achieved 35% efficiency improvement and 70% reduction in unplanned downtime.",
      author: "David Kim",
      position: "Plant Manager, Auto Manufacturing",
    },
  },
]

const categories = [
  "All",
  "IoT Solutions",
  "AI & Machine Learning",
  "Cloud Solutions",
  "Security Solutions",
  "Custom Development",
]

const technologies = [
  { name: "React", icon: "⚛️", count: 4 },
  { name: "Node.js", icon: "🟢", count: 3 },
  { name: "Python", icon: "🐍", count: 4 },
  { name: "AWS", icon: "☁️", count: 3 },
  { name: "Docker", icon: "🐳", count: 5 },
  { name: "Kubernetes", icon: "⚙️", count: 4 },
  { name: "TensorFlow", icon: "🧠", count: 3 },
  { name: "MongoDB", icon: "🍃", count: 2 },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  useEffect(() => {
    trackPageView("Portfolio Page")
  }, [])

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleProjectClick = (project: (typeof portfolioProjects)[0]) => {
    setSelectedProject(project)
    trackEvent("portfolio_project_viewed", { project_title: project.title })
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
              <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button onClick={() => setIsProjectModalOpen(true)} className="bg-purple-600 hover:bg-purple-700">
                Start Project
              </Button>
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
          <span className="text-white">Portfolio</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-purple-900/50 border-purple-600 text-purple-300">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Product Development Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Discover our innovative products and solutions that have transformed businesses across industries. From
              IoT platforms to AI-powered applications, we build products that make a difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">150+</div>
                <div className="text-gray-400 text-sm">Products Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-gray-300">{tech.name}</span>
                  <Badge variant="outline" className="text-xs bg-gray-800 border-gray-600">
                    {tech.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-black/50 border-gray-600 text-white">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm mt-1">{project.type}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs bg-gray-800 border-gray-600">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Client</div>
                        <div className="text-white font-medium">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Duration</div>
                        <div className="text-white font-medium">{project.duration}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-4">
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No projects found matching your criteria.</div>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <Button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70"
                size="sm"
              >
                ✕
              </Button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-purple-600 text-white">{selectedProject.category}</Badge>
                    <Badge variant="outline" className="bg-gray-800 border-gray-600">
                      {selectedProject.type}
                    </Badge>
                    <Badge variant="outline" className="bg-green-900 border-green-600 text-green-300">
                      {selectedProject.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{selectedProject.longDescription}</p>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client:</span>
                      <span className="text-white">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{selectedProject.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Team Size:</span>
                      <span className="text-white">{selectedProject.team}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-green-400">{selectedProject.status}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{selectedProject.testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{selectedProject.testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{selectedProject.testimonial.position}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Download className="w-4 h-4 mr-2" />
                  Case Study
                </Button>
                <Button
                  onClick={() => {
                    setSelectedProject(null)
                    setIsProjectModalOpen(true)
                  }}
                  variant="outline"
                  className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Start Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Build Your Next Product?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create innovative solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsProjectModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
              <MessageSquare className="mr-2 w-5 h-5" />
              Schedule Consultation
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
              <p className="text-gray-400 text-sm">Building innovative products that transform businesses.</p>
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
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
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
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>elitecrowsindia@gmail.com</li>
                <li>+91 63831 06107</li>
                <li>Coimbatore, Tamil Nadu</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ProjectFormModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} />
    </div>
  )
}
