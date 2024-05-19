import { Project } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 w-full cursor-default">
      <article className="text-white">
        <div className="flex items-start gap-x-8 justify-between">
          <div>
            <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
              {project.title}
            </h2>
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            </span>
            <div className="pt-4 flex gap-x-4">
              <Link
                href={project.codeLink}
                className="flex items-center gap-x-2 w-fit rounded-md px-2 py-1 bg-white text-black"
              >
                <h1>Github</h1>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href={project.hostedLink}
                className="flex items-center gap-x-2 w-fit rounded-md px-2 py-1 bg-white text-black"
              >
                <h1>Website</h1>
                <FontAwesomeIcon icon={faGlobe} />
              </Link>
            </div>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={120}
            height={100}
            className="object-contain"
          />
        </div>
        <p className="z-20 mt-4 text-sm line-clamp-6">{project.description}</p>
      </article>
    </div>
  );
};
