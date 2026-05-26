interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Blog Post: {slug}</h1>
      <p className="text-gray-600">Blog post content coming soon...</p>
    </div>
  )
}
