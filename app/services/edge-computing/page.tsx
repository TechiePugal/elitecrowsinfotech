import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Zap,
  CloudLightning,
  Gauge,
  Network,
  Infinity,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Edge Computing Solutions | Real-time IoT Processing | EliteCrows Infotech",
  description:
    "Transform your business with cutting-edge Edge Computing solutions. Real-time IoT data processing, Edge AI, low-latency infrastructure, and distributed computing for mission-critical applications.",
  keywords:
    "edge computing, IoT data processing, edge AI, low latency infrastructure, distributed computing, real-time analytics, edge cloud, fog computing, industrial IoT, smart city solutions",
  openGraph: {
    title: "Edge Computing Solutions | EliteCrows Infotech",
    description:
      "Real-time IoT data processing, Edge AI & analytics, Low-latency infrastructure for mission-critical applications",
    url: "https://www.elitecrows.com/services/edge-computing",
  },
}

export default function EdgeComputingPage() {
  const benefits = [
    {
      title: "Ultra-Low Latency",
      description: "Sub-millisecond response times for critical applications",
      icon: <CloudLightning className="w-8 h-8" />,
      metric: "< 1ms",
    },
    {
      title: "High Performance",
      description: "Optimized processing power at the network edge",
      icon: <Gauge className="w-8 h-8" />,
      metric: "99.9%",
    },
    {
      title: "Distributed Architecture",
      description: "Globally distributed edge nodes for optimal coverage",
      icon: <Network className="w-8 h-8" />,
      metric: "50+ Nodes",
    },
    {
      title: "Infinite Scalability",
      description: "Horizontal scaling to meet growing demands",
      icon: <Infinity className="w-8 h-8" />,
      metric: "Auto-Scale",
    },
  ]

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time quality control, predictive maintenance, and automated production optimization",
      applications: ["Quality Control", "Predictive Maintenance", "Production Optimization", "Safety Monitoring"],
      roi: "40% efficiency increase",
    },
    {
      title: "Autonomous Vehicles",
      description: "Critical decision-making for self-driving cars with ultra-low latency requirements",
      applications: ["Object Detection", "Path Planning", "Emergency Response", "V2X Communication"],
      roi: "99.99% reliability",
    },
    {
      title: "Smart Cities",
      description: "Traffic management, public safety, and infrastructure monitoring at city scale",
      applications: ["Traffic Optimization", "Public Safety", "Energy Management", "Waste Management"],
      roi: "30% cost reduction",
    },
    {
      title: "Healthcare IoT",
      description: "Real-time patient monitoring and emergency response systems",
      applications: ["Patient Monitoring", "Emergency Response", "Medical Imaging", "Drug Tracking"],
      roi: "50% faster response",
    },
  ]

  const technologies = [
    { name: "Kubernetes Edge", proficiency: 95 },
    { name: "Docker Containers", proficiency: 98 },
    { name: "5G Networks", proficiency: 90 },
    { name: "Edge AI/ML", proficiency: 92 },
    { name: "IoT Protocols", proficiency: 96 },
    { name: "Real-time Analytics", proficiency: 94 },
  ]

  const caseStudies = [
    {
      client: "Manufacturing Giant",
      challenge: "Reduce production line downtime and improve quality control",
      solution: "Deployed edge computing nodes for real-time monitoring and predictive maintenance",
      results: ["45% reduction in downtime", "30% improvement in quality", "$2M annual savings"],
    },
    {
      client: "Smart City Initiative",
      challenge: "Optimize traffic flow and reduce congestion in metropolitan area",
      solution: "Implemented distributed edge computing for real-time traffic analysis",
      results: ["25% reduction in traffic congestion", "20% fuel savings", "Improved air quality"],
    },
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
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
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
          <span>Services</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Edge Computing</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-blue-900/50 border-blue-600 text-blue-300">
              Edge Computing Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Real-time Processing at the Edge
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Transform your business with ultra-low latency edge computing solutions. Process data where it's
              generated, reduce bandwidth costs, and enable real-time decision making for mission-critical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                Start Your Edge Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Edge Computing?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Edge computing brings computation and data storage closer to the sources of data, dramatically improving
              response times and saving bandwidth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-blue-600 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Edge Computing Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how edge computing transforms industries with real-time processing and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-blue-600 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-300">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-green-900/50 border-green-600 text-green-300">
                      ROI: {useCase.roi}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Edge Computing Expertise</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We leverage cutting-edge technologies and frameworks to deliver robust, scalable edge computing
                solutions that meet the most demanding performance requirements.
              </p>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-blue-400">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
                <CardContent className="p-8">
                  <Cpu className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Edge AI Integration</h3>
                  <p className="text-gray-300 mb-4">
                    Deploy machine learning models directly at the edge for real-time inference and decision making.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">TensorFlow Lite optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">ONNX model deployment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Custom inference engines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-600/30">
                <CardContent className="p-8">
                  <Network className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">5G Edge Networks</h3>
                  <p className="text-gray-300 mb-4">
                    Leverage 5G networks for ultra-low latency edge computing applications.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Multi-access Edge Computing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Network slicing optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Edge-to-cloud orchestration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world implementations that delivered measurable business value through edge computing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl">{study.client}</CardTitle>
                  <CardDescription className="text-gray-300">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-blue-400">Our Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Results Achieved:</h4>
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

      {/* Pricing & Packages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Edge Computing Packages</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the right edge computing solution for your business needs and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Starter Edge</CardTitle>
                <CardDescription>Perfect for small-scale IoT deployments</CardDescription>
                <div className="text-3xl font-bold text-blue-400">₹5,000</div>
                <div className="text-sm text-gray-400">One-time setup + monthly hosting</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Up to 10 edge nodes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic monitoring & alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Standard support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Edge analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Enterprise Edge</CardTitle>
                <CardDescription>Comprehensive edge computing platform</CardDescription>
                <div className="text-3xl font-bold text-blue-400">₹25,000</div>
                <div className="text-sm text-gray-400">One-time setup + monthly hosting</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Up to 100 edge nodes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced AI/ML integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 premium support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom analytics & reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multi-cloud deployment</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Custom Edge</CardTitle>
                <CardDescription>Tailored solutions for unique requirements</CardDescription>
                <div className="text-3xl font-bold text-blue-400">Custom</div>
                <div className="text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Unlimited edge nodes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom AI/ML models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated support team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">White-label solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SLA guarantees</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about edge computing implementation and benefits.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">
                  What is edge computing and how does it differ from cloud computing?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Edge computing processes data closer to where it's generated, reducing latency and bandwidth usage.
                  Unlike traditional cloud computing where data travels to centralized data centers, edge computing
                  brings computation to the network's edge, enabling real-time processing for time-sensitive
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">What industries benefit most from edge computing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Manufacturing, healthcare, autonomous vehicles, smart cities, retail, and telecommunications see
                  significant benefits. Any industry requiring real-time decision making, low latency, or processing
                  large volumes of IoT data can leverage edge computing for competitive advantage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">How secure is edge computing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Edge computing can enhance security by keeping sensitive data local and reducing attack surfaces. We
                  implement zero-trust architecture, end-to-end encryption, secure boot processes, and regular security
                  updates to ensure your edge infrastructure remains protected.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">What's the typical ROI timeline for edge computing projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Most organizations see ROI within 6-18 months, depending on the use case. Manufacturing clients often
                  see immediate benefits through reduced downtime and improved quality control, while smart city
                  implementations may take longer but deliver substantial long-term savings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how edge computing can revolutionize your operations, reduce costs, and unlock new
            opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
              <Phone className="mr-2 w-5 h-5" />
              Call +91 63831 06107
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Empowering businesses through innovative edge computing solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
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
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    IoT Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
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
              <h3 className="font-semibold mb-4">Related Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    IoT Platforms
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Security Solutions
                  </Link>
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
