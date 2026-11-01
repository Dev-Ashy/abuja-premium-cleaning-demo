"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-500">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">Abuja Cleaning</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-green-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
              <Link href="tel:+2349012345678" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
            </Button>
            
            <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
              <Link href="https://wa.me/2349012345678" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2">
              <Button asChild variant="outline">
                <Link href="tel:+2349012345678" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Link>
              </Button>
              <Button asChild className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <Link href="https://wa.me/2349012345678" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}