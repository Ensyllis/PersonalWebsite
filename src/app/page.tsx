import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import BehavioralQA from '@/components/BehavioralQA'

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Header />
      <Introduction />
      
      {/* Section Wrapping */}
      <section id="about" className="py-16">
        <About />
      </section>
      
      <section id="skills" className="py-16">
        <Skills />
      </section>
      
      <section id="experience" className="py-16">
        <Experience />
      </section>

      <section id="projects" className="py-16">
        <Projects />
      </section>

      <section id="behavioral_qa" className="py-16">
        <BehavioralQA />
      </section>
      
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </main>
  )
}
