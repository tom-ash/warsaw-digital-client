import React from 'react'
import { AdministrativeDocument } from '../../../../../../../shared/app/components/visitor/components/administration/components/administrative-document/cookies-policy/administrative-document'
import { provisions } from './constants/provisions'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const CookiesPolicy = () => {
  useStyles(styles)

  const administrativeDocumentProps = {
    identifier: 'cookies-policy',
    provisions,
  }

  return <AdministrativeDocument {...administrativeDocumentProps} />
}

export default CookiesPolicy
