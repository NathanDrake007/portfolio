import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y67twu25",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});