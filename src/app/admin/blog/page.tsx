"use client";

import React, { useState } from "react";
import { Content, ContentType } from "@/lib/types";
import Image from "next/image";
import { AddComponent } from "@/components/blog/writer/addComponent";

const WritePost = () => {
  // const [title, setTitle] = useState("");
  // const [summary, setSummary] = useState("");
  // const [image, setImage] = useState("");
  // const [tag, setTag] = useState("");
  // const [readingTime, setReadingTime] = useState(0);
  const [content, setContent] = useState<Content[]>([]);
  const [contentType, setContentType] = useState<ContentType>(
    ContentType.Pargraph
  );
  const [contentValue, setContentValue] = useState("");
  const addContent = () => {
    let _content: Content;
    switch (contentType) {
      case ContentType.Pargraph:
        _content = {
          type: ContentType.Pargraph,
          data: {
            text: contentValue,
            style: {
              size: 1,
              color: "white",
              fontWeight: "normal",
            },
          },
        };
        break;
      case ContentType.Image:
        _content = {
          type: ContentType.Image,
          data: {
            url: contentValue,
            alt: "image",
          },
        };
        break;
      case ContentType.Code:
        _content = {
          type: ContentType.Code,
          data: {
            code: contentValue,
            lang: "javascript",
          },
        };
        break;
      case ContentType.Link:
        _content = {
          type: ContentType.Link,
          data: {
            url: contentValue,
            text: "click here",
          },
        };
        break;
      case ContentType.Heading:
        _content = {
          type: ContentType.Heading,
          data: {
            text: contentValue,
            style: {
              size: 1,
              color: "white",
              fontWeight: "bold",
            },
          },
        };
        break;
      default:
        throw new Error("Unknown content type");
    }
    setContent([...content, _content]);
    setContentValue("");
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(content);
  };

  const getPlaceHolder = (): string => {
    switch (contentType) {
      case ContentType.Pargraph:
        return "Unleash your creativity, tell your tale...";
      case ContentType.Image:
        return "Paint a thousand words with a single image!";
      case ContentType.Code:
        return "Let your code tell its story...";
      case ContentType.Link:
        return "Link up to more adventures!";
      case ContentType.Heading:
        return "Give it a title that shines!";
      default:
        throw new Error("Unknown content type");
    }
  };

  return (
    <div className="w-2/3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-8 w-full items-end text-white"
      >
        <div className="w-full">
          <div className="mb-4">
            {content.map((c, index) => (
              <div key={index} className="my-2 p-2">
                {c.type === ContentType.Pargraph && <p>{c.data.text}</p>}
                {c.type === ContentType.Image && (
                  <Image
                    src={c.data.url}
                    alt={c.data.alt}
                    width={300}
                    height={300}
                    className="mt-4"
                  />
                )}
                {c.type === ContentType.Code && <pre>{c.data.code}</pre>}
                {c.type === ContentType.Link && (
                  <a href={c.data.url}>{c.data.url}</a>
                )}
                {c.type === ContentType.Heading && <h1>{c.data.text}</h1>}
              </div>
            ))}
          </div>
          <div className="flex items-center mt-2 gap-x-4">
            <AddComponent setContentType={setContentType} />
            <textarea
              className="flex-1 p-2 border-b bg-transparent focus:outline-none focus:ring-0 caret-white text-xl text-white"
              placeholder={getPlaceHolder()}
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            />
            <button
              type="button"
              onClick={addContent}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:scale-105"
            >
              Add
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-48 px-4 py-2 bg-green-500 text-white rounded-md hover:scale-105"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default WritePost;

/*
<div className="mb-4">
<label className="block text-sm font-medium text-gray-400">
  Title
</label>
<input
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="mt-1 block w-full p-2 rounded-md"
  required
/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-400">
  Summary
</label>
<textarea
  value={summary}
  onChange={(e) => setSummary(e.target.value)}
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
  required
/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-400">
  Image URL
</label>
<input
  type="text"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-400">Tag</label>
<input
  type="text"
  value={tag}
  onChange={(e) => setTag(e.target.value)}
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
  required
/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-gray-400">
  Reading Time (minutes)
</label>
<input
  type="number"
  value={readingTime}
  onChange={(e) => setReadingTime(parseInt(e.target.value))}
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
  required
/>
</div>
*/
