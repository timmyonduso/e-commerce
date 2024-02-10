import { checkRole } from '../../Users/checkRole'
import type { Access } from 'payload/config'

export const adminsOrPublished: Access = ({ req: { user } }) => {
  if (checkRole(['admin'], user)) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
