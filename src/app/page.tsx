import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Tile from "@/components/project/tile";
import prisma from "@/lib/db";
import { getFormattedDate } from "@/lib/helpers";

async function getData() {
  const projects = await prisma.project.findMany();
  const recentPosts = await prisma.post.findMany({
    take: 3,
  });
  return {
    recentPosts,
    projects,
  };
}
export default async function Home() {
  const { projects, recentPosts } = await getData();
  const featured = projects.filter((project) => project.featured);
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="flex flex-col justify-center items-center">
        <section id="intro" className="w-2/3">
          <div className="flex items-start gap-x-16 pt-12">
            <h1 className="text-xl">Sakthi Nathan</h1>
            <p className="text-md text-justify">
              With over 2+ years of experience as a Software Development
              Engineer at Zoho, I specialize in both front-end and back-end
              development, streamlining processes and tools for operational
              efficiency. Skilled in Java, JavaScript, Nodejs, MongoDB, Express,
              React, Docker and more, I have developed tools to monitor network
              devices, enhance iOS app development, and ensure seamless codebase
              synchronization.
            </p>
          </div>
          <div className="my-8 flex items-center justify-between">
            <ul className="flex items-center gap-x-6">
              <li className="text-xl text-white">
                <Link href="mailto://drakesakthi@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </li>
              <li className="text-xl text-white">
                <Link href="https://www.linkedin.com/in/sakthi-nathan">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
              <li className="text-xl text-white">
                <Link href="https://github.com/NathanDrake007">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
            </ul>
            <Link
              href="/resume.pdf"
              className="flex items-center gap-x-2 bg-white text-black rounded-md p-1"
            >
              <h1>Resume</h1>
              <FontAwesomeIcon icon={faFile} />
            </Link>
          </div>
        </section>
        <section id="recent-post" className="w-2/3">
          <h1 className="text-xl font-bold">Recent Post</h1>
          <div className="flex py-4 gap-x-4 w-full">
            {recentPosts.map((post) => (
              <Link href="https://medium.com/@drakesakthi" key={post.id}>
                <Card className="w-80 bg-zinc-600/40 text-white flex-shrink-0">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="text-gray-200 line-clamp-3">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start text-gray-200">
                    <h2>{`Posted on ${getFormattedDate(post.createdAt)}`}</h2>
                    <p>{post.readingTime} min read</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <Link
            href="https://medium.com/@drakesakthi"
            className="flex pt-2 gap-x-2 text-blue-500 items-center hover:underline"
          >
            <h3 className="text-lg font-light">Read More</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </section>
        <section id="featured-projects" className="py-8 w-2/3">
          <h1 className="text-xl font-bold">Featured Projects</h1>
          <ul className="flex flex-col py-4 gap-y-4">
            {featured.map((project) => (
              <li key={project.id} className="border-b">
                <Tile
                  title={project.title}
                  summary={project.description}
                  image={project.image}
                  codeLink={project.codeLink}
                  hostedLink={project.hostedLink}
                />
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className="flex pt-2 gap-x-2 text-blue-500 items-center hover:underline"
          >
            <h3 className="text-lg font-light">View More</h3>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </section>
      </div>
    </div>
  );
}
