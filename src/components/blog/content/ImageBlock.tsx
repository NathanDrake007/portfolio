import React from "react";
import Image from "next/image";

const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative my-8 w-full" style={{ paddingBottom: "50%" }}>
      <Image src={src} alt={alt} fill objectFit="cover" />
    </div>
  );
};

export default BlogImage;
