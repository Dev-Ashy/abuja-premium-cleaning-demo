"use client"

import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Twitter, Clock, CheckCircle, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { name: "Residential Cleaning", href: "/services#residential" },
    { name: "Commercial Cleaning", href: "/services#commercial" },
    { name: "Deep Cleaning", href: "/services#deep" },
    { name: "Green Cleaning", href: "/services#green" },
    { name: "Move-in/Move-out", href: "/services#move" },
    { name: "Specialty Services", href: "/services#specialty" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
    { name: "Franchise", href: "/franchise" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Customer Help", href: "/help" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQs", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const abujaAreas = [
  "Gwarinpa", "Maitama", "Asokoro", "Wuse", "Jabi", "Kubwa", "Garki", "Apo", "Dutse", "Karu", "Bwari", "Zuba"
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-500">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-2xl">Abuja Cleaning</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              Premium residential and commercial cleaning services across Abuja. 
              Certified professionals, eco-friendly products, and 24/7 customer support.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-white font-semibold">+234 801 234 5678</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-white font-semibold">+234 801 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">info@cleaningabuja.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">Abuja, Nigeria</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button size="sm" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {abujaAreas.map((area) => (
                <div key={area} className="text-sm text-gray-300">
                  • {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust & Quality Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Fully Insured", desc: "Protection for your property" },
              { icon: Award, title: "Certified Experts", desc: "Professional training" },
              { icon: CheckCircle, title: "100% Satisfaction", desc: "Money-back guarantee" },
              { icon: Clock, title: "24/7 Support", desc: "Always here to help" }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-900/30 rounded-lg mb-3">
                    <Icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="font-semibold text-white mb-1">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Abuja Cleaning Services. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}