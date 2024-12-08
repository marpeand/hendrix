import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import PageContainer from "@/app/components/PageContainer";

export default function TagsPage() {
  // Create a map to store tag counts
  const tagCounts = new Map<string, number>();

  // Count occurrences of each tag
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  const sortedTags = Array.from(tagCounts.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-8 dark:text-foreground-50 text-dark">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            href={`/categories/${slug(tag)}`}
            className="bg-dark/5 dark:bg-white/5 transition-colors p-4 rounded-lg"
          >
            <div className="flex flex-col">
              <span className="font-semibold dark:text-foreground-50 text-dark">
                {tag}
              </span>
              <span className="text-sm dark:text-white/50 text-dark/50">
                {count} post{count !== 1 ? "s" : ""}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
