import { managerAgent } from 'managed-inputs'
import { saveCookie } from '../../../../cookies/functions/save'

export function additionalFunctionsManager(aspect, value) {
  return managerAgent(aspect, {
    name: 'additional-functions',
    classNames: { container: 'primary-input radio'},
    checked: this.props.consents.personalDataProcessing.additionalFunctions,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: () => {
      const consents = { ...this.props.consents }
      consents.personalDataProcessing.additionalFunctions = value
      this.props.changeSettings({ consents: consents })
      saveCookie('_pdpaf', value, 'oneYear')
      location.reload()
    }
  })
}

export function statisticsAndMarketingManager(aspect, value) {
  return managerAgent(aspect, {
    name: 'statistics-marketing',
    classNames: { container: 'primary-input radio'},
    checked: this.props.consents.personalDataProcessing.statisticsAndMarketing,
    radios: [
      { value: 'true', label: 'Zgadzam się' },
      { value: 'false', label: 'Nie zgadzam się' }
    ],
    onClick: () => {
      const consents = { ...this.props.consents }
      consents.personalDataProcessing.statisticsAndMarketing = value
      this.props.changeSettings({ consents: consents })
      saveCookie('_pdpsm', value, 'oneYear')
      location.reload()
    }
  })
}