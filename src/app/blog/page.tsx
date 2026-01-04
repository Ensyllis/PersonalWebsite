import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Header from '@/components/Header'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100">
        <Header />
      </div>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-black">Blog</h1>
          <p className="text-xl text-gray-800 mb-12">
            Thoughts, ideas, and insights on technology and development
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer border-b border-gray-200 pb-12 hover:border-gray-300 transition-colors">
                    <div className="flex gap-8">
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-3 text-black group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-900 text-lg mb-4 line-clamp-3">
                          {post.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-700">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                      </div>

                      {post.image && (
                        <div className="hidden sm:block w-48 h-32 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
