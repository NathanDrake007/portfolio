// pages/add-project.tsx
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  published: boolean;
  featured: boolean;
  codeLink: string;
  hostedLink: string;
}

export default function AddProject() {
  const [formData, setFormData] = useState<Project>({
    title: "",
    description: "",
    image: "",
    published: false,
    featured: false,
    codeLink: "",
    hostedLink: "",
  });
  const [isProjectAdded, setIsProjectAdded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsProjectAdded(true);
      } else {
        setIsProjectAdded(false);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      {isProjectAdded ? (
        <div className="w-2/3">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 space-y-4">
            <p className="font-bold">Success!</p>
            <p>Your project has been successfully added.</p>
            <Button
              onClick={() => setIsProjectAdded(false)}
              className="bg-red-500"
            >
              Add Another
            </Button>
            <Link
              href="/projects"
              className="text-black underline hover:text-blue-500 ml-4"
            >
              View all projects
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-6">Add New Project</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Code Link
              </label>
              <input
                type="url"
                name="codeLink"
                value={formData.codeLink}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hosted Link
              </label>
              <input
                type="url"
                name="hostedLink"
                value={formData.hostedLink}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm font-medium text-gray-700">
                Published
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm font-medium text-gray-700">
                Featured
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
