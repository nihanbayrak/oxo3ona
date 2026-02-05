"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-foreground" />
            <span className="text-lg md:text-xl font-light tracking-wide">Oxo3ana</span>
          </a>

          {/* Center Navigation - Desktop */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <a
            href="https://www.instagram.com/oxo3ona/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 hover:opacity-60 transition-opacity"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-16 px-6 border-b">
                  <a
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-5 h-5 bg-foreground" />
                    <span className="text-lg font-light tracking-wide">Oxo3ana</span>
                  </a>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col px-6 py-8 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center h-12 text-lg font-light hover:opacity-60 transition-opacity"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="mt-auto px-6 py-8 border-t">
                  <a
                    href="https://www.instagram.com/oxo3ona/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center h-12 text-lg font-light hover:opacity-60 transition-opacity"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
