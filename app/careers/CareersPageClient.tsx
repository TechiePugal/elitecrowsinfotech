"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  CheckCircle,
  Users,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Briefcase,
  Heart,
  Coffee,
  Laptop,
  Globe,
} from "lucide-react"

export default function CareersPageClient() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹12-18 LPA",
      description: "Build scalable web applications using React, Node.js, and cloud technologies",
      requirements: [
        "4+ years experience with React and Node.js",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong knowledge of databases and APIs",
        "Experience with microservices architecture",
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"],
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Data Science",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-22 LPA",
      description: "Develop and deploy machine learning models for business applications",
      requirements: [
        "3+ years experience in ML/AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud ML services",
        "Strong mathematical and statistical background",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "Docker", "MLOps"],
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud & Infrastructure",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹18-25 LPA",
      description: "Design and implement cloud architecture solutions for enterprise clients",
      requirements: [
        "5+ years experience in cloud architecture",
        "AWS/Azure/GCP certifications preferred",
        "Experience with Infrastructure as Code",
        "Strong understanding of DevOps practices",
      ],
      skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker", "DevOps"],
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹14-20 LPA",
      description: "Implement security measures and conduct security assessments for client projects",
      requirements: [
        "3+ years experience in cybersecurity",
        "Knowledge of security frameworks (OWASP, NIST)",
        "Experience with penetration testing",
        "Security certifications preferred (CISSP, CEH)",
      ],
      skills: ["Penetration Testing", "SIEM", "Security Auditing", "Compliance", "Risk Assessment"],
    },
    {
      title: "IoT Solutions Developer",
      department: "IoT & Edge Computing",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹10-16 LPA",
      description: "Develop IoT applications and edge computing solutions",
      requirements: [
        "2+ years experience in IoT development",
        "Knowledge of IoT protocols (MQTT, CoAP)",
        "Experience with embedded systems",
        "Understanding of edge computing concepts",
      ],
      skills: ["IoT Protocols", "Embedded Systems", "Edge Computing", "Python", "C++", "Arduino"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Coimbatore / Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8-14 LPA",
      description: "Create intuitive and engaging user experiences for web and mobile applications",
      requirements: [
        "2+ years experience in UI/UX design",
        "Proficiency in Figma, Adobe Creative Suite",
        "Understanding of design systems",
        "Experience with user research and testing",
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems"],
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and equity options",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Flexible Work Arrangements",
      description: "Remote work options, flexible hours, and work-life balance",
      icon: <Laptop className="w-8 h-8" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Learning & Development",
      description: "Continuous learning opportunities, certifications, and conference attendance",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Modern Office",
      description: "State-of-the-art office with latest technology and comfortable workspaces",
      icon: <Coffee className="w-8 h-8" />,
    },
    {
      title: "Global Opportunities",
      description: "Work with international clients and opportunities for global assignments",
      icon: <Globe className="w-8 h-8" />,
    },
  ]

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and encourage creative problem-solving",
    },
    {
      title: "Quality Excellence",
      description: "We deliver exceptional quality in everything we do, exceeding client expectations",
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and foster a collaborative environment",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous skill development",
    },
    {
      title: "Client Success",
      description: "Our success is measured by the success of our clients and their satisfaction",
    },
    {
      title: "Work-Life Balance",
      description: "We promote a healthy work-life balance for sustainable long-term success",
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
                <Users className="w-5 h-5 text-white" />
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
              <Button className="bg-purple-600 hover:bg-purple-700">Apply Now</Button>
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
          <span className="text-white">Careers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-purple-900/50 border-purple-600 text-purple-300">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Build the Future with Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Join EliteCrows Infotech and be part of an innovative team that's transforming businesses with
              cutting-edge technology. We offer exciting opportunities, competitive benefits, and a culture of
              continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-6 md:px-8 py-3">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We're guided by core values that shape our culture and drive our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We offer comprehensive benefits and a supportive environment for your professional and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Explore exciting career opportunities and find the perfect role to advance your career.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-purple-600 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-purple-400">{position.title}</CardTitle>
                      <CardDescription className="text-gray-300 mt-2">{position.description}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-purple-900/50 border-purple-600 text-purple-300">
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="bg-gray-800 border-gray-600">
                        {position.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{position.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{position.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{position.type}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                          <span className="text-sm text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-gray-800 border-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() =>
                        window.open(
                          "mailto:elitecrowsindia@gmail.com?subject=Application for " +
                            position.title +
                            "&body=Dear EliteCrows Team,%0D%0A%0D%0AI am interested in applying for the " +
                            position.title +
                            " position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0AExperience: %0D%0A%0D%0ABest regards",
                          "_blank",
                        )
                      }
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 md:py-20 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Apply Now</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                Ready to join our team? Submit your application and let's start a conversation about your future with
                us.
              </p>
            </div>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl">Job Application</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      placeholder="John Doe"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      placeholder="+91 98765 43210"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Position Applied For *</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-purple-500">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="fullstack">Senior Full Stack Developer</SelectItem>
                        <SelectItem value="aiml">AI/ML Engineer</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions Architect</SelectItem>
                        <SelectItem value="security">Cybersecurity Specialist</SelectItem>
                        <SelectItem value="iot">IoT Solutions Developer</SelectItem>
                        <SelectItem value="design">UI/UX Designer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Years of Experience *</label>
                    <Select>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-purple-500">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                        <SelectItem value="6-8">6-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Location *</label>
                    <Input
                      placeholder="City, State"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">LinkedIn Profile</label>
                  <Input
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Portfolio/GitHub URL</label>
                  <Input
                    placeholder="https://github.com/yourusername"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cover Letter *</label>
                  <Textarea
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px] focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Resume Upload *</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-purple-600 transition-colors">
                    <div className="text-gray-400 mb-2">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Click to upload or drag and drop
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                </div>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg"
                  onClick={() =>
                    window.open(
                      "mailto:elitecrowsindia@gmail.com?subject=Job Application&body=Dear EliteCrows Team,%0D%0A%0D%0AI would like to apply for a position at your company.%0D%0A%0D%0APlease find my application details below:%0D%0A%0D%0AName: %0D%0AEmail: %0D%0APhone: %0D%0APosition: %0D%0AExperience: %0D%0A%0D%0ABest regards",
                      "_blank",
                    )
                  }
                >
                  Apply via Email
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Our HR team is here to help you with any questions about our open positions, application process, or
              company culture.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-600/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email HR Team</h3>
                  <p className="text-gray-300 mb-4">careers@elitecrows.com</p>
                  <Badge variant="outline" className="text-xs">
                    Response within 24 hours
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-600/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Call HR Team</h3>
                  <p className="text-gray-300 mb-4">+91 63831 06107</p>
                  <Badge variant="outline" className="text-xs">
                    Mon-Fri 9AM-6PM IST
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 px-6 md:px-8 py-3"
                onClick={() =>
                  window.open(
                    "mailto:elitecrowsindia@gmail.com?subject=Interview Schedule Request&body=Dear EliteCrows Team,%0D%0A%0D%0AI would like to schedule an interview call.%0D%0A%0D%0APreferred time slots:%0D%0A1. %0D%0A2. %0D%0A3. %0D%0A%0D%0ABest regards",
                    "_blank",
                  )
                }
              >
                Schedule Interview Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-3"
              >
                Download Company Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">EliteCrows Infotech</span>
              </Link>
              <p className="text-gray-400 text-sm">Building the future of technology, one innovation at a time.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Open Positions
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Company Culture
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Application Process
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">HR Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>careers@elitecrows.com</span>
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

            <div>
              <h3 className="font-semibold mb-4 text-sm md:text-base">Follow Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Glassdoor
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EliteCrows Infotech. All rights reserved. | Equal Opportunity Employer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
