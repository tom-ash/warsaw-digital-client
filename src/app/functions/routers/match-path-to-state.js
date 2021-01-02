import { allowedOrigins } from '../../constants/allowed-origins'
import { getRouteByRender } from '../../../shared/functions/getters/route-by-render'
import { getPath } from './get-path'

export function matchRouteToRenderAndLanguage() {
  if (
    typeof window === 'undefined' ||
    allowedOrigins.indexOf(window.origin) === -1
  ) return

  const {
    render,
    language: lang,
    changeApp
  } = this.props
  const route = getRouteByRender({ render, lang })
  let path = getPath.apply(this, [route])

  if (path === null) return

  changeApp({ shouldMatchRouteToRenderAndLanguage: false })
  window.history.pushState({ path }, '', path)
}
