import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/projects" className="hover:underline mb-8 inline-block">
        ← Back to projects
      </Link>

      <article>
        {project.image && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-600 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View Code →
              </Link>
            )}
            {project.hostedLink && (
              <Link
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Live Demo →
              </Link>
            )}
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
