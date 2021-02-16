import { furnishings } from '../../../../../constants/furnishings.js'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event.js'
import analyticEvents from '../constants/analytics/events.js'

const {
  FURNISHINGS_SHOWN_EVENT,
  FURNISHINGS_SELECTED_EVENT
} = analyticEvents

export function addFurnishingsManager() {
  const {
    addFurnishings,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFurnishings,
    label: this.langObjHandler({
      pl: 'Dodaj Wyposażenie',
      en: 'Add Furnishings'
    }),
    onClick: value => {
      changeInputs({ addFurnishings: value })
      sendGaEvent(FURNISHINGS_SHOWN_EVENT)
    }
  }
}

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(furnishings, 'furnishings'),
    onClick: (value, ref) => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
      sendGaEvent(FURNISHINGS_SELECTED_EVENT)
    }
  }
}