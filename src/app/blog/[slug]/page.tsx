import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-zinc-400">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
