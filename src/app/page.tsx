import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faFile,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getFeaturedBlogPosts } from "@/lib/mdx";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const recentPosts = getFeaturedBlogPosts(3);
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* About Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Profile Image - Order first on mobile */}
              <div className="order-1 md:order-2 md:ml-auto w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg flex-shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Sakthi Nathan"
                  fill
                  className="object-cover object-right"
                  priority
                />
              </div>

              {/* Text Content - Order second on mobile */}
              <div className="order-2 md:order-1 flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Sakthi Nathan
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-4">
                  Software Engineer 2 at Comcast - FreeWheel
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  I&apos;m a software engineer passionate about building
                  scalable and efficient systems. Currently working on
                  distributed systems and microservices architecture.
                </p>
                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-center md:text-left">
                    Skills
                  </h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Go
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      gRPC
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Gin
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      MySQL
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Redis
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Aerospike
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Kafka
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Prometheus
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                      Grafana
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                  <Link
                    href="https://github.com/NathanDrake007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/sakthinathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </Link>
                  <Link
                    href="https://twitter.com/sakthinathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                  </Link>
                </div>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="w-4 h-4" />
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>

            {/* Timeline items */}
            <div className="space-y-6 sm:space-y-8">
              {/* Current Role */}
              <div className="relative pl-10 sm:pl-12">
                <div className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white dark:bg-zinc-900"></div>
                </div>
                <div className="bg-white dark:bg-zinc-800/50 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      Software Engineer 2
                    </h3>
                    <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-2 sm:mb-3">
                    Comcast - FreeWheel
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mb-3 sm:mb-4">
                    Working on advanced advertising technology solutions,
                    focusing on programmatic advertising and real-time bidding
                    systems.
                  </p>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 sm:mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Go
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        gRPC
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Gin
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        MySQL
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Redis
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Aerospike
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Kafka
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Prometheus
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Grafana
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Role */}
              <div className="relative pl-10 sm:pl-12">
                <div className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white dark:bg-zinc-900"></div>
                </div>
                <div className="bg-white dark:bg-zinc-800/50 rounded-lg p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      Software Development Engineer
                    </h3>
                    <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      2022 - 2024
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-2 sm:mb-3">
                    Zoho Corporation
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mb-3 sm:mb-4">
                    Developed and maintained internal tools and applications,
                    focusing on network device monitoring and iOS app
                    development. Implemented solutions for codebase
                    synchronization and operational efficiency improvements.
                  </p>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2 sm:mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Java
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        JavaScript
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Node.js
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        MongoDB
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Express
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        React
                      </span>
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section - disabled */}

        {/* Featured Projects Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="flex items-center gap-x-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
            >
              <span>View all projects</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="bg-white hover:bg-zinc-50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/70 transition-colors"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full h-48 sm:w-48 sm:h-48 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:p-6">
                    <div className="flex flex-col h-full">
                      <div>
                        <CardTitle className="text-lg sm:text-xl mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mb-4">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-4">
                          <Link
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            View Code
                          </Link>
                          {project.hostedLink && (
                            <Link
                              href={project.hostedLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                            >
                              Live Demo
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
