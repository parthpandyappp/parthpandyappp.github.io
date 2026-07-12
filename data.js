/**
 * Single source of truth for all portfolio content.
 * Edit this file to change anything on the site; index.html and
 * projects.html render entirely from the data below via render.js.
 */
window.PORTFOLIO = {
  profile: {
    name: "Parth Pandya",
    role: "Software Development Engineer",
    intro: [
      "I'm a software engineer with three years of experience shipping SaaS products in <strong>React, Next.js, and TypeScript</strong>. I care about thoughtful interfaces, design systems, and features that move real metrics.",
      "Beyond work, I contribute to open source and was a <strong>Google Code-in finalist</strong>. Away from the keyboard, I'm mostly lost in music, singing purely for the joy of it, sometimes taking the stage for theatre, or wandering a new city on a solo trip.",
    ],
    email: "parthpandyappp@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/parthpandyappp" },
      { label: "LinkedIn", href: "https://linkedin.com/in/parthpandyappp" },
      { label: "Twitter", href: "https://twitter.com/pandyaparthppp" },
      { label: "Resume", href: "https://drive.google.com/file/d/1Q4jEOkoYuw8B7W9u_2BBtUsvsKkLJ1yN/view" },
    ],
  },

  experience: [
    {
      name: "Wizikey",
      role: "Software Development Engineer",
      when: "2023 – now",
      tech: "Next.js · TypeScript · Apollo GraphQL · Storybook · Emotion",
      bullets: [
        "Optimized the registration funnel, nearly doubling sign-up conversion from <strong>9.18% to 18%</strong>.",
        "Shipped high-impact user-facing features that increased user engagement by <strong>83%</strong>.",
        "Leading the product design-system revamp: <strong>25+ reusable components</strong> adopted across 20+ screens.",
        "Implemented product-wide pricing locks enforcing tier-based access control across subscription plans.",
      ],
    },
    {
      name: "Alphaa AI (SuperAI)",
      role: "SDE Intern",
      when: "2022 – 2023",
      tech: "React · TypeScript · MongoDB · Recoil · ECharts · Ant Design",
      bullets: [
        "Built analytics dashboards that turned ad hoc user questions into SQL queries, visualized with ECharts.",
        "Delivered features in fast-moving early-stage product sprints across the React and MongoDB stack.",
      ],
    },
  ],
  experienceMore: {
    label: "Full history on LinkedIn →",
    href: "https://linkedin.com/in/parthpandyappp",
  },

  // Featured projects shown on the home page, in order.
  featuredProjects: [
    {
      name: "hTracker",
      links: [
        { label: "Live", href: "https://htrackerr.vercel.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/htracker" },
      ],
      tech: "Next.js 14 · MongoDB · Prisma · JWT · Zod · Tailwind CSS",
      desc: "A full-stack habit tracker with a GitHub-style contribution heatmap showing a year of consistency on an interactive 53-week grid.",
    },
    {
      name: "WebTLDR",
      links: [
        { label: "Live", href: "https://webtldr.vercel.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/websnap-ai" },
      ],
      tech: "AWS Lambda · Node.js · React · Gemini AI",
      desc: "A Chrome extension with 42+ real users that delivers concise AI summaries of articles without leaving the browser. Gained early traction on Product Hunt.",
    },
    {
      name: "o-imports",
      links: [
        { label: "Live", href: "https://o-imports.vercel.app" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/o-imports" },
      ],
      tech: "Next.js 14 · TypeScript · Replicate AI · Radix UI · Tailwind CSS",
      desc: "A dev tool that takes messy, unorganized imports and returns them cleanly sorted, so the feedback about tidy imports stops showing up in code reviews.",
    },
    {
      name: "SupaFocus",
      links: [
        { label: "Live", href: "https://supafocus.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/SupaFocus" },
      ],
      tech: "NestJS · Passport.js · React · TypeScript · Tailwind CSS",
      desc: "A task management app with authenticated sessions and a clean, responsive interface designed for daily productivity.",
    },
    {
      name: "iQuiz",
      links: [
        { label: "Live", href: "https://iquiz-ai.vercel.app/" },
        { label: "GitHub", href: "https://github.com/Logan1x/iQuiz" },
      ],
      tech: "Next.js · TypeScript · Supabase · OpenAI · Tailwind CSS",
      desc: "A full-stack AI quiz app that generates quizzes on any topic in seconds, with Supabase auth, play history, and a built-in AI assistant.",
    },
  ],

  recognitions: [
    {
      title: "Google Code-in Finalist",
      role: "Google Open Source",
      desc: "Selected as a finalist in the ns-3 network simulator project in Google's global contest; received an award letter from Google HQ.",
    },
    {
      title: "hackNeoG Finalist",
      role: "neoG Camp",
      desc: 'Built <a href="https://prostack.netlify.app/" target="_blank" rel="noreferrer">Prostack</a> and reached the finale, shortlisted among 7 teams out of 33.',
    },
  ],

  openSource: [
    {
      title: '<a href="https://gitlab.com/parthpandyappp/ns-3-dev/-/commit/741fd9feee845e2fa1e10884f5359f85db0fe641" target="_blank" rel="noreferrer">nsnam/ns-3-dev</a>',
      role: "contribution",
      desc: "ns-3 is the discrete-event network simulator used widely in networking research and academia. I added a complete, documented list of all TypeIds to the project's Doxygen documentation, making the simulator's type registry easier to navigate for researchers and new contributors.",
    },
    {
      title: '<a href="https://github.com/Cloud-CV/GCI/commit/322d743d23486fe0d6a7b706914498c03630a3e7" target="_blank" rel="noreferrer">cloudCV/GCI</a>',
      role: "contribution",
      desc: "CloudCV builds open-source tools for reproducible computer vision and AI research. I contributed to their Google Code-in repository during Google's global open-source contest, the same program where I was later selected as a finalist.",
    },
    {
      title: '<a href="https://tinyurl.com/27trskwz" target="_blank" rel="noreferrer">Journey to Web</a>',
      role: "talk",
      desc: "A speaker session for beginners on getting started with web development: how the web fits together, picking a sensible first stack, and learning by building real projects in public instead of collecting tutorials.",
    },
  ],

  contact: {
    text: "Open to interesting problems, collaborations, and good conversations. The fastest way to reach me is email.",
  },

  // Archived builds shown on projects.html, in order.
  moreProjects: [
    {
      name: "Classroom",
      links: [
        { label: "Live", href: "https://parthpandyappp.github.io/Classroom/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/Classroom" },
      ],
      tech: "Django · Python",
      desc: "An open-source, minimal alternative to Google Classroom. 43 stars on GitHub.",
    },
    {
      name: "o-imports",
      links: [
        { label: "Live", href: "https://o-imports.vercel.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/o-imports" },
      ],
      tech: "React",
      desc: "A small engine that organizes messy JavaScript imports: paste them in, get them sorted. Built for every junior dev who's had \"organize your imports\" left on a code review.",
    },
    {
      name: "Prostack",
      links: [
        { label: "Live", href: "https://prostack.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/Prostack" },
      ],
      tech: "React · hackNeoG finalist",
      desc: "An open-source platform to discover interesting projects and connect with their owners for collaboration. Shortlisted among 7 teams out of 33.",
    },
    {
      name: "Lattice",
      links: [
        { label: "Live", href: "https://lattice-networks.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/lattice" },
      ],
      tech: "React · Redux",
      desc: "A micro-blogging space to connect and share daily experiences with peers.",
    },
    {
      name: "UnSelected",
      links: [
        { label: "Live", href: "https://unselected.vercel.app/" },
        { label: "GitHub", href: "https://github.com/logan1x/unselected" },
      ],
      tech: "React · GPT-3",
      desc: "An AI-powered cover letter generator built on GPT-3 and React.",
    },
    {
      name: "Auctomate",
      links: [
        { label: "Live", href: "https://auctomate.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/auctomate" },
      ],
      tech: "React",
      desc: "A marketplace to bid on and sell assets.",
    },
    {
      name: "Streflix",
      links: [
        { label: "Live", href: "https://streflix.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/streflix" },
      ],
      tech: "React",
      desc: "A video library app with playlists, liked videos, watch later, and watch history.",
    },
    {
      name: "Pen and Pap",
      links: [
        { label: "Live", href: "https://penandpap.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/penandpap" },
      ],
      tech: "React",
      desc: "A stationery e-commerce store with wishlist, cart, filters, and sorting.",
    },
    {
      name: "PlunkOrders",
      links: [
        { label: "Live", href: "https://plunkorders.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/plunkOrders" },
      ],
      tech: "React · Firebase",
      desc: "A real business solution for placing and monitoring daily orders.",
    },
    {
      name: "Tweet Scraper",
      links: [
        { label: "GitHub", href: "https://github.com/parthpandyappp/Tweet-Scraper" },
      ],
      tech: "Flask · Python",
      desc: "Scrapes clean tweet text from any Twitter account, with no emojis, URLs, or mentions.",
    },
    {
      name: "Wordize",
      links: [
        { label: "Live", href: "https://wordize.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/Wordize" },
      ],
      tech: "Vanilla JS",
      desc: "Two APIs talking to each other: one fetches a word, the other fetches its meaning.",
    },
    {
      name: "emojiMania",
      links: [
        { label: "Live", href: "https://emojimania.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/emojiMania" },
      ],
      tech: "React",
      desc: "A single-page React app demonstrating the useState hook.",
    },
    {
      name: "BananaProcessor",
      links: [
        { label: "Live", href: "https://bananaprocessor.netlify.app/" },
        { label: "GitHub", href: "https://github.com/parthpandyappp/BananaProcessor" },
      ],
      tech: "Vanilla JS",
      desc: "Translates English to Minionese, the language the minions speak.",
    },
  ],
  moreProjectsLink: {
    label: "Everything else on GitHub →",
    href: "https://github.com/parthpandyappp?tab=repositories",
  },

  footer: "© 2026 Parth Pandya",
};
