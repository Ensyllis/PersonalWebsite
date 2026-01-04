'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Using lucide-react for icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close menu after clicking a link
    }
  }

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'My Projects' },
    { href: '#behavioral_qa', text: 'Behavioral QA' },
    { href: '/blog', text: 'Blog', isExternal: true },
    { href: '#contact', text: 'Contact' },
  ]

  return (
    <header className="relative bg-inherit w-full">
      <div className="flex justify-between items-center py-6 px-8">
        {/* Logo/Title on the left */}
        <Link href="/">
          <div className="text-2xl font-bold text-black hover:text-blue-500 transition duration-200">
            Joseph Shalom Liu
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-black"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (!link.isExternal) {
                      scrollToSection(link.href.slice(1))
                    }
                  }}
                  className="cursor-pointer text-black hover:text-green-500 transition duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden absolute w-full bg-inherit shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col px-8 pb-6">
          {navLinks.map((link) => (
            <li key={link.href} className="py-2">
              <Link
                href={link.href}
                onClick={() => {
                  if (!link.isExternal) {
                    scrollToSection(link.href.slice(1))
                  } else {
                    setIsMenuOpen(false)
                  }
                }}
                className="block cursor-pointer text-black hover:text-green-500 transition duration-300"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header