import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const BLOG_POST_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  excerpt,
  content,
  category,
  tags,
  readTime,
  publishedAt,
  featured,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(
    BLOG_POST_QUERY,
    { slug: params.slug },
    options
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/blog" className="hover:underline mb-8 inline-block">
        ← Back to posts
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        {post.featuredImage && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-md">
              {post.category.replace("-", " ")}
            </span>
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {Array.isArray(post.content) && <PortableText value={post.content} />}
        </div>
      </article>
    </main>
  );
}
