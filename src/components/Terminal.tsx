'use client'

export default function Terminal() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="space-y-8">
        <div>
          <h2 className="font-mono text-2xl font-bold text-white">Skills & Stack</h2>
        </div>
        <div className="space-y-6 rounded-lg border border-zinc-800 bg-zinc-950 p-6">
          <div>
            <p className="font-mono text-sm text-cyan-400">$ cat skills.txt</p>
            <div className="mt-4 space-y-3">
              <div>
                <span className="text-zinc-500">Frontend:</span>
                <span className="ml-3 text-zinc-300">
                  React • Next.js • TypeScript • Tailwind CSS
                </span>
              </div>
              <div>
                <span className="text-zinc-500">Backend:</span>
                <span className="ml-3 text-zinc-300">
                  Node.js • FastAPI • Python • PostgreSQL
                </span>
              </div>
              <div>
                <span className="text-zinc-500">Security:</span>
                <span className="ml-3 text-zinc-300">
                  Burp Suite • Nmap • Metasploit • OWASP
                </span>
              </div>
              <div>
                <span className="text-zinc-500">Cloud/DevOps:</span>
                <span className="ml-3 text-zinc-300">
                  AWS • Docker • Kubernetes • Terraform
                </span>
              </div>
              <div>
                <span className="text-zinc-500">AI/ML:</span>
                <span className="ml-3 text-zinc-300">
                  OpenAI • LangChain • Python • TensorFlow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
