import { PinBuilder } from '../../../../../../../shared/app/components/support/map-index/types/pin-builder.interface'
import drawPin from './draw-pin'
import removePins from './remove-pins'

interface DrawPins {
  (attrs: {
    items: any // TODO
    currentListingId: number
    svgs: any // TODO
    pinBuilder: PinBuilder
  }): void
}

export const drawPins: DrawPins = attrs => {
  if (typeof window === 'undefined') return

  const { items, svgs, currentListingId, pinBuilder } = attrs

  // @ts-ignore
  let pins = []

  // @ts-ignore
  items.map(item => {
    pins.push(drawPin(pinBuilder({ ...item, svgs, currentListingId })))
  })

  // @ts-ignore
  removePins(window.pins || [])

  // @ts-ignore
  window.pins = pins
}
