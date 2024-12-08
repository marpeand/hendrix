import { allPosts } from "@/.contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MdxRenderer } from "@/app/components/Mdx";
import { format } from "date-fns";
import CONFIG from "@/blog.config";
import Link from "next/link";

import { slug } from "github-slugger";
import { RelatedPosts } from "@/app/components/RelatedPosts";
import { Undo2 } from "lucide-react";
import PageContainer from "@/app/components/PageContainer";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, date: publishedTime, slug } = post;

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
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const href = `https://x.com/intent/tweet?text=${post.title}&url=${
    CONFIG.baseURL + post.url
  }`;

  return (
    <PageContainer>
      <div className="w-full min-h-screen">
        <div className="flex flex-row space-x-2 pb-4">
          {post.tags.map((tag) => {
            return (
              <Link
                key={tag}
                className="text-xs dark:text-white/50 border-dark/30 text-dark/80 px-2 py-1 rounded-full border dark:border-white/10 hover:border-dark/80 transition-colors"
                href={`/categories/${slug(tag)}`}
              >
                {tag}
              </Link>
            );
          })}
        </div>
        <div className="flex translate-x-[-50px]">
          <Link
            href={"/writing"}
            aria-label="Back to Writings"
            title="Back to Writings"
          >
            <Undo2
              size={1000}
              className="h-8 w-8 mr-4 bg-foreground-200 p-2 rounded-md hover:bg-foreground-400/30 dark:bg-foreground-600 dark:hover:bg-foreground-500"
            />
          </Link>
          <h1 className="text-2xl font-bold mb-1 dark:text-foreground-50 text-dark">
            {post.title}
          </h1>
        </div>

        <div className="flex space-x-2 dark:text-foreground-400 text-dark/60">
          <span>{format(new Date(post.date), "dd/MM/yy")}</span>
          <span className="font-bold mx-2">·</span>
          <span>{post.readingTime.text}</span>
        </div>
        <article className="mt-10 prose dark:prose-invert">
          <MdxRenderer source={post.body.code} />
        </article>
        <ShareAndBack href={href} />
      </div>
      <div className="w-full  py-10  items-center">
        <h2 className="mb-4 font-bold text-xl underline underline-offset-4 dark:text-foreground-50 text-dark">
          Related Posts
        </h2>
        <RelatedPosts tags={post.tags} slug={post.slug} showTags={false} />
      </div>
    </PageContainer>
  );
}

const ShareAndBack = ({ href }) => {
  return (
    <div className="dark:text-foreground-400 mt-10 text-dark/60">
      <div className="space-x-1">
        <span className="font-light">&gt; </span>
        <span>share post on</span>
        <a
          href={href}
          target="_blank"
          className="text-dark/80 hover:underline hover:text-dark/90 dark:text-foreground-400 dark:hover:text-foreground-50"
        >
          X(twitter)
        </a>
      </div>
      <div className="space-x-1">
        <span className="font-light">&gt; </span>
        <Link
          href="/writing"
          className="text-dark/80 hover:underline hover:text-dark/90 dark:text-foreground-400 dark:hover:text-foreground-50"
        >
          ← Go to Writings
        </Link>
      </div>
    </div>
  );
};
