import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Lock,
  Eye,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
  FileCheck,
  Users,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | GDPR HIPAA Compliance | EliteCrows Infotech",
  description:
    "Comprehensive cybersecurity solutions, secure application development, compliance (GDPR, HIPAA), threat detection, penetration testing, and security audits for businesses.",
  keywords:
    "cybersecurity, application security, GDPR compliance, HIPAA compliance, penetration testing, security audit, threat detection, zero trust architecture, data protection",
  openGraph: {
    title: "Cybersecurity Solutions | EliteCrows Infotech",
    description: "Secure app architecture, Data privacy best practices (GDPR, HIPAA), Threat detection & mitigation",
    url: "https://www.elitecrows.com/services/security",
  },
}

export default function SecurityPage() {
  const securityServices = [
    {
      title: "Application Security",
      description: "Secure coding practices and vulnerability assessments for web and mobile applications",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Secure Code Review",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Architecture",
        "OWASP Compliance",
        "Security Training",
      ],
      benefits: "99.9% threat prevention",
    },
    {
      title: "Compliance & Governance",
      description: "Ensure regulatory compliance with GDPR, HIPAA, SOX, and other industry standards",
      icon: <FileCheck className="w-8 h-8" />,
      features: [
        "GDPR Compliance",
        "HIPAA Compliance",
        "SOX Compliance",
        "ISO 27001",
        "Audit Preparation",
        "Policy Development",
      ],
      benefits: "100% compliance assurance",
    },
    {
      title: "Identity & Access Management",
      description: "Comprehensive IAM solutions with multi-factor authentication and role-based access",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Multi-Factor Authentication",
        "Single Sign-On (SSO)",
        "Role-Based Access Control",
        "Identity Federation",
        "Privileged Access Management",
        "Access Monitoring",
      ],
      benefits: "Zero unauthorized access",
    },
    {
      title: "Data Protection & Encryption",
      description: "Advanced encryption and data protection strategies for sensitive information",
      icon: <Database className="w-8 h-8" />,
      features: [
        "End-to-End Encryption",
        "Data Loss Prevention",
        "Backup Security",
        "Key Management",
        "Database Security",
        "Privacy Controls",
      ],
      benefits: "Military-grade protection",
    },
  ]

  const threatDetection = [
    {
      category: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      capabilities: ["SIEM Integration", "Behavioral Analytics", "Anomaly Detection", "Automated Response"],
      effectiveness: "99.8%",
    },
    {
      category: "Threat Intelligence",
      description: "Advanced threat intelligence and predictive security",
      capabilities: ["Threat Hunting", "IOC Analysis", "Risk Assessment", "Vulnerability Management"],
      effectiveness: "95%",
    },
    {
      category: "Incident Response",
      description: "Rapid incident response and forensic analysis",
      capabilities: ["Incident Containment", "Forensic Analysis", "Recovery Planning", "Post-Incident Review"],
      effectiveness: "< 15 min response",
    },
  ]

  const complianceFrameworks = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      requirements: ["Data Mapping", "Privacy by Design", "Consent Management", "Breach Notification"],
      industries: ["All EU businesses", "Global companies"],
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      requirements: ["PHI Protection", "Access Controls", "Audit Logs", "Risk Assessment"],
      industries: ["Healthcare", "Health Tech"],
    },
    {
      name: "SOX",
      description: "Sarbanes-Oxley Act",
      requirements: ["Financial Controls", "Audit Trails", "Data Integrity", "Access Management"],
      industries: ["Public Companies", "Financial Services"],
    },
    {
      name: "ISO 27001",
      description: "Information Security Management",
      requirements: ["ISMS Implementation", "Risk Management", "Security Controls", "Continuous Improvement"],
      industries: ["Enterprise", "Government"],
    },
  ]

  const securityTechnologies = [
    { name: "Penetration Testing", proficiency: 98 },
    { name: "Vulnerability Assessment", proficiency: 96 },
    { name: "Security Architecture", proficiency: 94 },
    { name: "Compliance Auditing", proficiency: 97 },
    { name: "Incident Response", proficiency: 95 },
    { name: "Threat Intelligence", proficiency: 92 },
  ]

  const caseStudies = [
    {
      client: "Healthcare Network",
      challenge: "Achieve HIPAA compliance while maintaining system performance and user experience",
      solution: "Implemented comprehensive security framework with encryption, access controls, and audit logging",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 2 years",
        "30% improvement in access efficiency",
        "Passed all compliance audits",
      ],
    },
    {
      client: "Financial Services Firm",
      challenge: "Protect sensitive financial data from sophisticated cyber threats",
      solution: "Deployed zero-trust architecture with advanced threat detection and response capabilities",
      results: [
        "Blocked 10,000+ threat attempts",
        "99.9% uptime maintained",
        "SOX compliance achieved",
        "50% reduction in security incidents",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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
              <Button className="bg-red-600 hover:bg-red-700">Get Quote</Button>
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
          <span className="text-white">Security Solutions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-red-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-red-900/50 border-red-600 text-red-300">
              Cybersecurity Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Secure Your Digital Future
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Comprehensive cybersecurity solutions to protect your business from evolving threats. From secure
              application development to compliance and threat detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3">
                Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                View Security Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Comprehensive Security Services</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              End-to-end security solutions to protect your business, data, and customers from cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {securityServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-red-400 mb-4">{service.icon}</div>
                  <CardTitle className="text-lg md:text-xl text-red-400">{service.title}</CardTitle>
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

      {/* Threat Detection */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Advanced Threat Detection</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Proactive threat detection and response capabilities to identify and neutralize threats before they impact
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {threatDetection.map((threat, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">{threat.category}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{threat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Capabilities:</h4>
                    <ul className="space-y-1">
                      {threat.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-300">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">{threat.effectiveness}</div>
                    <div className="text-xs text-gray-400">Effectiveness Rate</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Compliance & Regulatory Standards</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Ensure your business meets all regulatory requirements with our comprehensive compliance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {complianceFrameworks.map((framework, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">{framework.name}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">{framework.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {framework.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {framework.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Security Expertise</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Our security professionals are certified in the latest cybersecurity technologies and methodologies to
                protect your business.
              </p>
              <div className="space-y-6">
                {securityTechnologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm md:text-base">{tech.name}</span>
                      <span className="text-red-400 text-sm md:text-base">{tech.proficiency}%</span>
                    </div>
                    <Progress value={tech.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-600/30">
                <CardContent className="p-6 md:p-8">
                  <Lock className="w-10 h-10 md:w-12 md:h-12 text-red-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Zero Trust Architecture</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Implement zero trust security model with continuous verification and least privilege access
                    principles.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Never trust, always verify</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Least privilege access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Continuous monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
                <CardContent className="p-6 md:p-8">
                  <Eye className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Security Operations Center</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    24/7 security monitoring and incident response with advanced SIEM and threat intelligence.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">24/7 monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Rapid incident response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Threat intelligence</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Security Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Real-world security implementations that protected businesses and ensured regulatory compliance.
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
                    <h4 className="font-semibold mb-2 text-red-400 text-sm md:text-base">Security Solution:</h4>
                    <p className="text-gray-300 text-sm md:text-base">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-400 text-sm md:text-base">Security Results:</h4>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Security Service Packages</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Comprehensive security packages designed to protect businesses of all sizes from cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Security Essentials</CardTitle>
                <CardDescription className="text-sm md:text-base">Basic security for small businesses</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-red-400">$12,000</div>
                <div className="text-xs md:text-sm text-gray-400">Security assessment + implementation</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Security assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic firewall setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Antivirus deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Security training</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">6 months support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Security Professional</CardTitle>
                <CardDescription className="text-sm md:text-base">Comprehensive security solution</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-red-400">$45,000</div>
                <div className="text-xs md:text-sm text-gray-400">Complete security + compliance</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced threat detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">SIEM implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Compliance framework</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Penetration testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">12 months support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Security Enterprise</CardTitle>
                <CardDescription className="text-sm md:text-base">Enterprise-grade security solution</CardDescription>
                <div className="text-2xl md:text-3xl font-bold text-red-400">Custom</div>
                <div className="text-xs md:text-sm text-gray-400">Based on requirements</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Zero trust architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom security solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated security team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced threat hunting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise SLA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Ongoing security consulting</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-red-900/20 to-pink-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Secure Your Business Today</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions and
            ensure compliance with industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3">
              Get Security Assessment
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
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Protecting businesses with advanced cybersecurity solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Security Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Application Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Compliance & Governance
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Threat Detection
                  </Link>
                </li>
                <li>
                  <Link href="/services/security" className="hover:text-white transition-colors">
                    Penetration Testing
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
                  <Link href="/services/cloud" className="hover:text-white transition-colors">
                    Cloud Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom" className="hover:text-white transition-colors">
                    Secure Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-ml" className="hover:text-white transition-colors">
                    AI Security
                  </Link>
                </li>
                <li>
                  <Link href="/services/iot" className="hover:text-white transition-colors">
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
