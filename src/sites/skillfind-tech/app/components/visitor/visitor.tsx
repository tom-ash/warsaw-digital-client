import React from 'react'
import loadable from '@loadable/component'
import { useRender } from '../../../../shared/app/functions/store/use-render'
import { useVisitor } from '../../../../shared/app/functions/store/use-visitor'
const PrivacyMonit = loadable(() => import('./components/administration/privacy-monit/privacy-monit'))
const VisitorContact = loadable(() => import('./components/contact/contact'))
const About = loadable(() => import('./components/about/about'))
const TermsOfService = loadable(() => import('./components/administration/terms-of-service/terms-of-service'))
const CookiesPolicy = loadable(() => import('./components/administration/cookies-policy/cookies-policy'))
const PrivacyPolicy = loadable(() => import('./components/administration/privacy-policy/privacy-policy'))
const PrivacySettings = loadable(() => import('./components/administration/privacy-settings/privacy-settings'))
const PageIndex = loadable(() => import('./components/page/components/index/index'))

export const Visitor = () => {
  const render = useRender()
  const visitor = useVisitor()
  const { statisticsConsent, marketingConsent } = visitor
  const renderContact = render['visitor/contact']
  const renderCookiesPolicy = render['visitor/cookies-policy']
  const renderPrivacyPolicy = render['visitor/privacy-policy']
  const renderTermsOfService = render['visitor/terms-of-service']
  const renderPrivacySettings = render['visitor/privacy-settings']
  const renderAbout = render['visitor/about']
  const renderNotFound = render['page/not-found']
  const { renderVisitorPageIndex } = render
  const showPrivacyMonit =
    (statisticsConsent === null || marketingConsent === null) &&
    !renderNotFound &&
    !renderContact &&
    !renderTermsOfService &&
    !renderCookiesPolicy &&
    !renderPrivacyPolicy &&
    !renderPrivacySettings

  return (
    <div id='visitor'>
      {showPrivacyMonit && <PrivacyMonit />}
      {renderContact && <VisitorContact />}
      {renderTermsOfService && <TermsOfService />}
      {renderCookiesPolicy && <CookiesPolicy />}
      {renderPrivacyPolicy && <PrivacyPolicy />}
      {renderPrivacySettings && <PrivacySettings />}
      {renderVisitorPageIndex && <PageIndex />}
      {renderAbout && <About />}
    </div>
  )
}

export default Visitor
