import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Zap,
  Smartphone,
  Globe,
  Database,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Users,
  ShoppingCart,
  Building,
  Cog,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Software Development | ERP CRM Solutions | EliteCrows Infotech",
  description:
    "Custom business applications, ERP/CRM solutions, web & mobile app development, API integration, and microservices architecture. Tailored software for your unique business needs.",
  keywords:
    "custom software development, ERP development, CRM solutions, web application development, mobile app development, API integration, microservices, business automation",
  openGraph: {
    title: "Custom Software Development | EliteCrows Infotech",
    description:
      "ERP/CRM tailored solutions, Automation tools, API integration & microservices, UX/UI with business impact",
    url: "https://www.elitecrows.com/services/custom",
  },
}

export default function CustomPage() {
  const solutions = [
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive ERP solutions to streamline your business operations and improve efficiency",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Financial Management",
        "Inventory Control",
        "Human Resources",
        "Supply Chain Management",
        "Reporting & Analytics",
        "Multi-location Support",
      ],
      benefits: "40% operational efficiency increase",
      industries: ["Manufacturing", "Retail", "Healthcare", "Education"],
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Powerful CRM systems to manage customer relationships and drive sales growth",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Customer Support",
        "Marketing Automation",
        "Analytics & Reporting",
        "Mobile Access",
      ],
      benefits: "35% sales increase",
      industries: ["Sales", "Marketing", "Real Estate", "Insurance"],
    },
    {
      title: "E-commerce Platforms",
      description: "Custom e-commerce solutions with advanced features for online business success",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Product Catalog",
        "Payment Gateway",
        "Order Management",
        "Inventory Sync",
        "Multi-vendor Support",
        "Mobile Commerce",
      ],
      benefits: "50% conversion rate improvement",
      industries: ["Retail", "Fashion", "Electronics", "Food & Beverage"],
    },
    {
      title: "Business Process Automation",
      description: "Automate repetitive tasks and workflows to improve productivity and reduce errors",
      icon: <Cog className="w-8 h-8" />,
      features: [
        "Workflow Automation",
        "Document Management",
        "Approval Processes",
        "Integration Hub",
        "Real-time Monitoring",
        "Custom Dashboards",
      ],
      benefits: "60% time savings",
      industries: ["Finance", "Legal", "Healthcare", "Government"],
    },
  ]

  const technologies = [
    { name: "React & Next.js", proficiency: 98, category: "Frontend" },
    { name: "Node.js & Express", proficiency: 96, category: "Backend" },
    { name: "Python & Django", proficiency: 94, category: "Backend" },
    { name: "React Native", proficiency: 92, category: "Mobile" },
    { name: "PostgreSQL & MongoDB", proficiency: 95, category: "Database" },
    { name: "GraphQL & REST APIs", proficiency: 97, category: "API" },
  ]

  const developmentProcess = [
    {
      phase: "Discovery & Analysis",
      duration: "1-2 weeks",
      description: "Understanding your business requirements and technical needs",
      activities: ["Requirement Gathering", "Business Analysis", "Technical Assessment", "Project Planning"],
    },
    {
      phase: "Design & Architecture",
      duration: "2-3 weeks",
      description: "Creating user-centric designs and robust system architecture",
      activities: ["UI/UX Design", "System Architecture", "Database Design", "API Specification"],
    },
    {
      phase: "Development & Testing",
      duration: "8-16 weeks",
      description: "Agile development with continuous testing and quality assurance",
      activities: ["Sprint Development", "Unit Testing", "Integration Testing", "User Acceptance Testing"],
    },
    {
      phase: "Deployment & Support",
      duration: "1-2 weeks + ongoing",
      description: "Seamless deployment with ongoing maintenance and support",
      activities: ["Production Deployment", "Performance Monitoring", "Bug Fixes", "Feature Updates"],
    },
  ]

  const caseStudies = [
    {
      client: "Manufacturing Company",
      challenge: "Manual inventory management causing delays and errors in production planning",
      solution: "Developed custom ERP system with real-time inventory tracking and automated reorder points",
      results: [
        "50% reduction in inventory costs",
        "30% faster production cycles",
        "95% inventory accuracy",
        "Eliminated stockouts",
      ],
    },
    {
      client: "Healthcare Provider",
      challenge: "Fragmented patient data across multiple systems affecting care quality",
      solution: "Built integrated patient management system with unified data access and workflow automation",
      results: [
        "40% faster patient processing",
        "Unified patient records",
        "Improved care coordination",
        "HIPAA compliant system",
      ],
    },
  ]

  const platforms = [
    {
      name: "Web Applications",
      description: "Responsive web applications with modern frameworks",
      technologies: ["React", "Vue.js", "Angular", "Next.js"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      name: "Mobile Applications",
      description: "Native and cross-platform mobile applications",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Desktop Applications",
      description: "Cross-platform desktop applications",
      technologies: ["Electron", "Qt", ".NET", "Java"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "API & Microservices",
      description: "Scalable APIs and microservices architecture",
      technologies: ["REST", "GraphQL", "gRPC", "Docker"],
      icon: <Database className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
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
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-orange-600 hover:bg-orange-700">Get Quote</Button>
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
          <span>Services</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Custom Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-orange-900/20 to-red-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-orange-900/50 border-orange-600 text-orange-300">
              Custom Software Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Tailored Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Transform your business with custom software solutions designed specifically for your unique requirements.
              From ERP and CRM systems to mobile apps and web platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-6 md:px-8 py-3">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Custom Business Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We build software that perfectly fits your business processes and drives measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-orange-600 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-orange-400 mb-4">{solution.icon}</div>
                  <CardTitle className="text-lg md:text-xl text-orange-400">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm md:text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <Badge variant="outline" className="bg-green-900/50 border-green-600 text-green-300 w-fit">
                      {solution.benefits}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {solution.industries.slice(0, 2).map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Platforms */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Development Platforms</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We develop across all major platforms to ensure your solution reaches your users wherever they are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-orange-600 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-orange-400 mb-4 flex justify-center">{platform.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {platform.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              A proven agile methodology that ensures successful delivery of high-quality custom software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 relative">
                <div className="absolute -top-3 left-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg text-orange-400">{phase.phase}</CardTitle>
                  <Badge variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 w-fit">
                    {phase.duration}
                  </Badge>
                  <CardDescription className="text-gray-300 text-sm">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-sm">Key Activities:</h4>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Technology Stack & Expertise</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                We use cutting-edge technologies and frameworks to build robust, scalable, and maintainable software
                solutions.
              </p>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium text-sm md:text-base">{tech.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs bg-gray-800 border-gray-600">
                          {tech.category}
                        </Badge>
                      </div>
                      <span className="text-orange-400 text-sm md:text-base">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-600/30">
                <CardContent className="p-6 md:p-8">
                  <Code className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Modern Architecture</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    We build scalable applications using microservices architecture, containerization, and cloud-native
                    technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Microservices Architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">API-First Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Cloud-Native Solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
                <CardContent className="p-6 md:p-8">
                  <Zap className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Performance Optimization</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    We optimize applications for speed, scalability, and user experience using best practices and
                    performance monitoring.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Performance Monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Code Optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Caching Strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Real-world custom software solutions that transformed businesses and delivered exceptional ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{study.client}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm md:text-base">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-orange-400 text-sm md:text-base">Custom Solution:</h4>
                    <p className="text-gray-300 text-sm md:text-base">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400 text-sm md:text-base">Business Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Custom Development Packages</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Flexible development packages tailored to your project scope and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Startup Package</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Perfect for MVPs and small applications
                </CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-orange-400">₹20,000</div>
                <div className="text-xs md:text-sm text-gray-400">Complete development + 3 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Web or mobile application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic admin panel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">User authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Deployment & hosting setup</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-orange-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Business Package</CardTitle>
                <CardDescription className="text-sm md:text-base">Comprehensive business solutions</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-orange-400">₹75,000</div>
                <div className="text-xs md:text-sm text-gray-400">Full-featured system + 12 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom ERP/CRM system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced admin dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Third-party integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mobile app included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Analytics & reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Enterprise Package</CardTitle>
                <CardDescription className="text-sm md:text-base">Large-scale enterprise solutions</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-orange-400">Custom</div>
                <div className="text-xs md:text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multi-platform solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Microservices architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced security features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated development team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 enterprise support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SLA guarantees</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-orange-900/20 to-red-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Let's discuss your unique requirements and create a custom software solution that drives your business
            forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-6 md:px-8 py-3">
              Schedule Free Consultation
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
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Building custom software solutions that drive business success.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Development Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    ERP Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    CRM Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    Mobile Apps
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
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Related Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Security Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    IoT Integration
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
