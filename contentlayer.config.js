import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `writing/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string" },
    draft: { type: "boolean", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    url: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        const slug = parts[parts.length - 1];
        return `/writing/${slug}`;
      },
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
}));

export const Projects = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "string", required: true },
    github: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => {
        const parts = project._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    url: {
      type: "string",
      resolve: (project) => {
        const parts = project._raw.flattenedPath.split("/");
        const slug = parts[parts.length - 1];
        return `/projects/${slug}`;
      },
    },
  },
}));

export const Notes = defineDocumentType(() => ({
  name: "Notes",
  filePathPattern: `notes/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    draft: { type: "boolean", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (note) => {
        const parts = note._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    url: {
      type: "string",
      resolve: (note) => {
        const parts = note._raw.flattenedPath.split("/");
        const slug = parts[parts.length - 1];
        return `/notes/${slug}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, About, Projects, Notes],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypeKatex, { output: "mathml" }],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.__rawString__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark-high-contrast",
          keepBackground: false,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties["__rawString__"] = node.__rawString__;
          }
        });
      },
    ],
  },
});
