import config from '../../../constants/config'

export function businessNameVerifier(value) {
  return value.length > 0
}

export function taxIdentificationVerifier(value) {
  return value.length === 10
}

export function phoneVerifier(value) {
  return value.length === 9
}

export function emailVerifier(value) {
  const { emailRegex } = config
  return emailRegex.test(value)
}

export function passwordVerifier(value) {
  return value.length >= 6
}