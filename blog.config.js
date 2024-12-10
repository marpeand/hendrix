const CONFIG = {
  title: "Hendrix",
  siteDescription:
    "Personal dark and light mode blog and portfolio template build using NextJS & TailwindCSS.",
  baseURL: "https://hendrix-template.vercel.app",
  darkBackground: "#111111",
  logo: "/logo.png", // upload your logo in /public folder

  language: "en",
  email: "myemail@example.com",

  biography: {
    title: "Hendrix Blog Template",
    description:
      "Modern blog template built with Next.js and Tailwind CSS. \
      It features a clean design, responsive layout, and easy navigation. \
      Users can create and manage posts, projects, and notes seamlessly. \
      The template is customizable and includes social media integration.",
    avatar: "/avatar.png", // upload your avatar in /public folder
  },
  social: {
    github: "https://www.github.com/marpeand/hendrix",
    twitter: "https://x.com/elonmusk",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://youtube.com/",
    mastodon: "https://mastodon.social/@mastodonuser",
    resume: "/resume.pdf", // upload your resume in /public folder
  },

  // How many posts, projects, and notes to display on the home page
  display: {
    posts: 5,
    projects: 5,
    notes: 5,
  },
};

module.exports = CONFIG;
