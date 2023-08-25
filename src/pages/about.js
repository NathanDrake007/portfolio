import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile-pic.jpeg";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import { aboutData } from "@/data";

const about = () => {
  return (
    <>
      <Head>
        <title>Journal | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-8 xl:gap-12">
            <div className="col-span-3 flex flex-col items-start justify-start xl:order-2 xl:col-span-8">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              {aboutData.map((item, index) => (
                <p className="font-medium my-2">{item}</p>
              ))}
            </div>
            <div
              className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
            dark:bg-dark dark:border-light xl:col-span-8 xl:order-1"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw. (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
