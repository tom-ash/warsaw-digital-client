// @ts-ignore
import React from 'react'
// @ts-ignore
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import Visitor from '../../shared/app/components/visitor/visitor.js'
import Announcement from './components/announcement/announcement'
import Page from '../../shared/app/components/page/page.js'
import User from './components/user/user'
import Footer from '../../shared/app/components/scaffold/footer/footer.js'
import Header from '../../shared/app/components/scaffold/header/header.js'
import * as lifecycle from './functions/lifecycle'
import screenSizeHandler from '../../shared/app/functions/screen/handlers/screen-size.js'
import popStateHandler from '../../shared/app/functions/routes/handlers/pop-state.js'
import langHandler from './functions/lang-handler'
import matchStateToRoute from './functions/routes/matchers/state-to-route.js'
import changeRoute from './functions/routes/changers/route.js'
import AppContext from './constants/context.js'
import CLIENT_URL from '../shared/constants/urls/client.js'
import API_URL from '../shared/constants/urls/api.js'
import customNodeParser from './components/page/show/functions/custom-node-parser.js'
import * as langs from '../shared/constants/langs/langs.js'
// @ts-ignore
import withStyles from 'isomorphic-style-loader/withStyles'
// @ts-ignore
import styles from './styles/styles.scss'
// @ts-ignore
import headerStyles from './components/scaffold/header/styles/styles.scss'
import Logo from './components/scaffold/header/components/logo/logo.js'
import HeaderCustomization from './components/scaffold/header/components/customization/customization.js'
import initSentry from '../../shared/app/functions/analytics/sentry/init.js'
import buildUrl from '../shared/functions/builders/url.js'

initSentry()

const APP_NAME = 'mapawynajmu-pl'

class App extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.componentDidMount = lifecycle.componentDidMount
    // @ts-ignore
    this.componentDidUpdate = lifecycle.componentDidUpdate
    // @ts-ignore
    this.screenSizeHandler = screenSizeHandler.bind(this)
    // @ts-ignore
    this.popStateHandler = popStateHandler.bind(this)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
    // @ts-ignore
    this.matchStateToRoute = matchStateToRoute.bind(this)
    // @ts-ignore
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    // @ts-ignore
    const { render, renderPage, renderVisitor, renderAnnouncement, renderUser, lang, links, device, authorized, pageShowData, pageEditData, announcementShowData, announcementEditData, dispatch } = this.props
    // @ts-ignore
    const AppContextValue = { changeRoute: this.changeRoute, matchStateToRoute: this.matchStateToRoute }
    // @ts-ignore
    const sharedProps = { appName: APP_NAME, langs, links, clientUrl: CLIENT_URL, apiUrl: API_URL, render, device, authorized, changeRoute: this.changeRoute, buildUrl, langHandler: this.langHandler, dispatch }
    // @ts-ignore
    const pageProps = { ...sharedProps, customNodeParser }
    // @ts-ignore
    const urlComposites = { pageShowData, pageEditData, announcementShowData, announcementEditData }

    return (
      <AppContext.Provider value={AppContextValue}>
        <Header { ...{ ...sharedProps, urlComposites, lang, Logo, HeaderCustomization, styles: headerStyles }}/>
        {renderAnnouncement && <Announcement/>}
        {/* @ts-ignore */}
        {renderPage && <Page {...pageProps}/>}
        {/* @ts-ignore */}
        {renderVisitor && <Visitor {...sharedProps}/>}
        {/* @ts-ignore */}
        {renderUser && <User />}
        <Footer {...sharedProps}/>
      </AppContext.Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))