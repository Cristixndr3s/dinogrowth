import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  author: string
  authorRole: string
  featured?: boolean
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((f) => f.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)
      return { slug, ...data } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): { frontmatter: Post; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  return { frontmatter: { slug, ...data } as Post, content }
}
