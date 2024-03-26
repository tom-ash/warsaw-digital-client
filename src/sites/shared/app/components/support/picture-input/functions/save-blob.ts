interface SaveBlob {
  (params: {
    apiUrl: string
    blob: Blob
    path: string
    key: string
    randomizeKey: boolean
    fileType: string
    mimeType: string
    // quality: 0.6,
    // convertSize: 100000,
  }): Promise<string>
}

export const saveBlob: SaveBlob = async params => {
  const { apiUrl, blob, path, key, randomizeKey, fileType, mimeType } = params

  let presignedPostResponse: Response

  presignedPostResponse = await fetch(`${apiUrl}/remote-asset/presigned-post`, {
    method: 'post',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      path,
      key,
      randomizeKey,
      fileType,
      mimeType,
    }),
  })

  const presignedPost = await presignedPostResponse.json()

  const ImageCompressor = require('image-compressor.js').default
  const imageCompressor = new ImageCompressor()

  const file = await imageCompressor.compress(blob, {
    quality: 0.6,
    convertSize: 100000,
    mimeType,
  })

  let formData = new FormData()
  Object.keys(presignedPost.fields).forEach(key => {
    formData.append(key, presignedPost.fields[key])
  })
  formData.append('file', file)
  formData.append('Content-Type', file.type)

  await fetch(presignedPost.url, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      acl: 'public-read',
    },
  })

  return presignedPost.trailingKey;
}
