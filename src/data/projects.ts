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
    slug: 'arc-xp-component-ecosystem',
    title: 'Arc XP Component Ecosystem',
    company: 'The Washington Post / Arc XP',
    role: 'Senior → Staff Software Engineer',
    description:
      'Owned a library of 70+ React npm packages powering hundreds of client newsroom websites — including component architecture, the admin UI for site configuration, and a design token pipeline that compiled token-based JSON files into production CSS. Maintained quality through Storybook documentation, Chromatic visual regression testing, and coordinated release workflows across multiple consuming teams.',
    metrics: ['70+ packages', '100s of millions of pageviews', '100+ client sites'],
    tags: ['React', 'TypeScript', 'CSS', 'Design Tokens', 'Storybook', 'Chromatic', 'npm'],
  },
  {
    slug: 'developer-experience-cli',
    title: 'Developer Experience CLI',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Node.js/TypeScript CLI for Arc XP developer workflows — handling environment setup, authentication, and common platform tasks through both interactive and unattended automation modes. Designed with CLI ergonomics in mind: progressive disclosure, clear error messages, and secure credential handling via token-based auth with AWS integration. Eliminated error-prone manual setup steps and made a complex platform accessible to developers across the organization.',
    metrics: ['Interactive + automation modes', 'Secure AWS token handling', 'Production CLI'],
    tags: ['Node.js', 'TypeScript', 'CLI', 'AWS', 'Developer Tooling'],
  },
  {
    slug: 'hybrd-fitness-app',
    title: 'HYBRD Fitness App',
    company: 'Independent',
    role: 'Product Designer',
    description:
      'Designed wireframes and high-fidelity interactive prototypes for a fitness application from zero to complete user experience — information architecture, onboarding flows, workout builder, and core navigation. The product was accepted into Y Combinator, validating the design vision through clear UX flows and polished Figma prototypes that communicated the product concept without a line of production code.',
    metrics: ['Y Combinator accepted', 'Zero-to-complete UX'],
    tags: ['Figma', 'Prototyping', 'Wireframing', 'UX Research', 'Information Architecture'],
  },
  {
    slug: 'figma-arc-xp-token-exporter',
    title: 'Figma Arc XP Design Token Exporter',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Figma plugin that automates the translation of Figma Variables into Arc XP\'s design token bundle format — exporting a ready-to-use ZIP of global, alias, and breakpoint JSON files directly from a design file. Eliminated the manual, error-prone step of converting design decisions into the structured format Arc XP Themes requires.',
    metrics: ['3-file token bundle', 'ZIP export', 'Open source'],
    tags: ['TypeScript', 'Figma Plugin API', 'esbuild', 'JSZip', 'Design Tokens'],
    link: 'https://github.com/bganderson95/figma-design-token-exporter',
  },
]
