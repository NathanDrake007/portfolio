import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  longDescription,
  category,
  status,
  featured,
  technologies,
  startDate,
  endDate,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "codeLink": links.github,
  "hostedLink": links.live,
  "documentationLink": links.documentation,
  challenges,
  learnings
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await client.fetch<SanityDocument>(
    PROJECT_QUERY,
    { slug: params.slug },
    options
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Link href="/projects" className="hover:underline mb-8 inline-block">
        ← Back to projects
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        {project.featuredImage && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={project.featuredImage}
              alt={project.featuredImageAlt || project.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="capitalize">
              {project.category.replace("-", " ")}
            </span>
            <span>•</span>
            <span className="capitalize">
              {project.status.replace("-", " ")}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View Code
              </Link>
            )}
            {project.hostedLink && (
              <Link
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Live Demo
              </Link>
            )}
            {project.documentationLink && (
              <Link
                href={project.documentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Documentation
              </Link>
            )}
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {Array.isArray(project.longDescription) && (
            <PortableText value={project.longDescription} />
          )}
        </div>

        {project.challenges && project.challenges.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((challenge: string, index: number) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.learnings.map((learning: string, index: number) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Started: {new Date(project.startDate).toLocaleDateString()}
            {project.endDate &&
              ` • Completed: ${new Date(project.endDate).toLocaleDateString()}`}
          </p>
        </div>
      </article>
    </main>
  );
}
