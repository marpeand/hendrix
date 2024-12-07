import React from "react";
import { allNotes, allPosts, allProjects } from "@/.contentlayer/generated";
import { Biography } from "./components/Biography";
import { FaRegStickyNote } from "react-icons/fa";
import { LuPenTool } from "react-icons/lu";
import { PiNutBold } from "react-icons/pi";
import { PostCard } from "./components/PostCard";
import { ProjectCard } from "./components/ProjectCard";
import { NoteLink } from "./components/NoteLink";
import { ContainerSection } from "./components/ContainerSection";
import CONFIG from "@/blog.config";
import { MdWarning } from "react-icons/md";

const sortByDateDesc = (a: any, b: any) => b.date.localeCompare(a.date);

const Home = () => {
  const recentPosts = allPosts
    .filter((post) => !post.draft)
    .sort(sortByDateDesc)
    .slice(0, CONFIG.display.posts);

  const recentProjects = allProjects
    .sort(sortByDateDesc)
    .slice(0, CONFIG.display.projects);

  const recentNotes = allNotes
    .filter((note) => !note.draft)
    .sort(sortByDateDesc)
    .slice(0, CONFIG.display.notes);

  return (
    <>
      <Biography />
      {recentPosts.length > 0 && (
        <ContainerSection
          title="Writings"
          icon={<LuPenTool size={1000} className="mr-4 h-6 w-6" />}
          href="/writing"
          textButton="Explore more writings"
        >
          <div className="space-y-4 pb-8">
            {recentPosts.map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </ContainerSection>
      )}

      {recentProjects.length > 0 && (
        <ContainerSection
          title="Projects"
          icon={<PiNutBold size={25} className="mr-4 h-6 w-6" />}
          href="/projects"
          textButton="Explore Projects"
        >
          <div className="space-y-4 pb-8">
            {recentProjects.map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </div>
        </ContainerSection>
      )}

      {recentNotes.length > 0 && (
        <ContainerSection
          title="Notes"
          icon={<FaRegStickyNote size={20} className="mr-4 h-6 w-6" />}
          href="/notes"
          textButton="Explore Notes"
        >
          <div className="space-y-4 pb-8">
            {recentNotes.map((note) => (
              <NoteLink note={note} key={note._id} />
            ))}
          </div>
        </ContainerSection>
      )}

      {recentPosts.length === 0 &&
        recentProjects.length === 0 &&
        recentNotes.length === 0 && (
          <div className="flex items-center text-red-500">
            <MdWarning className="mr-2" />
            <p>No content available.</p>
          </div>
        )}
    </>
  );
};

export default Home;
