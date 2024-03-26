import createAnnouncement from './create-announcement'
// import savePicture from './save-picture'
// import { setBlobs } from './set-blobs'

export function componentDidMount() {
  const { id, dbPictures, renderEdit } = this.props


  // TODO
  // if (renderEdit) {
  //   setBlobs.call(this, id, dbPictures)
  // }
}

export function componentDidUpdate(prevProps) {
  const { step: prevStep } = prevProps
  const { step } = this.props

  console.log('prevStep', prevStep)
  console.log('step', step)

  if (prevStep !== 'publishing' && step === 'publishing' ) {
    console.log("QWEQWEQWEQEQW")
    createAnnouncement.call(this)
  }
}
