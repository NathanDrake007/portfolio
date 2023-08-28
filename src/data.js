import html from "../public/images/skills/html.png";
import css from "../public/images/skills/css.png";
import javaScript from "../public/images/skills/javascript.png";
import reactImg from "../public/images/skills/react.png";
import node from "../public/images/skills/node.png";
import tailwind from "../public/images/skills/tailwind.png";
import mongo from "../public/images/skills/mongo.png";
import java from "../public/images/skills/java.png";
import typeScript from "../public/images/skills/typescript.png";
import cpp from "../public/images/skills/cpp.png";
import postgres from "../public/images/skills/postgresql.png";
import express from "../public/images/skills/express.png";
import redux from "../public/images/skills/redux.png";
import recoil from "../public/images/skills/recoil.png";
import git from "../public/images/skills/git.png";
import nestjs from "../public/images/skills/nestjs.png";
import prisma from "../public/images/skills/prisma.png";
import redis from "../public/images/skills/redis.png";
import python from "../public/images/skills/python.png";
import django from "../public/images/skills/django.png";
import aws from "../public/images/skills/aws.png";
import docker from "../public/images/skills/docker.png";
import kubernetes from "../public/images/skills/kubernetes.png";
import springboot from "../public/images/skills/springboot.png";
import kafka from "../public/images/skills/kafka.png";
import rabbitmq from "../public/images/skills/rabbitmq.png";
import nginx from "../public/images/skills/nginx.png";

import distributed from "../public/images/projects/distributed.jpeg";
// import hbf from "../public/images/projects/hbf.jpeg";
import inventory from "../public/images/projects/inventory.jpeg";
import micropy from "../public/images/projects/micro.jpeg";
import studyBud from "../public/images/projects/studybud.png";
import rebel from "../public/images/projects/rebel.png";
import chaos from "../public/images/projects/chaos.jpeg";

export const mail = "drakesakthi@gmail.com";
export const aboutData = [
  "c",
  "My coding journey isn't just about building functional applications—it's a creative process where innovation and logic intertwine to bring ideas to life. I firmly believe that exceptional software is born from the marriage of cutting-edge technology and a deep understanding of user needs.",
  "Whether it's coding a dynamic website, developing a seamless mobile app, or architecting any digital tool, I thrive on a commitment to coding excellence and a user-first approach. As a problem solver at heart, I relish the opportunity to turn intricate problems into elegant solutions.",
];
export const experience = [
  {
    id: 1,
    companyName: "Zoho Corporation",
    role: "Software Developer",
    period: "May 2022 - Present",
    address: "Chennai, TN",
    points: [
      "Developed both frontend and backend for alarms module to monitor devices which are present in the network for OpManager product.",
      "Developed front end for Compliance Standard module for Firewall Analyzer product.",
      "Developed a user-friendly Docker and Flask-based tool to simplify test server installation process, eliminating the need for complex physical machine setups.",
      "Created a Python, JavaScript, React, and Flask-based tool for effortless retrieval, manipulation, and management of color, font, and icon data, streamlining the process of adding and modifying visual elements.",
    ],
  },
  {
    id: 2,
    companyName: "Zoho Corporation",
    role: "Software Trainee",
    period: "Sept 2021 - May 2022",
    address: "Chennai, TN",
    points: [
      "Built a command-line interface (CLI) tool using Python and the Typer library to generate architecture design patterns and boilerplate code for iOS development, enhancing productivity and streamlining the iOS app development process.",
      "Developed a Python-based tool for ensuring seamless synchronization of build and version numbers throughout the codebase, eliminating potential issues during the generation of builds for the Play Store, streamlining the release process.",
      "Acquired expertise in architecture patterns, full-stack software development, database design, and mobile app development using Swift, React, Java, Servlet, JavaScript, and MySQL, delivering comprehensive solutions across various tech stacks.",
    ],
  },
];

export const skills = [
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JavaScript",
    image: javaScript,
  },
  {
    name: "React",
    image: reactImg,
  },
  {
    name: "Node",
    image: node,
  },
  {
    name: "Tailwind",
    image: tailwind,
  },
  {
    name: "Mongo",
    image: mongo,
  },
  {
    name: "Java",
    image: java,
  },
  {
    name: "TypeScript",
    image: typeScript,
  },
  {
    name: "C++",
    image: cpp,
  },
  {
    name: "Postgres SQL",
    image: postgres,
  },
  {
    name: "Express",
    image: express,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Recoil",
    image: recoil,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Nest JS",
    image: nestjs,
  },
  {
    name: "Prisma",
    image: prisma,
  },
  {
    name: "Redis",
    image: redis,
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "Django",
    image: django,
  },
  {
    name: "AWS",
    image: aws,
  },
  {
    name: "Docker",
    image: docker,
  },
  {
    name: "Kubernetes",
    image: kubernetes,
  },
  {
    name: "Spring Boot",
    image: springboot,
  },
  {
    name: "Kafka",
    image: kafka,
  },
  {
    name: "Rabbit Mq",
    image: rabbitmq,
  },
  // {
  //   name: "Nginx",
  //   image: nginx,
  // },
];

export const projectsData = [
  {
    title: "Plugable Inventory System",
    demo_link: "#",
    github_link: "",
    image: inventory,
    isFeatured: true,
    summary: "Coming soon...",
  },
  {
    title: "Micropy",
    demo_link: "#",
    github_link: "https://github.com/NathanDrake007/micropy",
    image: micropy,
    isFeatured: false,
    summary:
      "Micropy: Microservices architecture with Python, RabbitMQ, Docker, and Kubernetes for MP4 to MP3 conversion. Demonstrates distributed systems, containerization, and orchestration.",
  },
  {
    title: "Parallel Search",
    demo_link: "#",
    github_link: "https://github.com/NathanDrake007/Parallel-Search",
    image: distributed,
    isFeatured: false,
    summary:
      "Parallel Search: Master-slave architecture for concurrent search across files. Scalable distributed systems design and parallel processing algorithms showcase efficiency.",
  },
  // {
  //   title: "Hospital Bed Finder",
  //   demo_link: "",
  //   github_link: "",
  //   image: hbf,
  //   isFeatured: false,
  //   summary:
  //     "Hospital Bed Finder: Real-time ambulance dispatch system for locating hospitals with available beds. Geolocation, data communication, and healthcare integration ensure swift patient care.",
  // },
  {
    title: "Chaos",
    demo_link: "#",
    github_link: "https://github.com/NathanDrake007/ChaOS",
    image: chaos,
    isFeatured: false,
    summary:
      "Chaos: Python and OpenCV computer vision software for Windows OS control using finger gestures, eyeball tracking, and a voice assistant. Enhances accessibility for disabled users.",
  },
  {
    title: "StudyBud",
    demo_link: "#",
    github_link: "https://github.com/NathanDrake007/study-bud",
    image: studyBud,
    isFeatured: false,
    summary:
      "StudyBud: Your dedicated platform for academic collaboration. Find your ideal study buddy and boost your learning journey together.",
  },
  {
    title: "Rebel Grooming",
    demo_link: "#",
    github_link: "https://github.com/NathanDrake007/The_Rebel_Grooming",
    image: rebel,
    isFeatured: false,
    summary:
      "Rebel Grooming: Elevate your grooming routine with our premium men's products. Discover a curated selection for a refined and confident look.",
  },
];
