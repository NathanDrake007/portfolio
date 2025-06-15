import Link from "next/link";
import { Suspense } from "react";
import { client } from "@/lib/sanity";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogLoading from "./loading";
import { capitalize } from "@/lib/utils";

const BLOG_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  tags,
  readTime,
  publishedAt,
  featured,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  author
}`;

async function BlogList({ category }: { category?: string }) {
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(BLOG_QUERY, {}, options);

  const filteredPosts =
    category && category !== "all"
      ? posts.filter((post) => post.category === category)
      : posts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={post._id}
          className="block"
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            {post.featuredImage && (
              <div className="relative w-full h-48">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <CardHeader className="flex-none">
              <div className="flex items-center justify-between gap-2 mb-2">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                {post.featured && (
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded-full whitespace-nowrap">
                    Featured
                  </span>
                )}
              </div>
              <CardDescription className="text-sm mb-3">
                {post.excerpt}
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="capitalize">
                  {post.category.replace("-", " ")}
                </span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-none">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.tags) &&
                  post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </CardContent>
            <CardFooter className="flex-none mt-auto pt-4 border-t">
              <div className="w-full">
                <div className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()}
                  {post.readTime && ` • ${post.readTime} min read`}
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default async function BlogPage() {
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(BLOG_QUERY, {}, options);

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {capitalize(category.replace("-", " "))}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Suspense fallback={<BlogLoading />}>
            <BlogList />
          </Suspense>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Suspense fallback={<BlogLoading />}>
              <BlogList category={category} />
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
