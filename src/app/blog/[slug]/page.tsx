import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Header from '@/components/Header'
import { ArrowLeft } from 'lucide-react'
import 'katex/dist/katex.min.css'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-black min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white-200">
        <Header />
      </div>

      <div className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white-700 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white">{post.title}</h1>

            <div className="flex items-center gap-4 text-white-700">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </header>

          {post.image && (
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none text-white
              prose-headings:font-bold prose-headings:text-white prose-headings:mt-8 prose-headings:mb-6
              prose-p:text-white prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-gray-300 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:p-4
              prose-ul:my-4 prose-ul:space-y-2 prose-ol:my-4 prose-ol:space-y-2 prose-li:text-white prose-li:leading-relaxed
              prose-hr:border-gray-600 prose-hr:my-8
              prose-blockquote:text-white prose-blockquote:border-l-gray-500 prose-blockquote:my-6
              prose-img:rounded-lg prose-img:my-6
              [&>*]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ol]:list-decimal [&>ol]:ml-6"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </div>
    </main>
  )
}
