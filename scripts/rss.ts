import { Feed } from "feed";
import { writeFileSync } from "fs";
import path from "path";
import {
  allPosts,
  allProjects,
  allNotes,
} from "../.contentlayer/generated/index.mjs";
import CONFIG from "../blog.config.js";

async function generateRssFeed() {
  const site_url = CONFIG.baseURL;

  const feedOptions = {
    title: CONFIG.title,
    description: CONFIG.siteDescription,
    email: CONFIG.email ? CONFIG.email : undefined,
    id: site_url,
    link: site_url,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      CONFIG.title
    }`,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  // Add posts to the feed
  const filteredPosts = allPosts.filter((post) => !post.draft);
  const currentPosts = filteredPosts.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  currentPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/writing/${post.slug}`,
      link: `${site_url}/writing/${post.slug}`,
      date: new Date(post.date),
    });
  });

  // Add projects to the feed
  const currentProjects = allProjects.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  currentProjects.forEach((project) => {
    feed.addItem({
      title: project.title,
      id: `${site_url}/projects/${project.slug}`,
      link: `${site_url}/projects/${project.slug}`,
      date: new Date(project.date),
    });
  });

  // Add notes to the feed
  const filteredNotes = allNotes.filter((note) => !note.draft);
  const currentNotes = filteredNotes.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  currentNotes.forEach((note) => {
    feed.addItem({
      title: note.title,
      id: `${site_url}/notes/${note.slug}`,
      link: `${site_url}/notes/${note.slug}`,
      date: new Date(note.date),
    });
  });

  const outputPath = path.join(process.cwd(), "public", "rss.xml");
  writeFileSync(outputPath, feed.rss2());
}

generateRssFeed();
