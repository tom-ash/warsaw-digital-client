import openGraphProvider from '../providers/open-graph'
import schemaOrgProvider from '../providers/schema-org'
import pretty from 'pretty'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'

function indexRenderer({
  clientUrl, url, canonicalUrl, lang, noIndex,
  title, description, keywords, openGraph, schemaOrg,
  css, html, preloadedState, scriptTags
}) {
  const charsetMeta = `<meta charset="UTF-8">`
  const viewportMeta = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
  const canonicalMeta = `<link rel="canonical" href="${getPureUrl(`${clientUrl}/${canonicalUrl || url}`)}">`
  const robotsMeta = `<meta name="robots" content="${noIndex ? 'noindex' : 'index,follow,all'}">`
  const titleMeta = `<title>${title}</title>`
  const descriptionMeta = `<meta name="description" content="${description}">`
  const keywordsMeta = `<meta name="keywords" content="${keywords}">`
  const openGraphMeta = openGraphProvider(openGraph)
  const schemaOrgMeta = schemaOrgProvider(schemaOrg)
  const style = `<style type="text/css">${[...css].join('')}</style>`
  const preloadedStateScript = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`
  const indexAsHtml = (
    `<!doctype html>
    <html lang="${lang}">
      <head>
        ${charsetMeta}
        ${viewportMeta}
        ${canonicalMeta}
        ${robotsMeta}
        ${titleMeta}
        ${descriptionMeta}
        ${keywordsMeta}
        ${openGraphMeta}
        ${schemaOrgMeta}
        ${style}
      </head>
      <body>
        ${html}
        ${scriptTags}
        ${preloadedStateScript}
      </body>
    </html>`
  )

  return pretty(indexAsHtml)
}

export default indexRenderer
