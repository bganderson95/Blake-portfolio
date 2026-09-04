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
    slug: 'hybrd-fitness-app',
    title: 'HYBRD Fitness App',
    company: 'Independent',
    role: 'Product Designer',
    description:
      'Designed a fitness app from zero to a complete user experience in Figma. The product was accepted into Y Combinator.',
    disciplines: ['UX/UI Design', 'Prototyping', 'Logo/Branding', 'Front-End Development'],
    tags: ['Figma', 'Adobe Illustrator', 'TypeScript', 'React Native'],
  },
  {
    slug: 'arc-themes-blocks',
    title: 'Arc Themes Blocks',
    company: 'The Washington Post / Arc XP',
    role: 'Senior → Staff Software Engineer',
    description:
      'Owned a library of 70+ React npm packages that power the Arc Themes block system, used by dozens of news publishers across hundreds of sites worldwide.',
    disciplines: ['Design Systems', 'Front-End Development'],
    tags: ['React', 'JavaScript', 'CSS', 'Design Tokens', 'Storybook', 'Chromatic', 'npm'],
    link: 'https://github.com/WPMedia/arc-themes-blocks',
  },
  {
    slug: 'parcel-chrome-extension',
    title: 'Parcel',
    company: 'Independent',
    role: 'Product Engineer',
    description:
      'Built a working Chrome extension prototype exploring micropayments for paywalled news articles, letting readers pay per article instead of subscribing.',
    disciplines: ['Product Design', 'Front-End Development', 'Logo/Branding'],
    tags: ['React', 'Figma', 'Adobe Illustrator', 'Chrome Extensions API', 'AWS Lambda', 'DynamoDB'],
  },
  {
    slug: 'figma-arc-xp-token-exporter',
    title: 'Figma Arc XP Design Token Exporter',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Figma plugin that turns Figma Variables into Arc XP\'s design token bundle format, exported straight from a design file.',
    disciplines: ['Plugin Development', 'Developer Tooling'],
    tags: ['TypeScript', 'Figma Plugin API', 'esbuild', 'JSZip'],
    link: 'https://github.com/bganderson95/figma-design-token-exporter',
  },
  {
    slug: 'developer-experience-cli',
    title: 'Developer Experience CLI',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Helped architect Arc XP CLI, a plugin-based Node.js/TypeScript tool for automating developer workflows across the Arc XP platform.',
    disciplines: ['Developer Experience', 'CLI Development', 'AI Prototyping'],
    tags: ['Node.js', 'TypeScript', 'AWS', 'npm', 'CI/CD'],
  },
]
