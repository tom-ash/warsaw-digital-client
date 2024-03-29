import React, { useEffect } from 'react'
import { useFonts } from './functions/use-fonts'
import { useScreenSizeHandler } from './functions/use-screen-size-handler'
import { useStateToRouteMatcher } from './functions/use-state-to-route-matcher'
import loadable from '@loadable/component'
const Header = loadable(() => import('./components/scaffold/header/header'))
const Visitor = loadable(() => import('./components/visitor/visitor'))
const User = loadable(() => import('./components/user/user'))
const Listing = loadable(() => import('./components/listing/listing'))
const Page = loadable(() => import('../../shared/app/components/page/page'))
const Image = loadable(() => import('../../shared/app/components/image/image'))
const AssetsIndex = loadable(() => import('../../skillfind-tech/app/components/asset/components/index/index'))
const Footer = loadable(() => import('./components/scaffold/footer/footer'))
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { setIsMobile } from './functions/set-is-mobile'
import apiUrl from '../shared/constants/urls/api'
import { setConsents } from '../../shared/app/functions/consents/set-consents'
import { useApp } from '../../shared/app/functions/store/use-app'
import { useRender } from '../../shared/app/functions/store/use-render'
import { useDispatch } from 'react-redux'

const RedirectsIndex = loadable(() => import('../../shared/app/components/redirect/components/index'))

const App = () => {
  useStyles(styles)

  const { lang } = useApp()
  const render = useRender()
  const dispatch = useDispatch()

  useEffect(() => {
    // @ts-ignore
    window.apiUrl = apiUrl
    // @ts-ignore
    window.lang = lang
  }, [lang])

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    announcement: renderListing,
    user: renderUser,
    redirectsIndex,
    assetsIndex,
  } = render

  useFonts()
  useScreenSizeHandler()
  useStateToRouteMatcher()

  useEffect(() => setIsMobile(dispatch), []) // TODO: Consider moving to server.
  useEffect(() => setConsents(dispatch), [])

  return (
    <>
      <Header />
      <div id='content'>
        {renderVisitor && <Visitor />}
        {renderListing && <Listing />}
        {renderUser && <User />}
        {renderPage && <Page />}
        {renderImage && <Image />}
        {assetsIndex && <AssetsIndex />}
        {redirectsIndex && <RedirectsIndex />}
      </div>
      <Footer />
    </>
  )
}

export default App
