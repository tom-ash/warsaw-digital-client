export const createBlobs = async (pictureFiles: File[]) => {
  const blobs: Blob[] = []

  await Promise.all(
    pictureFiles.map(async pictureFile => {
      const fileSrc = window.URL.createObjectURL(pictureFile)
      const blob: Blob | void | null = await createBlob(fileSrc)

      if (blob) {
        blobs.push(blob)
      }
    })
  )

  return blobs
}

interface CreateBlobInterface {
  (picture: string): Promise<Blob | void | null>
}

const loadImage = async (fileSrc: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = fileSrc
  })
}

const createBlob: CreateBlobInterface = async fileSrc => {
  const oc = document.createElement('canvas')
  const octx = oc.getContext('2d')

  const ratio = 0.64

  const img: HTMLImageElement = await loadImage(fileSrc)

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

  if (octx) {
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

    return new Promise(function (resolve, reject) {
      oc.toBlob(blob => {
        return resolve(blob)
      })
    })
  }
}
