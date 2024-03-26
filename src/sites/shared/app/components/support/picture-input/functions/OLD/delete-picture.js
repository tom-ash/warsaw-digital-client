import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { PICTURE_REMOVED_EVENT } = analyticEvents

export function deletePicture(index) {
  const blobs = [...this.props.blobs]
  blobs.splice(index, 1)
  this.props.setInputs({ blobs: blobs })

  sendGaEvent(PICTURE_REMOVED_EVENT)
}
