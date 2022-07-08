import React from 'react'
import loadable from '@loadable/component'

const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Heading = loadable(() => import('./components/heading/heading'))
const List = loadable(() => import('./components/list/list'))
const Code = loadable(() => import('./components/code/code'))
const Image = loadable(() => import('./components/image/image'))
const YouTubeEmbed = loadable(() => import('./components/youtube-embed/youtube-embed'))
const PageIndexer = loadable(() => import('./components/page-indexer/page-indexer'))
const Section = loadable(() => import('../section/section'))
const TitleBoard = loadable(() => import('./components/title-board/title-board'))
const Editorial = loadable(() => import('./components/editorial/editorial'))
const TableOfContents = loadable(() => import('./components/table-of-contents/table-of-contents'))

const Node = (props: NodeProps) => {
  const { node, index } = props

  if (!node) return null

  if (typeof node === 'string') {
    const paragraphProps = {
      ...props,
      content: node
    }

    return <Paragraph key={index} {...paragraphProps} />
  }

  if (Array.isArray(node)) {
    const ulProps = { listNodes: node }

    return <List key={index} {...ulProps} />
  }

  if (node.h2) {
    const headingProps = {
      rank: 2,
      heading: node.h2
    }

    return <Heading key={index} {...headingProps} />
  }

  if (node.h3) {
    const headingProps = {
      rank: 3,
      heading: node.h3
    }

    return <Heading key={index} {...headingProps} />
  }

  if (node.h4) {
    const headingProps = {
      rank: 4,
      heading: node.h4
    }

    return <Heading key={index} {...headingProps} />
  }

  // @ts-ignore
  if (node.img) {
    // @ts-ignore
    const { s: src, a: alt } = node.img
    const imgProps = { src, alt }

    return <Image key={index} {...imgProps} />
  }

  // @ts-ignore
  if (node.code) {
    // @ts-ignore
    const { code } = node
    // @ts-ignore
    const { jsonMeta: { codeLang: pageCodeLang } } = props
    const codeProps = { code, pageCodeLang }

    return <Code key={index} {...codeProps}/>
  }

  // @ts-ignore
  if (node.yte) {
    // @ts-ignore
    const { s: src, w: width } = node.yte
    const youTubeEmbedProps = { key: index, src, width }

    return <YouTubeEmbed {...youTubeEmbedProps}/>
  }

  // @ts-ignore
  if (node.main) {
    // @ts-ignore
    return <Section key={index} {...{ ...props, element: 'main', className: 'main', jsonBody: node.main }} />
  }

  // @ts-ignore
  if (node.article) {
    // @ts-ignore
    const className = node.className

    // @ts-ignore
    return <Section key={index} {...{ ...props, element: 'article', className, jsonBody: node.article }} />
  }
  
  // @ts-ignore
  if (node.t === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  // @ts-ignore
  if (node.toc) {
    // @ts-ignore
    const { sectionBody } = props

    // @ts-ignore
    const tableOfContentsProps = { key: index, jsonBody: sectionBody, title: node.toc }

    return <TableOfContents {...tableOfContentsProps} />
  }

  // @ts-ignore
  if (node.editorial) {
    // @ts-ignore
    const { editorial } = node
    const editorialProps = { key: index, editorial}

    return <Editorial {...editorialProps} />
  }

  // @ts-ignore
  if (node.header) {
    const {
      t: title,
      a: author,
      i: image,
      l: logo
      // @ts-ignore
    } = node.header

    const {
      // @ts-ignore
      publishedOn,
      // @ts-ignore
      modifiedOn,
      // @ts-ignore
      appName,
      // @ts-ignore
      device,
      // @ts-ignore
      lang,
      // @ts-ignore
      langHandler
    } = props

    const titleBoardProps = {
      key: index,
      title,
      author,
      image,
      logo,
      publishedOn,
      modifiedOn,
      appName,
      device,
      lang,
      langHandler
    }

    return <TitleBoard {...titleBoardProps} />
  }

  return null
}

export default Node