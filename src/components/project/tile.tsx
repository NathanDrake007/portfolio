import {
  faGithub,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Tile({
  title,
  summary,
  image,
  codeLink,
  hostedLink,
}: {
  title: string;
  summary: string;
  image: string;
  codeLink: string;
  hostedLink: string;
}) {
  return (
    <div className="group flex items-start gap-x-4 pb-4">
      <Image
        src={image}
        alt={title}
        width={70}
        height={100}
        className="transition duration-300 group-hover:scale-105"
      />
      <div className="w-2/3">
        <h2 className="group-hover:underline">{title}</h2>
        <p className="text-sm font-light line-clamp-2">{summary}</p>
        <div className="pt-4 flex gap-x-4">
          <Link href={codeLink}>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl cursor-pointer"
            />
          </Link>
          <Link href={hostedLink}>
            <FontAwesomeIcon
              icon={faInternetExplorer}
              className="text-2xl cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
