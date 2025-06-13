import { Header } from "./header";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* <Header project={project} views={views} /> */}
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless"></article>
    </div>
  );
}
