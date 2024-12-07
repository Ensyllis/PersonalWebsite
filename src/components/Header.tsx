'use client'

import Link from 'next/link'

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-gray-100 w-full">
      {/* Logo/Title on the left */}
      <Link href="/">
        <div className="text-2xl font-bold hover:text-blue-500 transition duration-200">
          Joseph Shalom Liu
        </div>
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="#about" onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-green-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-green-500 transition duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-green-500 transition duration-300">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-green-500 transition duration-300">
              My Projects
            </Link>
          </li>
          <li>
            <Link href="#behavioral_qa" onClick={() => scrollToSection('behavioral_qa')} className="cursor-pointer hover:text-green-500 transition duration-300">
              Behavioral QA
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-green-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
