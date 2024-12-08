import { Post, allPosts } from "@/.contentlayer/generated";
import PageContainer from "@/app/components/PageContainer";
import { PostCard } from "@/app/components/PostCard";
import { slug } from "github-slugger";
import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const tag = params.tag;
  return {
    title: `#${tag}`,
    description: `${tag} tagged posts`,
  };
}

const CategoriesPage = ({ params }) => {
  const filteredPosts: Post[] = allPosts.filter((post) => {
    return post.tags?.some((tag) => slug(tag) === params.tag);
  });

  return (
    <PageContainer>
      <h1 className="text-2xl mb-10 font-bold capitalize dark:text-foreground-50 text-dark">
        # {params.tag}
      </h1>
      <ul className="mt-5 justify-center space-y-2">
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} key={post._id} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default CategoriesPage;
