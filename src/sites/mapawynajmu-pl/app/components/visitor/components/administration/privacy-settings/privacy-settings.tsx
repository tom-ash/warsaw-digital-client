import React from 'react'
import { Heading } from '../../../../support/components/heading'
import { StatisticsConsentRadio } from './components/statistics-consent/statistics-consent.radio'
import { MarketingConsentRadio } from './components/marketing-consent/marketing-consent.radio'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../../../shared/app/functions/store/use-texts'

const PrivacySettings = () => {
  useStyles(styles)

  const { headingOne, statisticsConsent, marketingConsent } = useTexts()
  const headingOneProps = {
    tier: 1,
    text: headingOne,
  }

  return (
    <div id='privacy-settings'>
      <div className='container'>
        <Heading {...headingOneProps} />
        <div className='consent-container'>
          <div className='consent-text'>{statisticsConsent}</div>
          <StatisticsConsentRadio />
        </div>
        <div className='consent-container'>
          <div className='consent-text'>{marketingConsent}</div>
          <MarketingConsentRadio />
        </div>
      </div>
    </div>
  )
}

export default PrivacySettings
