import { allNotes, allPosts } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxRenderer } from "@/app/components/Mdx";
import { format } from "date-fns";
import CONFIG from "@/blog.config";
import PageContainer from "@/app/components/PageContainer";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const note = allNotes.find((note) => note.slug === params.slug);

  if (!note) {
    return;
  }

  const { title, date: publishedTime, slug } = note;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime,
      url: `${CONFIG.baseURL}/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
    },
  };
}
export default function Post({ params }) {
  const note = allNotes.find((post) => post.slug === params.slug);

  if (!note) {
    notFound();
  }

  return (
    <PageContainer>
      <span className="font-medium text-foreground-400">Note</span>
      <h1 className="text-2xl font-bold">{note.title}</h1>
      <div className="flex space-x-2 text-foreground-400">
        <span>{format(new Date(note.date), "dd/MM/yy")}</span>
      </div>
      <article className="mt-10 prose prose-invert">
        <MdxRenderer source={note.body.code} />
      </article>
    </PageContainer>
  );
}
