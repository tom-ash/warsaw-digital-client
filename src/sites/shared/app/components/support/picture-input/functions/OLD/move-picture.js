export function movePicture(direction, index) {
  const destination = direction === 'up' ? index - 1 : index + 1
  const blobs = [...this.props.blobs]
  if (destination < 0 || destination === blobs.length) return
  const blob = blobs.splice(index, 1)[0]
  blobs.splice(destination, 0, blob)
  this.props.setInputs({ blobs: blobs })
}
