import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { PICTURE_ADDED_EVENT } = analyticEvents

let oc
let octx

if (typeof document !== 'undefined') oc = document.createElement('canvas')
if (typeof document !== 'undefined') octx = oc.getContext('2d')

export function addPicture(files) {
  if (typeof window === 'undefined') return

  this.props.setControl({ addingPicture: true })
  const file = files.pop()
  createBlob(window.URL.createObjectURL(file), blob => {
    if (typeof window === 'undefined') return

    this.props.setInputs({
      picFiles: files,
      blobs: [...this.props.blobs].concat([
        {
          blob: window.URL.createObjectURL(blob),
          database: '',
          description: '',
          file,
          rotate: 0,
        },
      ]),
    })
    this.props.setControl({ addingPicture: false })
    this.props.setErrors({ pictures: { pl: '', en: '' } })
  })

  sendGaEvent(PICTURE_ADDED_EVENT)
}

function createBlob(picture, callback) {
  const img = document.createElement('img')
  img.src = picture
  const ratio = 0.64

  img.onload = () => {
    let sourceWidth = img.width
    let sourceHeight = img.height
    let targetWidth = 0
    let widthIndent = 0
    let targetHeight = 0
    let heightIndent = 0

    if (sourceHeight / sourceWidth > ratio) {
      targetHeight = Math.round(sourceWidth * ratio)
      heightIndent = Math.round((sourceHeight - targetHeight) / 2)
      targetWidth = img.width
      widthIndent = 0
    } else {
      targetWidth = Math.round(sourceHeight / ratio)
      widthIndent = Math.round((sourceWidth - targetWidth) / 2)
      targetHeight = img.height
      heightIndent = 0
    }
    oc.width = 1200
    oc.height = 768

    octx.drawImage(
      img,
      widthIndent,
      heightIndent,
      sourceWidth - 2 * widthIndent,
      sourceHeight - 2 * heightIndent,
      0,
      0,
      1200,
      768
    )

    oc.toBlob(blob => callback(blob))
  }
}
