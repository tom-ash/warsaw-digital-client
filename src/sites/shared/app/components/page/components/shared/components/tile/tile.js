import React from 'react'
import SVG from '../../../../../support/svg/svg.js'
import RenderNode from '../../../../../support/render-node/render-node'

const PageTile = props => {
  const {
    body,
    meta,
    publishedOn,
    modifiedOn,
    appName,
    device,
    lang,
    renderShow,
    fetching,
    isAdmin,
    clientUrl,
    changeRoute,
    buildUrl,
    changePage,
    langHandler,
    title: pageTitle,
    coverImage
  } = props

  const buttonClasses = ['page-edit']
  if (fetching) buttonClasses.push('fetching')
  const buttonClassName = buttonClasses.join(' ')

  const jsonBody = (() => {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return []
    }
  })()

  const jsonMeta = (() => {
    try {
      return typeof meta === 'object' ? meta : JSON.parse(meta)
    } catch {
      return {}
    }
  })()

  const nodeProps = {
    node: {
      page: jsonBody
    },
    jsonBody,
    jsonMeta,
    publishedOn,
    modifiedOn,
    lang,
    appName,
    device,
    isAdmin,
    clientUrl,
    buildUrl,
    changeRoute,
    langHandler,
    pageTitle,
    coverImage
  }

  return (
    <>
      {<RenderNode {...nodeProps} />}
      {isAdmin && (
      <>
        {renderShow && <button className={buttonClassName} onClick={changePage}><SVG name='edit' /></button>}
      </>
      )}
    </>
  )
}

export default PageTile
