import { saveCookie } from '../../../../cookies/functions/save'
import { VISITOR_PRIVACY_MONIT_TRACK, VISITOR_PRIVACY_SETTINGS_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'

export function agreeManager() {
  const { changeSettings, changeRender } = this.props
  
  return {
    classNames: { container: 'form-input button agree' },
    label: 'OK',
    onClick: () => {
      changeSettings({
        statisticsConsent: true,
        marketingConsent: true
      })
      saveCookie('_pdpaf', 'true', 'oneYear')
      saveCookie('_pdpsm', 'true', 'oneYear')
      changeRender({ [VISITOR_PRIVACY_MONIT_TRACK]: false })
    }
  }
}

export function settingsManager() {
  const { lang, langHandler, changeRoute, changeRouteWithHref } = this.props
  const track = VISITOR_PRIVACY_SETTINGS_TRACK

  return {
    classNames: { container: 'form-input button settings' },
    label: langHandler({ pl: 'Ustawienia', en: 'Settings' }),
    // onClick: () => changeRouteWithHref({ lang, track, changeRoute })
  }
}