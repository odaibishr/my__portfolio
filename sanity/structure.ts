import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('portfolio').title('Portfolio'),
      S.documentTypeListItem('technology').title('Technology'),
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('about').title('About'),
      S.documentTypeListItem('certificate').title('Certificate'),
      S.documentTypeListItem('social').title('Social'),
      S.documentTypeListItem('skill').title('Skill'),
      S.divider(),
    ])
