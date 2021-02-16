import React from 'react'
import { ROOT_TRACK, ANNOUNCEMENT_INDEX_CATALOGUE_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'
import getRouteByTrack from '../../../../../../../../../../../shared/shared/functions/getters/route-by-track.js'
import routes from '../../../../../../../../../../shared/constants/routes/routes.js'

export function buttonManager() {
  const { changeUrl } = this.context
  const { renderCatalogue } = this.props
  const track = renderCatalogue ? ROOT_TRACK : ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
  const route = getRouteByTrack({ track, routes })
  const { url } = route
  const href = `${CLIENT_URL}/${url === '/' ? '' : url}`

  return {
    classNames: { container: 'button' },
    label: (
      <>
        {renderCatalogue ?
        this.langHandler({ pl: 'Mapa', en: 'Map' })
        : this.langHandler({ pl: 'Katalog', en: 'Catalogue' })
        }
      </>
    ),
    onClick: () => changeUrl({ href })
  }
}