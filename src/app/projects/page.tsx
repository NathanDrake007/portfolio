import Link from "next/link";
import React from "react";
import { Article } from "./article";
import prisma from "@/lib/db";
import Header from "@/components/global/header";

async function getData() {
  const featuredProjects = await prisma.project.findMany({
    where: {
      featured: true,
    },
  });

  const others = await prisma.project.findMany({
    where: {
      featured: false,
    },
  });
  return {
    others,
    featuredProjects,
  };
}
export default async function ProjectsPage() {
  const { featuredProjects, others } = await getData();

  // const others = projects.filter((p) => !p.featured);
  return (
    <div className="w-2/3">
      <Header
        title="Projects"
        subtitle="Some of the projects are from work and some are on my own time."
      />

      <div className="grid grid-cols-2 gap-y-8 pb-8 gap-x-8">
        {featuredProjects.map((project) => (
          <Article key={project.id} project={project} />
        ))}
      </div>
      <div className="w-full h-px bg-zinc-800" />
      <div className="flex flex-col items-start gap-y-4 py-8">
        {others.map((project) => (
          <Article key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
