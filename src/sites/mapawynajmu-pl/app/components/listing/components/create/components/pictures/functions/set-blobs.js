import API_URL from '../../../../../../../../shared/constants/urls/api'

export function setBlobs(id, pictures) {
  if (typeof window === 'undefined') return

  pictures.map((picture, index) => {
    const key = `announcements/${id}/${picture.database}`

    fetch(`${API_URL}/remote-asset/presigned-get?key=${key}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(json => {
        fetch(json.url, {
          headers: { 'Content-Type': 'application/json' },
        })
          .then(response => {
            if (response.ok) return response.blob()
          })
          .then(blobResponse => {
            const { setInputs } = this.props
            const blobs = [...this.props.blobs]
            blobs[index] = {
              blob: window.URL.createObjectURL(blobResponse),
              database: picture.database,
              description: '',
            }

            setInputs({ blobs })
          })
      })
  })
}
