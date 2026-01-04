'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  image?: string
}

interface BlogCarouselProps {
  posts: BlogPost[]
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!posts || posts.length === 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Blog Posts</h2>
        <p className="text-gray-600">Check out my latest thoughts and articles</p>
      </div>

      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Carousel Container */}
        <div className="relative h-96 md:h-[500px]">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="h-full flex flex-col md:flex-row">
                  {/* Image Section */}
                  {post.image && (
                    <div className="w-full md:w-1/2 h-48 md:h-full bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className={`${post.image ? 'w-full md:w-1/2' : 'w-full'} p-8 md:p-12 flex flex-col justify-center`}>
                    <time className="text-sm text-gray-500 mb-3">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed line-clamp-4">
                      {post.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {posts.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous post"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Next post"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {posts.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to post ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
