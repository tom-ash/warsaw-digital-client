import getPureUrl from '../../../../shared/functions/routes/getters/pure-url'
import { openGraphBuilder } from '../../../../shared/functions/builders/open-graph-builder'

// @ts-ignore
const replaceOpenGraph = openGraphProps => {
  const elements = document.querySelectorAll(`meta[property^="og"]`)
  elements.forEach(element => element.remove())

  const openGraph = openGraphBuilder(openGraphProps)
  document.head.innerHTML = document.head.innerHTML + openGraph
}

// @ts-ignore
function metaSetter(meta) {
  const { clientUrl, url, canonicalUrl, schemaOrg, openGraph, lang, title, description, keywords } = meta
  const canonicalPath = typeof canonicalUrl === 'string' ? canonicalUrl : url

  document.documentElement.lang = lang
  document.title = title
  document.querySelector('meta[name="description"]')!.setAttribute('content', description)
  document.querySelector('meta[name="keywords"]')!.setAttribute('content', keywords)
  document.querySelector('link[rel="canonical"]')!.setAttribute('href', getPureUrl(`${clientUrl}/${canonicalPath}`))

  replaceOpenGraph(openGraph)

  document.querySelector(`script[type="application/ld+json"]`)!.innerHTML = JSON.stringify(schemaOrg)
}

export default metaSetter