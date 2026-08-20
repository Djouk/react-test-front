export type ProfileLink = {
  id: string
  label: string
  url: string
  kind: 'github' | 'linkedin' | 'email' | 'website' | 'other'
  displayOrder: number
}

export type ProjectHighlight = {
  id: string
  title: string
  summary: string
  outcome: string
  tags: string[]
  href?: string
}

export type FocusArea = {
  id: string
  title: string
  description: string
}

export type Profile = {
  id: string
  fullName: string
  displayName: string
  headline: string
  bio: string
  location?: string
  avatarUrl?: string
  links: ProfileLink[]
}

export const profile: Profile = {
  id: 'diogo-de-andrade',
  fullName: 'Diogo de Andrade',
  displayName: 'Diogo',
  headline: 'Full-stack developer building practical TypeScript products.',
  bio: 'I design and ship focused web systems with a strong preference for clear contracts, fast interfaces, and backend foundations that can grow without getting noisy.',
  location: 'Brazil',
  links: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Djouk',
      kind: 'github',
      displayOrder: 1,
    },
    {
      id: 'website',
      label: 'Website',
      url: 'https://diogodeandrade.com.br',
      kind: 'website',
      displayOrder: 2,
    },
  ],
}

export const projectHighlights: ProjectHighlight[] = [
  {
    id: 'personal-profile-platform',
    title: 'Personal profile platform',
    summary:
      'A focused public profile experience for presenting work, links, and contact identity under a personal domain.',
    outcome: 'Simple surface now, clean product boundary for future growth.',
    tags: ['React', 'TypeScript', 'Cloudflare Pages'],
    href: 'https://diogodeandrade.com.br',
  },
  {
    id: 'adonis-api-foundation',
    title: 'AdonisJS API foundation',
    summary:
      'A TypeScript API baseline with CORS, request timeouts, UTC runtime configuration, and visitor-safe error handling.',
    outcome: 'Ready for email subscription and D1 persistence features.',
    tags: ['AdonisJS', 'Node.js', 'API Design'],
  },
  {
    id: 'cloudflare-data-path',
    title: 'Cloudflare-ready data path',
    summary:
      'A planned subscription flow that keeps visitor email, consent, and persistence behind explicit API contracts.',
    outcome: 'Privacy expectations stay visible before data collection starts.',
    tags: ['Cloudflare D1', 'SQLite', 'Privacy'],
  },
]

export const focusAreas: FocusArea[] = [
  {
    id: 'frontend-systems',
    title: 'Frontend systems',
    description:
      'Responsive React interfaces that stay fast, readable, and easy to evolve.',
  },
  {
    id: 'backend-contracts',
    title: 'Backend contracts',
    description:
      'TypeScript API foundations with clear boundaries between HTTP, services, and persistence.',
  },
  {
    id: 'product-clarity',
    title: 'Product clarity',
    description:
      'Small vertical slices, direct user flows, and technical decisions that serve the product.',
  },
]
