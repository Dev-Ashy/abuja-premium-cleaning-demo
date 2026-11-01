"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const serviceAreas = [
  "Abuja (All Areas)", "Gwarinpa", "Maitama", "Asokoro", "Wuse", "Jabi", "Kubwa", "Garki", "Apo", "Dutse", "Karu", "Bwari", "Zuba"
]

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Green Cleaning",
  "Move-in/Move-out",
  "Specialty Services"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: "",
    preferredDate: "",
    termsAccepted: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
      {/* Header */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to experience premium cleaning services in Abuja? Contact us today and get a personalized quote for your specific needs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Request a Free Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 801 234 5678"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-sm font-medium">Service Type *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      options={services.map(service => ({ value: service, label: service }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="area" className="text-sm font-medium">Service Area *</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) => setFormData({ ...formData, area: value })}
                      options={serviceAreas.map(area => ({ value: area, label: area }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDate" className="text-sm font-medium">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Message/Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special requirements or details about your cleaning needs...
                  "
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 hover:underline">Privacy Policy</a> *
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-premium"
                  disabled={!formData.termsAccepted}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us Directly
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Call Us</div>
                    <div className="text-green-600 dark:text-green-400 font-medium">+234 801 234 5678</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">WhatsApp</div>
                    <div className="text-green-600 dark:text-green-400 font-medium">+234 801 234 5678</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-green-600 dark:text-green-400 font-medium">info@cleaningabuja.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">Abuja, Nigeria</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Business Hours
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Monday - Friday</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">8:00 AM - 8:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Saturday</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sunday</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Emergency Services Only</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Us?
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
                  { icon: Shield, text: "Fully Insured & Licensed" },
                  { icon: Award, text: "Certified Professionals" },
                  { icon: Clock, text: "24/7 Customer Support" }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}