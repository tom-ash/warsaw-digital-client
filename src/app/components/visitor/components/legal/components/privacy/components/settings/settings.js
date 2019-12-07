import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import './styles/styles.scss'
import { ManagedRadio } from 'managed-inputs'
import { additionalFunctionsConsentManager, statisticsAndMarketingConsentManager } from './functions/managers'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'

class VisitorPrivacySettings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.additionalFunctionsConsentManager = additionalFunctionsConsentManager.bind(this)
    this.statisticsAndMarketingConsentManager = statisticsAndMarketingConsentManager.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
  }

  render() {
    return (
      <div
        id='visitor-privacy-settings' className='container narrow-container shadowed'
        onClick={e => e.stopPropagation()}
      >
        {this.pageHeaderProvider('fas fa-user-shield',
                                 { polish: 'Ustawienia prywatności', english: 'Privacy Settings' } )}
        <div className='text'>
          Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Warsaw Digital Sp. z o.o., z siedzibą w Warszawie, oraz jej Zaufanych Partnerów, na warunkach przewidzianych w&nbsp;<u>Polityce Prywatności</u>, w celu rozszerzenia funkcjonalności Serwisu?
        </div>
        <div className='consent'>
          <ManagedRadio {...this.additionalFunctionsConsentManager()} />
        </div>
        <div className='text'>
          Czy zgadzasz się na przetwarzanie Twoich danych osobowych przez Warsaw Digital Sp. z o.o., z siedzibą w Warszawie, oraz jej Zaufanych Partnerów, na warunkach przewidzianych w&nbsp;<u>Polityce Prywatności</u>, w celach prowadzenia statystyki oraz marketingowych?
        </div>
        <div className='consent'>
          <ManagedRadio {...this.statisticsAndMarketingConsentManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacySettings)
