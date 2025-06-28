import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Server,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Database,
  Globe,
  Lock,
  Gauge,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cloud Solutions & Migration Services | AWS Azure GCP | EliteCrows Infotech",
  description:
    "Expert cloud migration, multi-cloud strategies, serverless architecture, and cloud optimization services. AWS, Azure, GCP certified professionals for scalable cloud solutions.",
  keywords:
    "cloud migration, AWS services, Azure cloud, Google Cloud Platform, multi-cloud strategy, serverless architecture, cloud optimization, cloud security, DevOps, containerization",
  openGraph: {
    title: "Cloud Solutions & Migration Services | EliteCrows Infotech",
    description:
      "Multi-cloud strategies (AWS, Azure, GCP), Cloud modernization, Cost optimization & cloud-native development",
    url: "https://www.elitecrows.com/services/cloud",
  },
}

export default function CloudPage() {
  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      logo: "🟠",
      expertise: "Advanced",
      certifications: ["Solutions Architect", "DevOps Engineer", "Security Specialist"],
      services: ["EC2", "Lambda", "RDS", "S3", "EKS", "CloudFormation"],
      proficiency: 98,
    },
    {
      name: "Microsoft Azure",
      logo: "🔵",
      expertise: "Advanced",
      certifications: ["Azure Architect", "DevOps Engineer", "Security Engineer"],
      services: ["Virtual Machines", "Functions", "SQL Database", "Blob Storage", "AKS", "ARM Templates"],
      proficiency: 95,
    },
    {
      name: "Google Cloud Platform",
      logo: "🔴",
      expertise: "Advanced",
      certifications: ["Cloud Architect", "Data Engineer", "Security Engineer"],
      services: ["Compute Engine", "Cloud Functions", "Cloud SQL", "Cloud Storage", "GKE", "Deployment Manager"],
      proficiency: 92,
    },
  ]

  const cloudServices = [
    {
      title: "Cloud Migration & Modernization",
      description: "Seamless migration from on-premises to cloud with zero downtime and optimized performance",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Assessment & Planning",
        "Data Migration",
        "Application Modernization",
        "Performance Optimization",
        "Security Implementation",
        "Cost Optimization",
      ],
      benefits: "60% cost reduction, 99.9% uptime",
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Design and implement robust multi-cloud strategies for maximum flexibility and reliability",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Multi-Cloud Strategy",
        "Vendor Lock-in Prevention",
        "Cross-Cloud Networking",
        "Unified Management",
        "Disaster Recovery",
        "Load Distribution",
      ],
      benefits: "99.99% availability, vendor independence",
    },
    {
      title: "Serverless Architecture",
      description: "Build scalable, cost-effective applications using serverless computing and microservices",
      icon: <Server className="w-8 h-8" />,
      features: [
        "Function-as-a-Service",
        "Event-Driven Architecture",
        "Auto-Scaling",
        "Pay-per-Use Model",
        "Microservices Design",
        "API Gateway Integration",
      ],
      benefits: "80% cost savings, infinite scalability",
    },
    {
      title: "Cloud Security & Compliance",
      description: "Implement comprehensive security measures and ensure compliance with industry standards",
      icon: <Lock className="w-8 h-8" />,
      features: [
        "Identity & Access Management",
        "Data Encryption",
        "Network Security",
        "Compliance Monitoring",
        "Threat Detection",
        "Security Auditing",
      ],
      benefits: "100% compliance, zero security incidents",
    },
  ]

  const migrationProcess = [
    {
      phase: "Assessment",
      duration: "1-2 weeks",
      description: "Comprehensive analysis of current infrastructure and applications",
      deliverables: ["Infrastructure Audit", "Application Assessment", "Migration Roadmap", "Cost Analysis"],
    },
    {
      phase: "Planning",
      duration: "2-3 weeks",
      description: "Detailed migration strategy and architecture design",
      deliverables: ["Migration Strategy", "Architecture Design", "Security Plan", "Timeline & Milestones"],
    },
    {
      phase: "Migration",
      duration: "4-12 weeks",
      description: "Phased migration with minimal business disruption",
      deliverables: ["Data Migration", "Application Migration", "Testing & Validation", "Performance Tuning"],
    },
    {
      phase: "Optimization",
      duration: "2-4 weeks",
      description: "Post-migration optimization and monitoring setup",
      deliverables: ["Performance Optimization", "Cost Optimization", "Monitoring Setup", "Documentation"],
    },
  ]

  const caseStudies = [
    {
      client: "Financial Services Company",
      challenge: "Migrate legacy banking system to cloud while maintaining security and compliance",
      solution: "Implemented hybrid cloud architecture with AWS and Azure for redundancy",
      results: [
        "50% reduction in infrastructure costs",
        "99.99% uptime achieved",
        "Full PCI DSS compliance maintained",
        "3x faster deployment cycles",
      ],
    },
    {
      client: "E-commerce Platform",
      challenge: "Handle traffic spikes during peak seasons without performance degradation",
      solution: "Built serverless architecture with auto-scaling capabilities across multiple regions",
      results: [
        "Handled 10x traffic increase seamlessly",
        "70% reduction in operational costs",
        "Sub-second response times globally",
        "Zero downtime during peak events",
      ],
    },
  ]

  const technologies = [
    { name: "Docker & Kubernetes", proficiency: 96 },
    { name: "Terraform & CloudFormation", proficiency: 94 },
    { name: "CI/CD Pipelines", proficiency: 98 },
    { name: "Monitoring & Logging", proficiency: 92 },
    { name: "Security & Compliance", proficiency: 95 },
    { name: "Cost Optimization", proficiency: 90 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
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
              <Button className="bg-green-600 hover:bg-green-700">Get Quote</Button>
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
          <span className="text-white">Cloud Solutions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-green-900/50 border-green-600 text-green-300">
              Cloud Solutions & Migration
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Scale with Confidence in the Cloud
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Transform your infrastructure with expert cloud migration, multi-cloud strategies, and serverless
              architecture. Reduce costs, improve scalability, and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-6 md:px-8 py-3">
                Start Cloud Migration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                Free Cloud Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Multi-Cloud Expertise</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Certified professionals across all major cloud platforms with deep expertise in cloud-native technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-green-600 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl md:text-6xl mb-4">{platform.logo}</div>
                  <CardTitle className="text-lg md:text-xl">{platform.name}</CardTitle>
                  <Badge variant="outline" className="bg-green-900/50 border-green-600 text-green-300 mx-auto">
                    {platform.expertise}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Proficiency</span>
                      <span className="text-green-400 text-sm">{platform.proficiency}%</span>
                    </div>
                    <Progress value={platform.proficiency} className="h-2" />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {platform.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Services:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {platform.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Comprehensive Cloud Services</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              End-to-end cloud solutions from strategy to implementation and ongoing optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cloudServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-green-600 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-green-400 mb-4">{service.icon}</div>
                  <CardTitle className="text-lg md:text-xl text-green-400">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-900/50 border-green-600 text-green-300">
                    {service.benefits}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Migration Process</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              A proven methodology that ensures successful cloud migration with minimal risk and maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {migrationProcess.map((phase, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 relative">
                <div className="absolute -top-3 left-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg text-green-400">{phase.phase}</CardTitle>
                  <Badge variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 w-fit">
                    {phase.duration}
                  </Badge>
                  <CardDescription className="text-gray-300 text-sm">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-sm">Deliverables:</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-300">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">DevOps & Cloud Technologies</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                We leverage industry-leading tools and practices to ensure reliable, scalable, and secure cloud
                deployments.
              </p>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm md:text-base">{tech.name}</span>
                      <span className="text-green-400 text-sm md:text-base">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-600/30">
                <CardContent className="p-6 md:p-8">
                  <Database className="w-10 h-10 md:w-12 md:h-12 text-green-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Infrastructure as Code</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Automate infrastructure provisioning and management using Terraform, CloudFormation, and ARM
                    templates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Version-controlled infrastructure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Automated deployments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Consistent environments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
                <CardContent className="p-6 md:p-8">
                  <Gauge className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Monitoring & Observability</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Comprehensive monitoring, logging, and alerting for optimal cloud performance and reliability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Centralized logging</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Intelligent alerting</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Cloud Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Real-world cloud transformations that delivered significant business value and competitive advantage.
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
                    <h4 className="font-semibold mb-2 text-green-400 text-sm md:text-base">Cloud Solution:</h4>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Cloud Migration Packages</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Flexible cloud migration and management packages designed for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Cloud Starter</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Perfect for small applications and websites
                </CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-green-400">₹8,000</div>
                <div className="text-xs md:text-sm text-gray-400">Migration + 3 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Single cloud platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic monitoring setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Security best practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cost optimization</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Cloud Enterprise</CardTitle>
                <CardDescription className="text-sm md:text-base">Comprehensive cloud transformation</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-green-400">₹35,000</div>
                <div className="text-xs md:text-sm text-gray-400">Complete migration + 12 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multi-cloud architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced monitoring & alerting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">CI/CD pipeline setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 support & maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Disaster recovery setup</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Cloud Custom</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Tailored solutions for unique requirements
                </CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-green-400">Custom</div>
                <div className="text-xs md:text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom architecture design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated cloud team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise SLA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Compliance & governance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">White-label solutions</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-green-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready for Cloud Transformation?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Start your cloud journey today with a free assessment and discover how cloud migration can transform your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-6 md:px-8 py-3">
              Get Free Cloud Assessment
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
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Empowering businesses through innovative cloud solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Cloud Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Multi-Cloud Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Serverless Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    DevOps & CI/CD
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
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Security Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    Custom Development
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
