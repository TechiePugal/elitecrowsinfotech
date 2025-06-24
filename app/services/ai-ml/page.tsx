import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Zap,
  BarChart3,
  Eye,
  MessageSquare,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Bot,
  Target,
  Cpu,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions | Business Automation | EliteCrows Infotech",
  description:
    "Transform your business with AI & Machine Learning solutions. Predictive analytics, process automation, NLP chatbots, computer vision, and intelligent decision-making systems.",
  keywords:
    "artificial intelligence, machine learning, predictive analytics, business automation, NLP, computer vision, deep learning, neural networks, AI consulting, ML models",
  openGraph: {
    title: "AI & Machine Learning Solutions | EliteCrows Infotech",
    description:
      "Business process automation, Predictive analytics, NLP for chatbots, Computer vision for smart applications",
    url: "https://www.elitecrows.com/services/ai-ml",
  },
}

export default function AIMLPage() {
  const capabilities = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends, demand, and outcomes with advanced ML models",
      icon: <BarChart3 className="w-8 h-8" />,
      accuracy: "95%",
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual quality control",
      icon: <Eye className="w-8 h-8" />,
      accuracy: "98%",
    },
    {
      title: "Natural Language Processing",
      description: "Chatbots, sentiment analysis, and document processing",
      icon: <MessageSquare className="w-8 h-8" />,
      accuracy: "92%",
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of repetitive business processes",
      icon: <Bot className="w-8 h-8" />,
      accuracy: "99%",
    },
  ]

  const solutions = [
    {
      title: "Intelligent Customer Service",
      description:
        "AI-powered chatbots and virtual assistants that understand context and provide personalized responses",
      features: ["24/7 availability", "Multi-language support", "Sentiment analysis", "Human handoff"],
      roi: "60% cost reduction",
      industry: "Retail, Banking, Healthcare",
    },
    {
      title: "Predictive Maintenance",
      description: "Prevent equipment failures and optimize maintenance schedules using IoT data and ML algorithms",
      features: ["Failure prediction", "Optimal scheduling", "Cost optimization", "Real-time monitoring"],
      roi: "40% maintenance savings",
      industry: "Manufacturing, Energy, Transportation",
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraud detection and prevention using advanced pattern recognition and anomaly detection",
      features: ["Real-time analysis", "Pattern recognition", "Risk scoring", "Automated blocking"],
      roi: "85% fraud reduction",
      industry: "Banking, Insurance, E-commerce",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory, demand forecasting, and logistics using AI-driven insights",
      features: ["Demand forecasting", "Inventory optimization", "Route planning", "Supplier analysis"],
      roi: "25% cost reduction",
      industry: "Retail, Manufacturing, Logistics",
    },
  ]

  const technologies = [
    { name: "TensorFlow", proficiency: 98 },
    { name: "PyTorch", proficiency: 95 },
    { name: "Scikit-learn", proficiency: 96 },
    { name: "OpenCV", proficiency: 92 },
    { name: "Hugging Face", proficiency: 90 },
    { name: "MLflow", proficiency: 88 },
  ]

  const mlModels = [
    {
      category: "Deep Learning",
      models: ["Neural Networks", "CNNs", "RNNs", "Transformers", "GANs"],
      applications: "Image recognition, NLP, time series forecasting",
    },
    {
      category: "Classical ML",
      models: ["Random Forest", "SVM", "XGBoost", "Linear Regression", "K-Means"],
      applications: "Classification, regression, clustering, anomaly detection",
    },
    {
      category: "Reinforcement Learning",
      models: ["Q-Learning", "Policy Gradient", "Actor-Critic", "DDPG"],
      applications: "Game AI, robotics, autonomous systems, optimization",
    },
  ]

  const caseStudies = [
    {
      client: "E-commerce Platform",
      challenge: "Improve product recommendations and reduce cart abandonment",
      solution: "Implemented deep learning recommendation system with real-time personalization",
      results: ["35% increase in conversion", "50% reduction in cart abandonment", "$5M additional revenue"],
    },
    {
      client: "Healthcare Provider",
      challenge: "Automate medical image analysis for faster diagnosis",
      solution: "Developed computer vision system for X-ray and MRI analysis",
      results: ["90% faster diagnosis", "95% accuracy rate", "Reduced radiologist workload by 60%"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
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
              <Button className="bg-purple-600 hover:bg-purple-700">Get Quote</Button>
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
          <span className="text-white">AI & Machine Learning</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-purple-900/50 border-purple-600 text-purple-300">
              AI & Machine Learning Solutions
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Intelligent Automation for Modern Business
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Harness the power of artificial intelligence and machine learning to automate processes, gain predictive
              insights, and make data-driven decisions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                View AI Demos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive AI and ML capabilities cover the full spectrum of intelligent automation and analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {capability.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{capability.accuracy}</div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business operations with intelligent solutions tailored to your industry needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-300">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-green-900/50 border-green-600 text-green-300">
                      ROI: {solution.roi}
                    </Badge>
                    <Badge variant="outline" className="bg-blue-900/50 border-blue-600 text-blue-300">
                      {solution.industry}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ML Models & Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our ML Expertise</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We leverage state-of-the-art machine learning frameworks and models to deliver robust, scalable AI
                solutions that drive real business value.
              </p>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-purple-400">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {mlModels.map((category, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-600/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">{category.category}</h3>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {category.models.map((model, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{category.applications}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world AI implementations that delivered transformational business outcomes.
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
                    <h4 className="font-semibold mb-2 text-purple-400">AI Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400">Business Impact:</h4>
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

      {/* AI Development Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our AI Development Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to AI implementation that ensures successful outcomes and measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Problem Definition</h3>
                <p className="text-gray-400 text-sm">
                  Identify business challenges and define AI objectives with clear success metrics
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Data Preparation</h3>
                <p className="text-gray-400 text-sm">
                  Collect, clean, and prepare high-quality training data for optimal model performance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Model Development</h3>
                <p className="text-gray-400 text-sm">
                  Design, train, and optimize ML models using best practices and cutting-edge techniques
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Deployment & Monitoring</h3>
                <p className="text-gray-400 text-sm">
                  Deploy models to production with continuous monitoring and performance optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Solution Packages</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the right AI package for your business needs and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">AI Starter</CardTitle>
                <CardDescription>Perfect for small businesses exploring AI</CardDescription>
                <div className="text-3xl font-bold text-purple-400">$15,000</div>
                <div className="text-sm text-gray-400">One-time development + support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic ML model development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Data analysis & preparation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Model deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 months support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">AI Enterprise</CardTitle>
                <CardDescription>Comprehensive AI transformation</CardDescription>
                <div className="text-3xl font-bold text-purple-400">$50,000</div>
                <div className="text-sm text-gray-400">Complete AI solution + ongoing support</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced ML/DL models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom AI applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">MLOps pipeline setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">12 months premium support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Performance monitoring</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">AI Custom</CardTitle>
                <CardDescription>Tailored AI solutions for unique needs</CardDescription>
                <div className="text-3xl font-bold text-purple-400">Custom</div>
                <div className="text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Research & development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom model architectures</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated AI team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">White-label solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise SLA</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Embrace AI?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with intelligent automation and data-driven insights. Let's build the future
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-3">
              Schedule AI Consultation
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Empowering businesses through intelligent AI solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    NLP & Chatbots
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    Predictive Analytics
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
                  <Link href="/services/edge-computing" className="hover:text-white transition-colors">
                    Edge Computing
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
                    IoT Platforms
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
