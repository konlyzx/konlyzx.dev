export interface Project {
  title: string
  description: string
  url: string
  category: 'raycast-extension' | 'next-js' | 'npm-package' | 'website'
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  translationKey?: string
  index?: number
  tags?: string[]
  isBeta?: boolean
  githubUrl?: string
}

export interface Post {
  slug: string
  title: string
  date: string
}
