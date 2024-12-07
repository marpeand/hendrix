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
      <h1 className="text-4xl font-bold mb-8 text-white">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            href={`/categories/${slug(tag)}`}
            className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-white">{tag}</span>
              <span className="text-sm text-white/50">
                {count} post{count !== 1 ? "s" : ""}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
