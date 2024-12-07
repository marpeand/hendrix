import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "./PostCard";

interface RelatedPostsProps {
  tags: string[];
  slug: string;
  showTags?: boolean;
}

export const RelatedPosts = ({
  tags,
  slug,
  showTags = true,
}: RelatedPostsProps) => {
  const relatedPosts = allPosts.filter((post) =>
    post.tags.some((tag) => tags.includes(tag) && post.slug !== slug)
  );

  return (
    <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {relatedPosts
        .slice(0, 4)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post) => (
          <PostCard post={post} key={post._id} showTags={showTags} />
        ))}
    </div>
  );
};
