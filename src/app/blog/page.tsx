import BlogCard from "@/components/blog/blogCard";
// import { CollectionItem } from "@/components/blog/collectionItem";
import Header from "@/components/global/header";
import prisma from "@/lib/db";

async function getData() {
  const blogs = await prisma.post.findMany();
  // const collections = await prisma.collection.findMany();
  return {
    blogs,
    // collections,
  };
}
export default async function BlogPage() {
  const {
    blogs,
    // collections
  } = await getData();

  return (
    <div className="w-2/3">
      <Header
        title="Blog"
        subtitle="Explore insightful blog posts curated to share knowledge and expertise on a diverse range of topics."
      />
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
}
