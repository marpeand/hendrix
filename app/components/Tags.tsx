import { slug } from "github-slugger";
import Link from "next/link";

export default function Tags({
  tags,
  showTags = true,
}: {
  tags: string[];
  showTags?: boolean;
}) {
  return (
    showTags && (
      <div className="flex items-center gap-2 mb-1">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={`/categories/${slug(tag)}`}
            className="text-xs dark:text-white/50 border-dark/30 text-dark/80 px-2 py-1 rounded-full border dark:border-white/10  hover:border-dark/80 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    )
  );
}
