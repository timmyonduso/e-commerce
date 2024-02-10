import Button from './Button'
import Element from './Element'
import withLargeBody from './plugin'
import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'

const richTextLargeBody: RichTextCustomElement = {
  name: 'large-body',
  Button,
  Element,
  plugins: [withLargeBody],
}

export default richTextLargeBody
