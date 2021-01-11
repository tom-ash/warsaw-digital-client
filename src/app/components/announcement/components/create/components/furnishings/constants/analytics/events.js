import * as actions from './actions.js'
import { buildEvents } from '../../../../../../../../functions/google-analytics/build-events.js'

const CATEGORY = 'Announcement Create'
const events = buildEvents({ actions, eventCategory: CATEGORY })

export default events
