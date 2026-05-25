// MDX utilities for processing and rendering MDX content
import matter from 'gray-matter'

export const parseMDX = (content: string) => {
  try {
    const { data, content: mdxContent } = matter(content)
    return {
      frontmatter: data,
      content: mdxContent,
    }
  } catch (error) {
    console.error('Error parsing MDX:', error)
    return {
      frontmatter: {},
      content: content,
    }
  }
}

export const getMDXMetadata = (content: string) => {
  try {
    const { data } = matter(content)
    return {
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || '',
      tags: data.tags || [],
      ...data,
    }
  } catch (error) {
    console.error('Error extracting MDX metadata:', error)
    return {
      title: '',
      description: '',
      date: new Date().toISOString(),
      author: '',
      tags: [],
    }
  }
}
