export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Konlyzx',
    url: 'https://konlyzx.dev',
    description:
      'Fullstack developer based in Colombia — focused on clean interfaces, smooth interactions, and scalable backends.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://konlyzx.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Konlyzx',
    url: 'https://konlyzx.dev',
    jobTitle: 'Fullstack Developer',
    description:
      'Fullstack developer based in Colombia — focused on clean interfaces, smooth interactions, and scalable backends.',
    sameAs: [
      'https://twitter.com/konlyzx_',
      'https://github.com/konlyzx',
    ],
  }
}
