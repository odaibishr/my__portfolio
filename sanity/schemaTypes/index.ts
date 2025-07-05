import { type SchemaTypeDefinition } from 'sanity'

import { social } from './social'
import { portfolio } from './portfolio'
import { technology } from './technology'
import { about } from './about'
import { certificate } from './certificate'
import { project } from './project'
import { skill } from './skill'
import { faqs } from './faqs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    social,
    portfolio,
    technology,
    about,
    certificate,
    project,
    skill,
    faqs,
  ],
}
