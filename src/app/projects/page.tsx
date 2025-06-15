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
import ProjectsLoading from "./loading";
import { capitalize } from "@/lib/utils";

const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  category,
  status,
  featured,
  order,
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

async function ProjectsList({ category }: { category?: string }) {
  const options = { next: { revalidate: 30 } };
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  const filteredProjects =
    category && category !== "all"
      ? projects.filter((project) => project.category === category)
      : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <Link href={`/projects/${project.slug.current}`} key={project._id}>
          <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
            {project.featuredImage && (
              <div className="relative w-full h-48">
                <Image
                  src={project.featuredImage}
                  alt={project.featuredImageAlt || project.title}
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="capitalize">
                  {project.category.replace("-", " ")}
                </span>
                <span>•</span>
                <span className="capitalize">
                  {project.status.replace("-", " ")}
                </span>
              </div>
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
              <div className="w-full">
                <div className="flex flex-wrap gap-4 mb-3">
                  {project.codeLink && (
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      Documentation
                    </Link>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(project.startDate).toLocaleDateString()} -{" "}
                  {project.endDate
                    ? new Date(project.endDate).toLocaleDateString()
                    : "Present"}
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default async function ProjectsPage() {
  const options = { next: { revalidate: 30 } };
  const projects = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  const categories = Array.from(
    new Set(projects.map((project) => project.category).filter(Boolean))
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

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
          <Suspense fallback={<ProjectsLoading />}>
            <ProjectsList />
          </Suspense>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Suspense fallback={<ProjectsLoading />}>
              <ProjectsList category={category} />
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
