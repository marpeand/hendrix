import { allProjects } from "@/.contentlayer/generated";
import { Metadata } from "next";
import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import PageContainer from "@/app/components/PageContainer";
export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my personal projects",
};

const Page = () => {
  return (
    <PageContainer>
      <h1 className="text-2xl mb-10 font-bold">Projects</h1>
      <div className="min-h-screen space-y-4">
        {allProjects.map((project) => (
          <ProjectCard project={project} key={project._id}></ProjectCard>
        ))}
      </div>
    </PageContainer>
  );
};

export default Page;
