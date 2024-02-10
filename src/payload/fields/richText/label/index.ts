import Button from './Button'
import Element from './Element'
import withLabel from './plugin'
import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'

const richTextLabel: RichTextCustomElement = {
  name: 'label',
  Button,
  Element,
  plugins: [withLabel],
}

export default richTextLabel
