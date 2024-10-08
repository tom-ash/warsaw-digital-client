import React from 'react'
import { PageTile } from '../shared/components/tile/tile'
import { changeUrl } from '../../../../functions/routes/changers/change-url'
import { useLinks } from '../../../../functions/store/use-links'
import { useUser } from '../../../../functions/store/use-user'
import Breadcrumbs from '../../../support/render-node/components/breadcrumbs/breadcrumbs'
import { SVG } from '../../../support/svg/svg'

const PageShow = () => {
  const links = useLinks()
  const { role } = useUser()
  const isAdmin = role === 'admin'
  const href = links['page/edit'].href

  return (
    <div id='pages-show'>
      <Breadcrumbs />
      <PageTile />
      {isAdmin && (
        <button
          className={'pages-edit'}
          onClick={() => changeUrl({ href })}
        >
          <SVG name='edit' />
        </button>
      )}
    </div>
  )
}

export default PageShow
