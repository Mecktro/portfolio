interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
}

interface BlogListProps {
  posts?: BlogPost[]
}

export default function BlogList({ posts = [] }: BlogListProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Latest Posts</h2>
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
              </article>
            ))
          ) : (
            <p className="text-gray-600">No posts yet</p>
          )}
        </div>
      </div>
    </section>
  )
}
