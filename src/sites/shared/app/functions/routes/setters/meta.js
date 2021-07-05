import metaDataParser from '../../../../shared/functions/parsers/meta-data.js'
import getPureUrl from '../../../../shared/functions/routes/getters/pure-url.js'

function metaSetter(meta) {
  const { clientUrl, url, canonicalUrl } = meta
  const parsedMeta = metaDataParser(meta)
  const { lang, title, description, keywords, openGraph, schemaOrg } = parsedMeta

  document.documentElement.lang = lang
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute("content", description)
  document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)
  document.querySelector('link[rel="canonical"]').setAttribute("href", getPureUrl(`${clientUrl}/${canonicalUrl || url}`))

  openGraph.map(({ name, value }) => {
    document.querySelector(`meta[property="${name}"]`).setAttribute("content", value)
  })

  document.querySelector(`script[type="application/ld+json"]`).innerHTML = schemaOrg
}

export default metaSetter
