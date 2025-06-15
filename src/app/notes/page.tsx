import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { type SanityDocument } from "next-sanity";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import NotesLoading from "./loading";

async function NotesList({ category }: { category?: string }) {
  const NOTES_QUERY = `*[
    _type == "note"
    && defined(slug.current)
    ${category && category !== "all" ? `&& category == "${category}"` : ""}
  ]|order(publishedAt desc)[0...12]{_id, title, slug, description, category, tags, publishedAt}`;

  const options = { next: { revalidate: 30 } };
  const notes = await client.fetch<SanityDocument[]>(NOTES_QUERY, {}, options);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}

function NoteCard({ note }: { note: SanityDocument }) {
  return (
    <Link href={`/notes/${note.slug.current}`} className="block">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>{note.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-3">
            {note.category && <Tag variant="category">{note.category}</Tag>}
            {Array.isArray(note.tags) &&
              note.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date(note.publishedAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function NotesPage() {
  const NOTES_QUERY = `*[
    _type == "note"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, description, category, tags, publishedAt}`;

  const options = { next: { revalidate: 30 } };
  const notes = await client.fetch<SanityDocument[]>(NOTES_QUERY, {}, options);

  const categories = Array.from(
    new Set(notes.map((note) => note.category).filter(Boolean))
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Notes</h1>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {capitalize(category)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Suspense fallback={<NotesLoading />}>
            <NotesList />
          </Suspense>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Suspense fallback={<NotesLoading />}>
              <NotesList category={category} />
            </Suspense>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
