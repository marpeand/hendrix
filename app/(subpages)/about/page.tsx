import { allAbouts } from "@/.contentlayer/generated";
import { MdxRenderer } from "../../components/Mdx";
import type { Metadata } from "next";
import CONFIG from "@/blog.config";
import PageContainer from "@/app/components/PageContainer";

export const metadata: Metadata = {
  title: "About",
  description: "About Me",
  alternates: {
    canonical: `${CONFIG.baseURL}/about`,
  },
};
const About = () => {
  return (
    <PageContainer>
      <article className="prose dark:prose-invert mx-auto">
        <MdxRenderer source={allAbouts[0].body.code} />
      </article>
    </PageContainer>
  );
};

export default About;
