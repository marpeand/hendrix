import { allPosts, allProjects, allNotes } from "@/.contentlayer/generated";
import CONFIG from "@/blog.config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${CONFIG.baseURL}/writing/${post.slug}`,
    lastModified: post.date ?? new Date().toISOString(),
  }));

  const projects = allProjects.map((project) => ({
    url: `${CONFIG.baseURL}/projects/${project.slug}`,
    lastModified: project.date ?? new Date().toISOString(),
  }));

  const notes = allNotes.map((note) => ({
    url: `${CONFIG.baseURL}/notes/${note.slug}`,
    lastModified: note.date ?? new Date().toISOString(),
  }));

  const routes = [
    "",
    "/about",
    "/projects",
    "/notes",
    "/categories",
    "/writing",
  ].map((route) => ({
    url: `${CONFIG.baseURL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes, ...posts, ...projects, ...notes];
}
