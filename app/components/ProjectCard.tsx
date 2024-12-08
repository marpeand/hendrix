import Link from "next/link";
import { Project } from "@/.contentlayer/generated";
import FormatDate from "./FormatDate";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link className="flex space-x-2 items-center group" href={project.url}>
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <h1 className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis group-hover:underline font-medium md:text-lg dark:text-foreground-50 text-dark">
          {project.title}
        </h1>
        <span className="dark:text-foreground-300 text-foreground-400/80  text-sm flex-shrink-0 ml-4">
          <FormatDate dateString={project.date} />
        </span>
      </div>
      <p className="text-foreground-400 dark:text-foreground-300 md:text-[15px] text-sm line-clamp-2">
        {project.description}
      </p>
    </div>
  </Link>
);
