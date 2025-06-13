import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  codeLink: string;
  hostedLink: string;
  featured: boolean;
  technologies: string[];
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      codeLink: data.codeLink,
      hostedLink: data.hostedLink,
      featured: data.featured || false,
      technologies: data.technologies || [],
      content,
    };
  });

  return allProjectsData;
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      codeLink: data.codeLink,
      hostedLink: data.hostedLink,
      featured: data.featured || false,
      technologies: data.technologies || [],
      content,
    };
  } catch (error) {
    return null;
  }
}
