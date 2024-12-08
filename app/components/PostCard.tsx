import { Post } from "@/.contentlayer/generated";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import Link from "next/link";
import Tags from "./Tags";

interface PostCardProps {
  post: Post;
  showTags?: boolean;
}

export const PostCard = ({ post, showTags = true }: PostCardProps) => (
  <div className="justify-between pb-3 flex flex-col">
    <Tags tags={post.tags} showTags={showTags} />
    <Link className="group transition-colors" href={post.url}>
      <div className="mb-2">
        <h1 className="font-semibold dark:text-foreground-50 text-dark md:text-lg mb-1 group-hover:underline underline-offset-3 ">
          {post.title}
        </h1>
        <h2 className="text-foreground-400 dark:text-foreground-300 md:text-[15px] text-sm leading-relaxed line-clamp-3">
          {post.description}
        </h2>
      </div>
      <div className="flex space-x-2 text-foreground-400/80 dark:text-foreground-300 items-center">
        <span className="text-sm">
          {format(new Date(post.date), "MMMM dd, yyyy")}
        </span>
        <span className="font-semibold">·</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span className="text-sm">{post.readingTime.text}</span>
        </div>
      </div>
    </Link>
  </div>
);
