import { allProjects } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxRenderer } from "@/app/components/Mdx";

import type { Metadata } from "next";
import CONFIG from "@/blog.config";
import { format } from "date-fns";
import PageContainer from "@/app/components/PageContainer";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    return;
  }
  const { title, slug, description } = project;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${CONFIG.baseURL}/${slug}`,
      images: [`${CONFIG.baseURL}/images/${slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${CONFIG.baseURL}/images/${slug}.jpg`],
    },
  };
}

export default function Post({ params }) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      <span className="font-medium dark:text-foreground-400 text-dark/30">
        Project
      </span>
      <h1 className="text-2xl font-bold mb-2 dark:text-foreground-50 text-dark">
        {project.title}
      </h1>

      <div className="flex space-x-2 text-foreground-400">
        <span>{format(new Date(project.date), "dd/MM/yy")}</span>

        {project.github && (
          <>
            <span className="flex items-center gap-1 font-bold">·</span>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.github.replace("https://", "")}
            </a>
          </>
        )}
      </div>
      <article className="mt-10 prose dark:prose-invert">
        <MdxRenderer source={project.body.code} />
      </article>
    </PageContainer>
  );
}
