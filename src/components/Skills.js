import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data";

const FramerImage = motion(Image);

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-6xl mt-24 sm:mt-16 w-full text-center">
        Skills
      </h2>
      <div className="relative w-full flex items-center justify-center mt-6 sm:mt-12">
        <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 sm:p-6 rounded-br-2xl dark:border-light dark:bg-dark"
            >
              <FramerImage
                src={skill.image}
                alt={skill.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-full h-auto"
              />
              <p className="text-lg sm:text-xl mt-2 sm:mt-4">{skill.name}</p>
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark dark:bg-light" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
