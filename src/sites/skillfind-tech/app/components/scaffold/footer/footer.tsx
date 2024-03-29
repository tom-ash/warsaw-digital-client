import React from 'react'
import { ContactLink } from './components/contact/contact.link'
import { TermsOfServiceLink } from './components/terms-of-service/terms-of-service.link'
import { CookiesPolicyLink } from './components/cookies-policy/cookies-policy.link'
import { PrivacyPolicyLink } from './components/privacy-policy/privacy-policy.link'
import { PrivacySettingsLink } from './components/privacy-settings/privacy-settings.link'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../shared/app/functions/store/use-texts'
import { Link } from '../../../../../shared/app/components/support/link/link'
import { SVG } from '../../../../../shared/app/components/support/svg/svg'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'

const Footer = () => {
  useStyles(styles)

  const { allRightsReserved } = useTexts()

  return (
    <footer id='footer'>
      <div className='social-pages'>
        <Link
          linkKey='facebook'
          label={<SVG name='facebookSquare' />}
        />
        <Link
          linkKey='linkedin'
          label={<SVG name='linkedinSquare' />}
        />
      </div>
      <div className='links'>
        <ContactLink />
        <TermsOfServiceLink />
        <CookiesPolicyLink />
        <PrivacyPolicyLink />
        <PrivacySettingsLink />
        <div className='float-clear' />
      </div>
      <div className='copyright'>
        <span className='warsaw-digital'>Warsaw Digital Sp. z o.o. 2020 - 2023</span>
        <span className='all-rights-reserved'>{allRightsReserved}</span>
      </div>
      <FloatClear />
    </footer>
  )
}

export default Footer
