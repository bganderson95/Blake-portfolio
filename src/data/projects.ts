export type Project = {
  slug: string
  title: string
  company: string
  role: string
  description: string
  metrics: string[]
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'hybrd-fitness-app',
    title: 'HYBRD Fitness App',
    company: 'Independent',
    role: 'Product Designer',
    description:
      'Designed wireframes and high-fidelity interactive prototypes for a fitness application from zero to complete user experience, covering information architecture, onboarding flows, workout builder, and core navigation. The product was accepted into Y Combinator, validating the design vision through clear UX flows and polished Figma prototypes that communicated the product concept without a line of production code.',
    metrics: ['Y Combinator accepted', 'Zero-to-complete UX'],
    tags: ['Figma', 'Prototyping', 'Wireframing', 'UX Research', 'Information Architecture'],
  },
  {
    slug: 'figma-arc-xp-token-exporter',
    title: 'Figma Arc XP Design Token Exporter',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Figma plugin that automates the translation of Figma Variables into Arc XP\'s design token bundle format, exporting a ready-to-use ZIP of global, alias, and breakpoint JSON files directly from a design file. Eliminated the manual, error-prone step of converting design decisions into the structured format Arc XP Themes requires.',
    metrics: ['3-file token bundle', 'ZIP export', 'Open source'],
    tags: ['TypeScript', 'Figma Plugin API', 'esbuild', 'JSZip', 'Design Tokens'],
    link: 'https://github.com/bganderson95/figma-design-token-exporter',
  },
  {
    slug: 'parcel-chrome-extension',
    title: 'Parcel',
    company: 'Independent',
    role: 'Product Engineer',
    description:
      'Built a working Chrome extension prototype exploring micropayments for paywalled news articles, letting readers pay per article instead of subscribing. Validated the full browser-side mechanics: OAuth authentication via the Chrome Identity API, real-time tab monitoring with dynamic icon states, a wallet-based purchase flow, and a serverless AWS backend with per-user article unlocking.',
    metrics: ['Chrome Manifest V3', 'AWS Serverless backend', 'Working prototype'],
    tags: ['React', 'Chrome Extensions API', 'Webpack', 'AWS Lambda', 'DynamoDB', 'Serverless Framework'],
  },
  {
    slug: 'developer-experience-cli',
    title: 'Developer Experience CLI',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Helped architect Arc XP CLI, a plugin-based Node.js/TypeScript tool for automating developer workflows across the Arc XP platform. Built plugins for deploying PageBuilder bundles, forking Themes blocks, pulling custom schemas, and supporting both interactive local usage and CI/CD automation. Also prototyped Blocksmith, an unpublished AI-powered block generator that explored using natural language prompts to create Arc XP-compatible frontend artifacts.',
    metrics: ['Interactive + automation modes', 'Secure AWS token handling', 'Production CLI'],
    tags: ['Node.js', 'TypeScript', 'CLI', 'Developer Tooling', 'AI', 'CI/CD'],
  },
]
