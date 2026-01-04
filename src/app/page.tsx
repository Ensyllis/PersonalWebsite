import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import BehavioralQA from '@/components/BehavioralQA'
import BlogCarousel from '@/components/BlogCarousel'
import { getRecentPosts } from '@/lib/blog'

export default function Home() {
  const recentPosts = getRecentPosts(3)

  return (
    <main className="bg-gray-100 text-black-900">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100">
        <Header />
      </div>

      {/* Add padding to prevent content from hiding under fixed header */}
      <div className="pt-20">
        <Introduction />

        {/* Blog Carousel Section */}
        {recentPosts.length > 0 && (
          <section className="py-16">
            <BlogCarousel posts={recentPosts} />
          </section>
        )}

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
      </div>
    </main>
  )
}