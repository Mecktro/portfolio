interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p className="text-gray-600">Blog post content coming soon...</p>
    </div>
  )
}
