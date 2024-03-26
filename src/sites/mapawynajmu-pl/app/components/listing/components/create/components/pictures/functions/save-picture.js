import { compressAndSaveBlobPicture } from '../../../../../../../functions/picture-handlers'

function savePicture() {
  const { renderEdit, announcement, setData, setInputs, setControl } = this.props

  setControl({ savingPicture: true })

  const blobs = [...this.props.blobs]
  const blob = blobs.shift()
  const picUploads = [...this.props.picUploads]

  if (blob.database === '') {
    const params = {
      prefix: renderEdit
        ? `announcements/${window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]}/`
        : 'temporary/',
      randomize_key: true,
      file_type: 'jpeg',
    }
    compressAndSaveBlobPicture(params, blob.blob, key => {
      delete blob.blob
      blob.database = key
      picUploads.push(blob)
      const announcementWithPictures = {
        ...announcement,
        pictures: picUploads.map(picUpload => ({
          database: picUpload.database,
          description: picUpload.description,
        })),
      }

      setData({ announcement: announcementWithPictures })
      setInputs({ blobs: blobs, picUploads: picUploads })
      setControl({ savingPicture: false })
    })
  } else {
    delete blob.blob
    picUploads.push(blob)
    const announcementWithPictures = {
      ...announcement,
      pictures: picUploads.map(picUpload => ({
        database: picUpload.database,
        description: picUpload.description,
      })),
    }
    setData({ announcement: announcementWithPictures })
    setInputs({ blobs: blobs, picUploads: picUploads })

    setControl({ savingPicture: false })
  }
}

export default savePicture
