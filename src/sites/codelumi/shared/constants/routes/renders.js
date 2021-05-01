import {
  ROOT_TRACK,
  PAGE_TRACK,
  PAGE_CREATE_TRACK,
  PAGE_EDIT_TRACK,
  PAGE_INDEX_TRACK,
  PAGE_INDEX_MAP_TRACK,
  PAGE_INDEX_MANAGE_TRACK,
  PAGE_SHOW_TRACK,
  PAGE_NOT_FOUND_TRACK,
  VISITOR_TRACK,
  VISITOR_PRIVACY_MONIT_TRACK,
  VISITOR_PRIVACY_SETTINGS_TRACK,
  VISITOR_COOKIES_POLICY_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK,
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_CONTACT_TRACK
} from '../tracks/tracks'

export default {
  [ROOT_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true,
    [PAGE_SHOW_TRACK]: true
  },
  [VISITOR_PRIVACY_SETTINGS_TRACK]: {
    [VISITOR_TRACK]: true,
    [VISITOR_PRIVACY_MONIT_TRACK]: false
  },
  [VISITOR_COOKIES_POLICY_TRACK]: {
    [VISITOR_TRACK]: true,
    [VISITOR_PRIVACY_MONIT_TRACK]: false
  },
  [VISITOR_PRIVACY_POLICY_TRACK]: {
    [VISITOR_TRACK]: true,
    [VISITOR_PRIVACY_MONIT_TRACK]: false
  },
  [VISITOR_TERMS_OF_SERVICE_TRACK]: {
    [VISITOR_TRACK]: true,
    [VISITOR_PRIVACY_MONIT_TRACK]: false
  },
  [VISITOR_CONTACT_TRACK]: {
    [VISITOR_TRACK]: true
  },
  [PAGE_CREATE_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [PAGE_EDIT_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [PAGE_INDEX_MAP_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true,
    [PAGE_INDEX_TRACK]: true
  },
  [PAGE_INDEX_MANAGE_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true,
    [PAGE_INDEX_TRACK]: true
  },
  [PAGE_SHOW_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  },
  [PAGE_NOT_FOUND_TRACK]: {
    [VISITOR_TRACK]: true,
    [PAGE_TRACK]: true
  }
}