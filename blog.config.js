const CONFIG = {
  title: "Hendrix",
  siteDescription: "Blog and portfolio created with Next.js and Tailwind CSS",
  baseURL: "https://hendrix.vercel.app",
  darkBackground: "#111111",
  logo: "/logo.png", // upload your logo in /public folder
  language: "en",
  email: "myemail@example.com",

  byography: {
    title: "Hendrix Blog Template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
      Cras condimentum aliquet lectus, id pharetra massa condimentum sed. \
      Quisque tincidunt ut ante id faucibus. \
      Aliquam mattis justo massa, sit amet dignissim mauris tincidunt quis.",
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
