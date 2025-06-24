"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { submitProjectInquiry, trackEvent, type ProjectFormData } from "@/lib/firebase-utils"

interface ProjectFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectFormModal({ isOpen, onClose }: ProjectFormModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ProjectFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    features: [],
  })

  const projectTypes = [
    "Web Application",
    "Mobile Application",
    "E-commerce Platform",
    "Custom ERP/CRM",
    "AI/ML Solution",
    "Cloud Migration",
    "IoT Solution",
    "Security Audit",
    "Other",
  ]

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's Discuss",
  ]

  const timelineOptions = ["1-2 months", "3-4 months", "5-6 months", "6+ months", "Flexible"]

  const commonFeatures = [
    "User Authentication",
    "Admin Dashboard",
    "Payment Integration",
    "Real-time Notifications",
    "Mobile Responsive",
    "API Integration",
    "Analytics & Reporting",
    "Multi-language Support",
    "Cloud Deployment",
    "Security Features",
  ]

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitProjectInquiry(formData)
      trackEvent("project_inquiry_submitted", {
        project_type: formData.projectType,
        budget_range: formData.budget,
        timeline: formData.timeline,
      })
      setStep(4) // Show success message
    } catch (error) {
      console.error("Error submitting form:", error)
      // Handle error - could show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      features: [],
    })
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
      <Card className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 sticky top-0 bg-gray-900 z-10 border-b border-gray-700">
          <div className="flex-1 pr-4">
            <CardTitle className="text-xl sm:text-2xl text-white">Start Your Project</CardTitle>
            <CardDescription className="text-gray-400 text-sm sm:text-base">
              Tell us about your project and we'll get back to you within 24 hours
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClose} className="text-gray-400 hover:text-white shrink-0">
            <X className="w-5 h-5" />
          </Button>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          {step === 4 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                We've received your project details. Our team will review your requirements and get back to you within
                24 hours.
              </p>
              <Button onClick={handleClose} className="bg-blue-600 hover:bg-blue-700">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        i <= step ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {i}
                    </div>
                    {i < 3 && (
                      <div className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 ${i < step ? "bg-blue-600" : "bg-gray-700"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Full Name *</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Company Name</label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Phone Number</label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Project Type *</label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Budget Range</label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Timeline</label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Project Description *</label>
                    <Textarea
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      value={formData.description}
                      onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px] focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Features & Requirements */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Features & Requirements</h3>

                  <div>
                    <label className="text-sm font-medium mb-3 block text-white">
                      Select features you need (optional):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {commonFeatures.map((feature) => (
                        <div
                          key={feature}
                          onClick={() => handleFeatureToggle(feature)}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.features.includes(feature)
                              ? "border-blue-600 bg-blue-600/20 text-blue-300"
                              : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                formData.features.includes(feature) ? "border-blue-600 bg-blue-600" : "border-gray-600"
                              }`}
                            >
                              {formData.features.includes(feature) && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.features.length > 0 && (
                    <div>
                      <label className="text-sm font-medium mb-2 block text-white">Selected Features:</label>
                      <div className="flex flex-wrap gap-2">
                        {formData.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="bg-blue-900/50 border-blue-600 text-blue-300"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="border-gray-600 text-white hover:bg-gray-800 order-2 sm:order-1"
                >
                  Previous
                </Button>

                {step === 3 ? (
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 order-1 sm:order-2"
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.projectType ||
                      !formData.description ||
                      isSubmitting
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 order-1 sm:order-2"
                    disabled={
                      (step === 1 && (!formData.name || !formData.email)) ||
                      (step === 2 && (!formData.projectType || !formData.description))
                    }
                  >
                    Next Step
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
