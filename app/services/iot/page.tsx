import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Wifi,
  Factory,
  Building,
  Car,
  Home,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  HomeIcon,
  Cpu,
  Cloud,
  Shield,
  BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "IoT Solutions | Smart City Industrial IoT | EliteCrows Infotech",
  description:
    "Comprehensive IoT solutions for smart cities, industrial automation, connected devices, real-time analytics, and IoT platform development. Transform your business with intelligent connectivity.",
  keywords:
    "IoT solutions, smart city, industrial IoT, connected devices, IoT platform, sensor networks, real-time analytics, IoT security, device management, automation",
  openGraph: {
    title: "IoT Solutions | EliteCrows Infotech",
    description: "Smart city applications, Manufacturing IoT, Retail analytics, Connected device management",
    url: "https://www.elitecrows.com/services/iot",
  },
}

export default function IoTPage() {
  const iotSolutions = [
    {
      title: "Smart City Infrastructure",
      description: "Comprehensive IoT solutions for modern smart city development and management",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Smart Traffic Management",
        "Environmental Monitoring",
        "Smart Lighting Systems",
        "Waste Management",
        "Public Safety Networks",
        "Energy Optimization",
      ],
      benefits: "30% operational cost reduction",
      applications: ["Traffic Control", "Air Quality", "Street Lighting", "Parking Management"],
    },
    {
      title: "Industrial IoT (IIoT)",
      description: "Advanced industrial automation and monitoring solutions for manufacturing excellence",
      icon: <Factory className="w-8 h-8" />,
      features: [
        "Predictive Maintenance",
        "Asset Tracking",
        "Quality Control",
        "Energy Management",
        "Supply Chain Visibility",
        "Safety Monitoring",
      ],
      benefits: "40% efficiency improvement",
      applications: ["Manufacturing", "Oil & Gas", "Mining", "Utilities"],
    },
    {
      title: "Connected Vehicle Solutions",
      description: "IoT solutions for fleet management, autonomous vehicles, and transportation systems",
      icon: <Car className="w-8 h-8" />,
      features: [
        "Fleet Tracking",
        "Vehicle Diagnostics",
        "Route Optimization",
        "Driver Behavior Analysis",
        "Fuel Management",
        "Maintenance Scheduling",
      ],
      benefits: "25% fuel cost savings",
      applications: ["Logistics", "Public Transport", "Ride Sharing", "Emergency Services"],
    },
    {
      title: "Smart Home & Building",
      description: "Intelligent building automation and smart home solutions for enhanced living",
      icon: <Home className="w-8 h-8" />,
      features: [
        "Home Automation",
        "Security Systems",
        "Energy Management",
        "Climate Control",
        "Occupancy Detection",
        "Remote Monitoring",
      ],
      benefits: "35% energy savings",
      applications: ["Residential", "Commercial", "Healthcare", "Education"],
    },
  ]

  const iotPlatforms = [
    {
      name: "Device Management",
      description: "Comprehensive device lifecycle management and monitoring",
      capabilities: ["Device Provisioning", "Firmware Updates", "Remote Configuration", "Health Monitoring"],
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      name: "Data Analytics",
      description: "Real-time data processing and advanced analytics",
      capabilities: ["Stream Processing", "Predictive Analytics", "Machine Learning", "Custom Dashboards"],
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: "Cloud Integration",
      description: "Seamless cloud connectivity and scalability",
      capabilities: ["Multi-Cloud Support", "Edge Computing", "API Management", "Data Storage"],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      name: "Security Framework",
      description: "End-to-end security for IoT deployments",
      capabilities: ["Device Authentication", "Data Encryption", "Secure Communication", "Threat Detection"],
      icon: <Shield className="w-6 h-6" />,
    },
  ]

  const iotTechnologies = [
    { name: "MQTT & CoAP Protocols", proficiency: 98 },
    { name: "LoRaWAN & NB-IoT", proficiency: 95 },
    { name: "Edge Computing", proficiency: 92 },
    { name: "Time Series Databases", proficiency: 96 },
    { name: "IoT Security", proficiency: 94 },
    { name: "Real-time Analytics", proficiency: 97 },
  ]

  const deploymentProcess = [
    {
      phase: "Assessment & Planning",
      duration: "2-3 weeks",
      description: "Comprehensive IoT readiness assessment and solution design",
      activities: ["Use Case Analysis", "Infrastructure Assessment", "Technology Selection", "ROI Planning"],
    },
    {
      phase: "Pilot Development",
      duration: "4-6 weeks",
      description: "Proof of concept development and testing",
      activities: ["Prototype Development", "Sensor Integration", "Data Pipeline Setup", "Initial Testing"],
    },
    {
      phase: "Full Deployment",
      duration: "8-16 weeks",
      description: "Scalable IoT solution deployment and integration",
      activities: ["Device Deployment", "Platform Integration", "Security Implementation", "User Training"],
    },
    {
      phase: "Optimization & Support",
      duration: "Ongoing",
      description: "Continuous monitoring, optimization, and support",
      activities: ["Performance Monitoring", "Predictive Maintenance", "Feature Updates", "24/7 Support"],
    },
  ]

  const caseStudies = [
    {
      client: "Smart City Initiative",
      challenge: "Optimize traffic flow and reduce congestion in metropolitan area with 2M+ population",
      solution: "Deployed comprehensive IoT network with smart traffic lights, sensors, and real-time analytics",
      results: [
        "30% reduction in traffic congestion",
        "25% decrease in commute times",
        "40% improvement in air quality",
        "50% reduction in traffic accidents",
      ],
    },
    {
      client: "Manufacturing Plant",
      challenge: "Reduce unplanned downtime and improve operational efficiency in automotive manufacturing",
      solution: "Implemented IIoT solution with predictive maintenance and real-time monitoring across 500+ machines",
      results: [
        "60% reduction in unplanned downtime",
        "35% increase in overall equipment effectiveness",
        "25% reduction in maintenance costs",
        "Real-time visibility across all operations",
      ],
    },
  ]

  const connectivityOptions = [
    {
      technology: "5G/LTE",
      description: "High-speed cellular connectivity for critical applications",
      useCase: "Smart vehicles, industrial automation",
      range: "Wide area",
      dataRate: "High",
    },
    {
      technology: "LoRaWAN",
      description: "Long-range, low-power connectivity for sensor networks",
      useCase: "Smart agriculture, environmental monitoring",
      range: "15+ km",
      dataRate: "Low",
    },
    {
      technology: "Wi-Fi 6",
      description: "High-performance wireless for dense deployments",
      useCase: "Smart buildings, retail analytics",
      range: "100m",
      dataRate: "Very High",
    },
    {
      technology: "Bluetooth 5.0",
      description: "Short-range connectivity for personal devices",
      useCase: "Wearables, asset tracking",
      range: "50m",
      dataRate: "Medium",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
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
              <Button className="bg-cyan-600 hover:bg-cyan-700">Get Quote</Button>
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
          <HomeIcon className="w-4 h-4" />
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Services</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">IoT Solutions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-cyan-900/50 border-cyan-600 text-cyan-300">
              IoT Solutions & Platforms
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Connect Everything, Everywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Transform your business with comprehensive IoT solutions. From smart cities and industrial automation to
              connected devices and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 px-6 md:px-8 py-3">
                Start IoT Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                IoT Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Solutions */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Comprehensive IoT Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              End-to-end IoT solutions designed to connect, monitor, and optimize your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {iotSolutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-cyan-600 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-cyan-400 mb-4">{solution.icon}</div>
                  <CardTitle className="text-lg md:text-xl text-cyan-400">{solution.title}</CardTitle>
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
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 p-0">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Platform Components */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">IoT Platform Components</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Complete IoT platform with all essential components for successful IoT deployment and management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {iotPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-cyan-600 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-cyan-400 mb-4 flex justify-center">{platform.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Capabilities:</h4>
                    <ul className="space-y-1">
                      {platform.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-center space-x-2 justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-300">{capability}</span>
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

      {/* Connectivity Options */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Connectivity Technologies</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Choose the right connectivity solution for your IoT deployment based on range, data requirements, and use
              case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {connectivityOptions.map((option, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-cyan-600 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-cyan-400">{option.technology}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold">Use Case:</span>
                      <p className="text-xs text-gray-300">{option.useCase}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="text-sm font-semibold">Range:</span>
                        <p className="text-xs text-gray-300">{option.range}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold">Data Rate:</span>
                        <p className="text-xs text-gray-300">{option.dataRate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">IoT Deployment Process</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              A proven methodology for successful IoT implementation from concept to full-scale deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {deploymentProcess.map((phase, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 relative">
                <div className="absolute -top-3 left-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg text-cyan-400">{phase.phase}</CardTitle>
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
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">IoT Technology Stack</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                We leverage cutting-edge IoT technologies and protocols to build robust, scalable, and secure IoT
                solutions.
              </p>
              <div className="space-y-6">
                {iotTechnologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm md:text-base">{tech.name}</span>
                      <span className="text-cyan-400 text-sm md:text-base">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-600/30">
                <CardContent className="p-6 md:p-8">
                  <Wifi className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Edge Computing Integration</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Process IoT data at the edge for real-time insights and reduced latency in critical applications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Real-time processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Reduced bandwidth usage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Enhanced security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-600/30">
                <CardContent className="p-6 md:p-8">
                  <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-green-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Advanced Analytics</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Transform IoT data into actionable insights with machine learning and predictive analytics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Predictive maintenance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Anomaly detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom dashboards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">IoT Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Real-world IoT implementations that delivered transformational business outcomes and operational
              efficiency.
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
                    <h4 className="font-semibold mb-2 text-cyan-400 text-sm md:text-base">IoT Solution:</h4>
                    <p className="text-gray-300 text-sm md:text-base">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400 text-sm md:text-base">Business Impact:</h4>
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
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">IoT Solution Packages</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Scalable IoT packages designed to meet the needs of businesses from startups to large enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">IoT Starter</CardTitle>
                <CardDescription className="text-sm md:text-base">Perfect for small-scale IoT pilots</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">₹18,000</div>
                <div className="text-xs md:text-sm text-gray-400">Pilot deployment + 6 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Up to 50 connected devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Cloud platform setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Mobile app included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Standard support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-cyan-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">IoT Professional</CardTitle>
                <CardDescription className="text-sm md:text-base">Comprehensive IoT solution</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">₹65,000</div>
                <div className="text-xs md:text-sm text-gray-400">Full deployment + 12 months support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Up to 1000 connected devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced analytics & ML</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Edge computing integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom mobile & web apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">IoT Enterprise</CardTitle>
                <CardDescription className="text-sm md:text-base">Large-scale IoT transformation</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">Custom</div>
                <div className="text-xs md:text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Unlimited connected devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom IoT platform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multi-site deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated IoT team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 enterprise support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready to Connect Your Business?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Transform your operations with intelligent IoT solutions. Let's discuss how connected devices can drive your
            business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 px-6 md:px-8 py-3">
              Schedule IoT Consultation
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
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Connecting the world through intelligent IoT solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">IoT Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    Smart City Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    Industrial IoT
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    Connected Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    Smart Buildings
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
                    AI & Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    IoT Security
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
