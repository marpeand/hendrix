<br>
<div align="center">
  <a href="https://github.com/marpeand/hendrix">
    <img src="public/logo.png" alt="Logo" width="120" height="120">
  </a>
  </br>

  <h1 align=center> Hendrix Template</h1>
  <p align="center">
    Personal Blog and Portfolio template build using NextJS & TailwindCSS. :rocket:
    <br />
    <a href="https://hendrix-template.vercel.app"><strong>(https://hendrix-template.vercel.app/)</strong></a>
    <br />
    <br />
    <a href="https://github.com/marpeand/hendrix/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/marpeand/hendrix/issues/new">Request Feature</a>
  </p>
</div>
<br />

<div style="display: flex; justify-content: center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarpeand%2Fhendrix)
<span style="margin-left:5px"></span>
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/marpeand/hendrix)
<span style="margin-left:5px"></span>

</div>

| Dark mode                                 | Light mode                                  |
| ----------------------------------------- | ------------------------------------------- |
| ![Dark mode](/public/dark-screenshot.png) | ![Light mode](/public/light-screenshot.png) |

### Key Features

- Great page load speed
- Use [ContentLayer](https://www.contentlayer.dev/) to compile mdx
- Responsive for all devices
- Fast configuration, only edit the `blog.config.js` file
- Math syntax support using [rehypeKatex](https://katex.org/)
- Code support using **rehypePrettyCode**
- RSS feed, sitemap, and robots.txt
- Dark and light themes

# Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/marpeand/hendrix.git
   ```

2. Install packages

   ```sh
   pnpm install
   ```

3. Personalize the `blog.config.js` file with your own information

   ```js
   const CONFIG = {
     // Site config
     title: "Hendrix",
     siteDescription: "Blog and portfolio created with Next.js and Tailwind CSS",
     baseURL: "https://hendrix-template.vercel.app",
     ...
     ...
   }
   ```

4. Write your own blog posts using Markdown in `content/writing` folder. Also, you can add your own projects in `content/projects` folder and notes in `content/notes` folder.
5. Modify the `content/about.mdx` file to update your biography.

## Content and Config

### Post

Every post is crafted using [ContentLayer](https://www.contentlayer.dev/). To ensure compilation, it must adhere to specific required and optional fields, as exemplified below:

```
title (required)
description (optional but recommended)
date (required)
draft (required)
tags (optional)
```

An example:

```
---
title: "Decoding Signal Processing Basics: A Practical Guide"
date: 2023-11-30
description: "An introduction to signal processing concepts and their applications in engineering and everyday life."
draft: false
tags:
  - Mathematics
  - Signal Processing
  - Engineering
---
```

### Projects

List your personal side projects in the `content/projects` folder, here it's an example of these.

```
title (required)
description (optional but recommended)
date (required)
draft (required)
github (optional)
```

```
---
title: "Gamify Your Life"
description: "A productivity application that turns daily tasks and goals into a gamified experience with levels, achievements, and rewards."
date: 2023-12-15
github: https://github.com/marpeand/gamify-your-life
---
```

### Static Files

When adding images to your blog post, it's recommended to store them in the `public/static` directory. This ensures accessibility and proper linking. Follow these steps:
To reference an image in your project, use the path starting from the root of the `public` directory.

Example: If your image is in `public/static/my-blog-post/myimage.png`

You can change the favicon in the `app/favicon.ico` file.

# License

By contributing to the project, you agree to license your contributions under the same license as the project itself. See the [LICENSE](LICENSE) file for more information.