import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto py-10 max-w-5xl px-4 sm:px-6">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              {project.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader className="flex-none">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded-full whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>
                <CardDescription className="text-sm mb-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-none">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-none mt-auto pt-4 border-t">
                <div className="flex flex-wrap gap-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      View Code
                    </a>
                  )}
                  {project.hostedLink && (
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
