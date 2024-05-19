import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-zinc-900 pb-12 text-white">
      <div className="flex justify-between items-center w-2/3">
        <h4>© Sakthi Nathan</h4>
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
      </div>
    </footer>
  );
}
