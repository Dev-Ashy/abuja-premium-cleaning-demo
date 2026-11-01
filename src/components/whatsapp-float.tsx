"use client"

import { MessageCircle, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "2349012345678"
  const message = "Hi! I'm interested in your cleaning services. Can you provide more information?"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      >
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>

        {/* Phone Button (appears on hover) */}
        <motion.a
          href="tel:+2349012345678"
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
        >
          <Phone className="w-5 h-5 text-white" />
        </motion.a>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-20 bottom-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2 whitespace-nowrap"
        >
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            WhatsApp Chat
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Get instant quote
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}