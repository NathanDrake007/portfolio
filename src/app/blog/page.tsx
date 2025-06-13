import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="text-zinc-300 line-clamp-3">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col items-start text-zinc-400 text-sm">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
