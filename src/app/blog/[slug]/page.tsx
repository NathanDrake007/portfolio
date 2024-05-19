import BlogImage from "@/components/blog/content/ImageBlock";
import CodeBlock from "@/components/blog/content/codeBlock";
import Divider from "@/components/blog/content/divider";
import Heading from "@/components/blog/content/headingBlock";
import Link from "@/components/blog/content/linkBlock";
import ListBlock from "@/components/blog/content/listBlock";
import TextBlock from "@/components/blog/content/textBlock";
import prisma from "@/lib/db";
import { getFormattedDate } from "@/lib/helpers";
import { ContentType } from "@/lib/types";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

async function getData(slug: number) {
  const blogs = await prisma.post.findFirst({ where: { id: slug } });
  // console.log(blogs);
  return blogs;
}
export default async function page({ params }: Props) {
  const blog = await getData(parseInt(params.slug));
  if (!blog) return <div>Error</div>;

  const content = JSON.parse(blog.content) as [any];
  console.log(content);
  return (
    <div className="w-2/3">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{`Published on ${getFormattedDate(
        blog.createdAt
      )}`}</p>

      <div className="prose lg:prose-lg">
        {content.map((element, idx) => {
          if (element.type === ContentType.Pargraph) {
            return <TextBlock key={idx}>{element.data.text}</TextBlock>;
          } else if (element.type === ContentType.Code) {
            return (
              <CodeBlock
                key={idx}
                codeString={element.data.code}
                lang={element.data.language}
              />
            );
          } else if (element.type === ContentType.Heading) {
            return (
              <Heading
                key={idx}
                heading={element.data.text}
                size={element.data.size}
              />
            );
          } else if (element.type === ContentType.Image) {
            return <BlogImage key={idx} src={element.content} alt="hello" />;
          } else if (element.type === ContentType.Divider) {
            return <Divider key={idx} />;
          } else if (element.type === ContentType.Link) {
            return (
              <Link key={idx} href={element.content}>
                here
              </Link>
            );
          } else if (element.type == ContentType.List) {
            return <ListBlock key={idx} items={element.data.items} />;
          }
        })}
      </div>
    </div>
  );
}
