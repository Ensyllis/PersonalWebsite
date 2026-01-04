import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  content?: string
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        description: data.description || '',
        image: data.image || '',
      }
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML with LaTeX support
    const processedContent = await remark()
      .use(remarkMath)  // Parse LaTeX math ($$...$$, $...$)
      .use(remarkGfm)   // GitHub Flavored Markdown (tables, strikethrough, etc.)
      .use(remarkBreaks) // Convert single line breaks to <br> tags
      .use(remarkRehype, { allowDangerousHtml: true })  // Convert to HTML AST
      .use(rehypeRaw)   // Parse raw HTML in markdown
      .use(rehypeKatex) // Render LaTeX with KaTeX
      .use(rehypeStringify) // Convert to HTML string
      .process(content)

    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      image: data.image || '',
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, count)
}
