import { ANNOUNCEMENT_CREATE_URLS, ANNOUNCEMENT_INDEX_MY_URLS, USER_EDIT_URLS } from '../../../../../../shared/constants/routes/urls'
import { ANNOUNCEMENT_CREATE_TITLES, ANNOUNCEMENT_INDEX_MY_TITLES, USER_EDIT_TITLES } from '../../../../../../shared/constants/routes/titles'
import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../shared/constants/routes/labels'
import { deauthorizeUser } from '../../authorize/functions/adapters'
import { SIGN_OUT_LABEL } from '../constants/labels'

export function addAnnouncementManager({ hrefLang }) {
  const { changeUrl } = this.context
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_URLS)}`

  return {
    href,
    hrefLang,
    title: this.langHandler(ANNOUNCEMENT_CREATE_TITLES),
    label: this.langHandler(ANNOUNCEMENT_CREATE_LABELS),
    onClick: () => changeUrl({ href })
  }
}

export function myAnnouncementsManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_INDEX_MY_URLS)}`
  const title = this.langHandler(ANNOUNCEMENT_INDEX_MY_TITLES)
  const { changeUrl } = this.context

  return {
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeUrl({ href })
  }
}

export function accountManager({ hrefLang }) {
  const href = `${CLIENT_URL}/${this.langHandler(USER_EDIT_URLS)}`
  const title = this.langHandler(USER_EDIT_TITLES)
  const { changeUrl } = this.context

  return {
    href,
    hrefLang,
    title,
    label: title,
    onClick: () => changeUrl({ href })
  }
}

export function deAuthorizeManager() {
  return {
    label: this.langHandler(SIGN_OUT_LABEL),
    onClick: () => deauthorizeUser.call(this)
  }
}