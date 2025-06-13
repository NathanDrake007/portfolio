import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readingTime: string;
  content: string;
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      readingTime: data.readingTime,
      content,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      readingTime: data.readingTime,
      content,
    };
  } catch (error) {
    return null;
  }
}
