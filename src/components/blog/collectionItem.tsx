import { Collection } from "@prisma/client";
import Image from "next/image";
import React from "react";

export const CollectionItem = ({ item }: { item: Collection }) => {
  return (
    <div className="flex p-2 items-start">
      <div className="w-3/4 pl-8">
        <div className="">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-wrap font-thin line-clamp-2">{item.summary}</p>
          <p className="text-gray-400 mt-2">
            <span className="mr-2">{item.totalPosts}</span>
            Posts
          </p>
        </div>
        <div className="flex item-center gap-2 mt-4 text-xs">
          <span className="rounded-lg bg-gray-700 px-2 py-1">{item.tag}</span>
          <span className="py-1">{item.readingTime} min read</span>
        </div>
      </div>
      <Image
        src={item.image}
        alt="collection image"
        width={70}
        height={100}
        className="object-contain"
      />
    </div>
  );
};
