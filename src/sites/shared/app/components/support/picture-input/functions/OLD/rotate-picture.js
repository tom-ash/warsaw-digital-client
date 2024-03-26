let oc
let octx

if (typeof document !== 'undefined') oc = document.createElement('canvas')
if (typeof document !== 'undefined') octx = oc.getContext('2d')

export function rotatePicture(index) {
  const { blobs } = this.props

  let newRotate = blobs[index].rotate + 90
  if (newRotate === 360) newRotate = 0

  createBlob(newRotate, window.URL.createObjectURL(blobs[index].file), blob => {
    if (typeof window === 'undefined') return

    const newBlobs = [...blobs]
    newBlobs[index] = {
      blob: window.URL.createObjectURL(blob),
      database: '',
      description: '',
      file: blobs[index].file,
      rotate: newRotate,
    }

    this.props.setInputs({
      blobs: newBlobs,
    })
  })
}

function createBlob(rotate, picture, callback) {
  if (rotate === 90) rotateByNienty(picture, callback)
  else if (rotate === 180) rotateByHundredEighty(picture, callback)
  else if (rotate === 270) rotateByTwoHundredSeventy(picture, callback)
  else adjustBlob(picture, newBlob => callback(newBlob))
}

function rotateByNienty(picture, callback) {
  const img = document.createElement('img')
  img.src = picture

  img.onload = () => {
    oc.width = img.height
    oc.height = img.width

    octx.translate(img.height, 0)

    octx.rotate((90 * Math.PI) / 180)

    octx.drawImage(img, 0, 0)

    oc.toBlob(blob => adjustBlob(window.URL.createObjectURL(blob), newBlob => callback(newBlob)))
  }
}

function rotateByHundredEighty(picture, callback) {
  const img = document.createElement('img')
  img.src = picture

  img.onload = () => {
    oc.width = img.width
    oc.height = img.height

    octx.translate(img.width, img.height)

    octx.rotate((180 * Math.PI) / 180)

    octx.drawImage(img, 0, 0)

    oc.toBlob(blob => adjustBlob(window.URL.createObjectURL(blob), newBlob => callback(newBlob)))
  }
}

function rotateByTwoHundredSeventy(picture, callback) {
  const img = document.createElement('img')
  img.src = picture

  img.onload = () => {
    oc.width = img.height
    oc.height = img.width

    octx.translate(0, img.width)

    octx.rotate((270 * Math.PI) / 180)

    octx.drawImage(img, 0, 0)

    oc.toBlob(blob => adjustBlob(window.URL.createObjectURL(blob), newBlob => callback(newBlob)))
  }
}

function adjustBlob(picture, callback) {
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
