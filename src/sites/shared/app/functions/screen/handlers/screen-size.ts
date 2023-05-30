import { Dispatch } from 'redux'

interface ScreenSizeHandler {
  (args: { dispatch: Dispatch }): void
}

export const screenSizeHandler: ScreenSizeHandler = args => {
  const { dispatch } = args
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const device = (() => {
    if (screenWidth > 1200) return 'largePc'
    if (screenWidth > 960) return 'smallPc'
    if (screenWidth > 768) return 'largeTablet'
    if (screenWidth > 480) return 'smallTablet'
    if (screenWidth > 360) return 'largePhone'

    return 'smallPhone'
  })()

  const minInnerHeight = screenHeight - 60 - 40

  dispatch({ type: 'app', value: { device, screenWidth, screenHeight, minInnerHeight } })
}
