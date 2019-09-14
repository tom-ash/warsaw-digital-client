import { apiUrl } from '../../../../../constants/urls'

export function getAnnouncements() {
  const { connecting, changeControl, changeData } = this.props
  changeControl({ connecting: true })
  changeData({
    amount: null,
    announcements: null
  })
  if (connecting) return
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonRes => {
    const announcements = jsonRes.announcements.map(announcement => {
      announcement.pictureIndex = 0
      announcement.showLoader = true
      return announcement
    })
    announcements[0].show = true
    changeData({
      panelAmount: jsonRes.amount,
      listAmount: jsonRes.amount,
      announcements: announcements
    })
    changeControl({
      connecting: false,
      fetchList: false
    })
  })
}