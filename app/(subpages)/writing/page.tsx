import { allPosts } from "@/.contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { PostCard } from "../../components/PostCard";
import { Undo2 } from "lucide-react";
import PageContainer from "@/app/components/PageContainer";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my personal projects",
};

const Page = () => {
  const filteredPosts = allPosts.filter((post) => !post.draft);
  return (
    <PageContainer>
      <div className="flex items-center mb-10 translate-x-[-50px]">
        <Link href={"/"}>
          <Undo2
            size={1000}
            className="h-8 w-8 mr-4 bg-foreground-200 p-2 rounded-md hover:bg-foreground-400/30 dark:bg-foreground-600 dark:hover:bg-foreground-500"
          />
        </Link>
        <h1 className="text-2xl font-bold dark:text-foreground-50 text-dark">
          Writings
        </h1>
      </div>
      <div>
        {filteredPosts
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
      </div>
    </PageContainer>
  );
};

export default Page;
