import React from 'react'
import { useStore } from '../../../../shared/app/functions/store/useStore'
import loadable from '@loadable/component'
const PrivacyMonit = loadable(() => import('./components/administration/privacy-monit/privacy-monit'))
const VisitorContact = loadable(() => import('./components/contact/contact'))
const TermsOfService = loadable(() => import('./components/administration/terms-of-service/terms-of-service'))
const CookiesPolicy = loadable(() => import('./components/administration/cookies-policy/cookies-policy'))
const PrivacyPolicy = loadable(() => import('./components/administration/privacy-policy/privacy-policy'))
const PrivacySettings = loadable(() => import('./components/administration/privacy-settings/privacy-settings'))

export const Visitor = () => {
  const { state } = useStore()
  const { render, visitor } = state
  const { statisticsConsent, marketingConsent } = visitor
  const renderContact = render['visitor/contact']
  const renderCookiesPolicy = render['visitor/cookies-policy']
  const renderPrivacyPolicy = render['visitor/privacy-policy']
  const renderTermsOfService = render['visitor/terms-of-service']
  const renderPrivacySettings = render['visitor/privacy-settings']
  const showPrivacyMonit =
    (statisticsConsent === null || marketingConsent === null) &&
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
    </div>
  )
}

export default Visitor