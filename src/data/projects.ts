export type Project = {
  slug: string
  title: string
  company: string
  role: string
  description: string
  disciplines: string[]
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'arc-themes-blocks',
    title: 'Arc Themes Blocks',
    company: 'The Washington Post / Arc XP',
    role: 'Senior → Staff Software Engineer',
    description:
      'Owned a library of 70+ React npm packages that power the Arc Themes block system, used by hundreds of news publishers worldwide. Work spanned component architecture, a design token pipeline that compiled JSON tokens into production CSS, the admin UI for site-wide configuration, and visual quality through Storybook documentation and Chromatic regression testing.',
    disciplines: ['Design Systems', 'Front-End Development'],
    tags: ['React', 'JavaScript', 'CSS', 'Design Tokens', 'Storybook', 'Chromatic', 'npm'],
    link: 'https://github.com/WPMedia/arc-themes-blocks',
  },
  {
    slug: 'hybrd-fitness-app',
    title: 'HYBRD Fitness App',
    company: 'Independent',
    role: 'Product Designer',
    description:
      'Designed wireframes and high-fidelity interactive prototypes for a fitness application from zero to complete user experience, covering information architecture, onboarding flows, workout builder, and core navigation. The product was accepted into Y Combinator, validating the design vision through clear UX flows and polished Figma prototypes that communicated the product concept without a line of production code.',
    disciplines: ['UX/UI Design', 'Prototyping', 'Logo/Branding', 'Front-End Development'],
    tags: ['Figma', 'Adobe Illustrator', 'TypeScript', 'React Native'],
  },
  {
    slug: 'figma-arc-xp-token-exporter',
    title: 'Figma Arc XP Design Token Exporter',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Figma plugin that automates the translation of Figma Variables into Arc XP\'s design token bundle format, exporting a ready-to-use ZIP of global, alias, and breakpoint JSON files directly from a design file. Eliminated the manual, error-prone step of converting design decisions into the structured format Arc XP Themes requires.',
    disciplines: ['Plugin Development', 'Developer Tooling'],
    tags: ['TypeScript', 'Figma Plugin API', 'esbuild', 'JSZip'],
    link: 'https://github.com/bganderson95/figma-design-token-exporter',
  },
  {
    slug: 'parcel-chrome-extension',
    title: 'Parcel',
    company: 'Independent',
    role: 'Product Engineer',
    description:
      'Built a working Chrome extension prototype exploring micropayments for paywalled news articles, letting readers pay per article instead of subscribing. Validated the full browser-side mechanics: OAuth authentication via the Chrome Identity API, real-time tab monitoring with dynamic icon states, a wallet-based purchase flow, and a serverless AWS backend with per-user article unlocking.',
    disciplines: ['Product Design', 'Front-End Development', 'Logo/Branding'],
    tags: ['React', 'Figma', 'Adobe Illustrator', 'Chrome Extensions API', 'AWS Lambda', 'DynamoDB'],
  },
  {
    slug: 'developer-experience-cli',
    title: 'Developer Experience CLI',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Helped architect Arc XP CLI, a plugin-based Node.js/TypeScript tool for automating developer workflows across the Arc XP platform. Built plugins for deploying PageBuilder bundles, forking Themes blocks, pulling custom schemas, and supporting both interactive local usage and CI/CD automation. Also prototyped Blocksmith, an unpublished AI-powered block generator that explored using natural language prompts to create Arc XP-compatible frontend artifacts.',
    disciplines: ['Developer Experience', 'CLI Development', 'AI Prototyping'],
    tags: ['Node.js', 'TypeScript', 'AWS', 'npm', 'CI/CD'],
  },
]
