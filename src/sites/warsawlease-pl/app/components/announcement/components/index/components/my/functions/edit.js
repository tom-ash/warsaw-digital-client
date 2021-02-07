import { ANNOUNCEMENT_EDIT_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import { buildAnnouncementEditUrl } from '../../../../../../../../shared/functions/builders/announcement/edit-url.js'

export function edit({
  id
}) {
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${buildAnnouncementEditUrl({ id, lang })}`
  const track = ANNOUNCEMENT_EDIT_TRACK

  changeRoute({ href, track })
}
