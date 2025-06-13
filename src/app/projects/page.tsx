import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = getAllProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              No projects available at the moment.
            </p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="bg-white hover:bg-zinc-50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/70 transition-colors"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    View Code
                  </Link>
                  {project.hostedLink && (
                    <Link
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
