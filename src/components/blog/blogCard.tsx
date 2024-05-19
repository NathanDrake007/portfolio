import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";

export default function BlogCard({ blog }: { blog: Post }) {
  const formattedDate = (date: Date) => {
    return `${date.toLocaleString("en-us", {
      month: "long",
    })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="py-3 flex justify-between border-b">
        <div className="flex-auto">
          <span className="text-gray-400">{formattedDate(blog.createdAt)}</span>
          <div className="mt-4">
            <h3 className="font-extrabold mb-2">{blog.title}</h3>
            <p className="text-wrap font-thin">{blog.summary}</p>
          </div>
          <div className="flex item-center gap-6 mt-4">
            <span className="rounded-xl bg-gray-700 px-4 py-1">{blog.tag}</span>
            <span className="py-1">{blog.readingTime} min read</span>
          </div>
        </div>
        <Image
          src={blog.image}
          alt="blog image"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>
    </Link>
  );
}
