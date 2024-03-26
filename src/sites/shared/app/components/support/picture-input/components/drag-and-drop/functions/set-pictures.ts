import { ChangeEvent } from 'react'
import { createBlobs } from './create-blobs'

interface SetPicturesInterface {
  (params: { e: ChangeEvent<HTMLInputElement>; setInputs(params: any): void }): void
}

export const setPictures: SetPicturesInterface = async params => {
  const { e, setInputs } = params

  const pictureFiles = e.target.files

  if (pictureFiles) {
    const arrayedPictureFiles = Array.from(pictureFiles)
    const blobs = await createBlobs(arrayedPictureFiles)

    const pictures = blobs.map(blob => ({
      blob,
      url: undefined,
    }))

    setInputs({ pictures })
  }
}
