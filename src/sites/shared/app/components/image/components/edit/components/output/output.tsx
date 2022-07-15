import React from 'react'
import RenderNode from '../../../../../support/render-node/render-node'

interface OutputProps {
  width: string,
  height: string,
  bodyElements: RenderNodeData[],
  clientUrl: string
  appName: string
  device: string
  lang: string
  changeRoute(props: object): void
  langHandler: LangHandler
}

const Output = (props: OutputProps) => {
  const {
    width,
    height,
    bodyElements,
    clientUrl,
    appName,
    device,
    lang,
    changeRoute,
    langHandler
  } = props

  const nodeProps = {
    node: {
      image: bodyElements
    },
    jsonBody: bodyElements,
    clientUrl,
    appName,
    device,
    lang,
    changeRoute,
    langHandler
  }

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height
      }}
    >
      <RenderNode {...nodeProps} />
    </div>
  )
}

export default Output
