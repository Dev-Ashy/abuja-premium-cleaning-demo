"use client"

import { ArrowRight, CheckCircle, Clock, Phone, Star, MessageCircle, Calendar, Home, Building2, Sprout, Sparkles, Heart, Users, Award, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Abuja service areas
const abujaAreas = [
  "Gwarinpa", "Maitama", "Asokoro", "Wuse", "Jabi", "Kubwa", "Garki", "Apo", "Dutse", "Karu", "Bwari", "Zuba"
]

// Services data
const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Deep cleaning for homes, apartments, and villas",
    features: ["Weekly & Bi-weekly", "Move-in/Move-out", "Post-construction", "Furnace cleaning"]
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning",
    features: ["Daily & Weekly", "Business hours", "Emergency services", "IT cleanrooms"]
  },
  {
    icon: Sprout,
    title: "Green Cleaning",
    description: "Eco-friendly cleaning with non-toxic products",
    features: ["Plant-based solutions", "Pet-safe", "Hypoallergenic", "Biodegradable"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive cleaning service for every surface",
    features: ["Carpet & upholstery", "Windows & mirrors", "Kitchen & bathroom", "Baseboards & trim"]
  },
  {
    icon: Heart,
    title: "Specialty Services",
    description: "Custom cleaning solutions for special needs",
    features: ["Post-event cleanup", "Hospital disinfection", "Restaurant kitchen", "Healthcare facilities"]
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "Trained cleaning professionals for your business",
    features: ["Background checked", "Insured", "Experienced", "Motivated team"]
  }
]

// Testimonials data with Abuja locations
const testimonials = [
  {
    name: "Amina Abdullahi",
    location: "Maitama",
    service: "Residential Cleaning",
    quote: "The team at Abuja Premium Cleaning transformed my home. Their attention to detail is unmatched - they clean every corner with care and professionalism.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544717302-de2935e2f895?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "Dr. Olumide Adeyemi",
    location: "Asokoro",
    service: "Commercial Cleaning",
    quote: "Since hiring them for our clinic, patient satisfaction has increased. The medical-grade cleaning protocols give us peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "Fatima Garba",
    location: "Wuse",
    service: "Weekly Cleaning",
    quote: "My kids love the clean house! The team is reliable and professional. They always arrive on time and do exceptional work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897724-172a0d72d62d?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "John Okonkwo",
    location: "Gwarinpa",
    service: "Deep Cleaning",
    quote: "Best investment for our office. The team understands business needs and provides consistent, high-quality service every single time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
  }
]

// Why choose us features
const whyChooseUs = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Trained, background-checked staff with extensive experience"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for your peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and emergency assistance"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "100% money-back guarantee if you're not completely satisfied"
  }
]

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Book Online",
    description: "Schedule your cleaning service with our simple online form"
  },
  {
    step: "02",
    title: "Confirm & Assign",
    description: "We'll confirm your booking and assign a dedicated team"
  },
  {
    step: "03",
    title: "Professional Service",
    description: "Our vetted cleaners arrive on time, every time"
  },
  {
    step: "04",
    title: "Satisfied Results",
    description: "Enjoy your pristine space and leave a tip if you love it"
  }
]

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={heroRef} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Abuja's Premium Cleaning Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Premium Cleaning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Services Abuja
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Transform your living and working spaces with our expert cleaning team. 
              Trusted by families and businesses across Abuja, delivering spotless results every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                asChild
                size="xl"
                className="btn-premium group"
              >
                <Link href="tel:+2349012345678" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="xl"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 border-2 border-green-200 hover:border-green-300"
              >
                <Link href="https://wa.me/2349012345678" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Quote
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Users, value: "500+", label: "Happy Clients" },
                { icon: Award, value: "10+ Years", label: "Experience" },
                { icon: Shield, value: "100% Insured", label: "Coverage" },
                { icon: CheckCircle, value: "4.9★", label: "Rating" }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-2">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Premium Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From residential homes to commercial spaces, we deliver exceptional cleaning results 
              with attention to every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover group">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800/30 transition-colors">
                        <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Premium Cleaning Service?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We pride ourselves on delivering exceptional cleaning experiences that exceed expectations. 
                Our commitment to excellence sets us apart in the industry.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c6453891414a?w=800&h=600&fit=crop&auto=format"
                  alt="Professional cleaning team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">15min</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Average response time
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Getting premium cleaning service has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied customers across Abuja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.location} • {testimonial.service}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Service Areas in Abuja
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We provide premium cleaning services across all major areas of Abuja
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {abujaAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors cursor-pointer">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {area}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Don't see your area? We provide services in other locations too!
            </p>
            <Button size="lg" variant="outline">
              Contact Us for Custom Service
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Premium Cleaning?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Book your first cleaning service today and get 20% off your next service with our new customer special!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link href="tel:+2349012345678" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Link>
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <Link href="https://wa.me/2349012345678" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-green-100 text-sm">
              * First-time customers only. Valid for new customers only.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}