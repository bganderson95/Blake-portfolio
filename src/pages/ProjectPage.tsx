import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import { DeveloperCLIPage } from './projects/DeveloperCLIPage'
import { FigmaTokenExporterPage } from './projects/FigmaTokenExporterPage'
import { HYBRDPage } from './projects/HYBRDPage'
import { ParcelPage } from './projects/ParcelPage'

const customPages: Record<string, React.ComponentType> = {
  'developer-experience-cli': DeveloperCLIPage,
  'figma-arc-xp-token-exporter': FigmaTokenExporterPage,
  'hybrd-fitness-app': HYBRDPage,
  'parcel-chrome-extension': ParcelPage,
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const exists = slug && projects.some(p => p.slug === slug)

  if (!exists) return <Navigate to="/" replace />

  const Page = slug && customPages[slug]
  if (Page) return <Page />

  return <Navigate to="/" replace />
}
