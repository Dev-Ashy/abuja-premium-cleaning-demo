"use client"

import { Home, Building2, Sprout, Sparkles, Heart, Users, CheckCircle, ArrowRight, Clock, Award, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive cleaning for homes, apartments, and villas",
    features: ["Weekly & Bi-weekly", "Move-in/Move-out", "Post-construction", "Furnace cleaning", "Window cleaning", "Carpet deep cleaning"],
    price: "Starting from ₦15,000",
    duration: "3-6 hours",
    image: "https://images.unsplash.com/photo-1560448204-61dc4f1992b9?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning",
    features: ["Daily & Weekly", "Business hours", "Emergency services", "IT cleanrooms", "Restroom sanitation", "Parking lot cleaning"],
    price: "Starting from ₦25,000",
    duration: "4-8 hours",
    image: "https://images.unsplash.com/photo-1497366216548-3745543d16b4?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Sprout,
    title: "Green Cleaning",
    description: "Eco-friendly cleaning with non-toxic products",
    features: ["Plant-based solutions", "Pet-safe", "Hypoallergenic", "Biodegradable", "Renewable ingredients", "Zero waste commitment"],
    price: "Starting from ₦18,000",
    duration: "3-5 hours",
    image: "https://images.unsplash.com/photo-1485955900706-acada3653a2e?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough cleaning service for every surface and detail",
    features: ["Carpet & upholstery", "Windows & mirrors", "Kitchen & bathroom", "Baseboards & trim", "Ceiling fans", "Light fixtures"],
    price: "Starting from ₦35,000",
    duration: "6-12 hours",
    image: "https://images.unsplash.com/photo-1484480974693-21f3ac557951?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Heart,
    title: "Specialty Services",
    description: "Custom cleaning solutions for special needs and occasions",
    features: ["Post-event cleanup", "Hospital disinfection", "Restaurant kitchen", "Healthcare facilities", "Pet accident cleanup", "Mold remediation"],
    price: "Starting from ₦40,000",
    duration: "4-10 hours",
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800&h=600&fit=crop&auto=format"
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "Trained cleaning professionals for your business needs",
    features: ["Background checked", "Insured", "Experienced", "Motivated team", "Flexible scheduling", "Training programs"],
    price: "Custom pricing",
    duration: "Flexible",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format"
  }
]

export default function ServicesPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
      {/* Header */}
      <section ref={headerRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Premium Cleaning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of professional cleaning services designed to meet 
              your specific needs, whether for your home or business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                          <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full btn-premium">
                        Book This Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're committed to delivering exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Certified Experts", desc: "Professional training and certification" },
              { icon: Shield, title: "Fully Insured", desc: "Comprehensive protection for your property" },
              { icon: Clock, title: "On-Time Service", desc: "Punctual arrival and completion" },
              { icon: CheckCircle, title: "Satisfaction Guarantee", desc: "100% money-back guarantee" }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}