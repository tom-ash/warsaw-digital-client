export const mapStateToProps = store => {
  const { app, render, texts, control, data, inputs } = store
  const { lang, isMobile } = app
  const {
    'listings>new>form': renderForm,
    'announcement/edit': renderEdit,
    'announcement/create/verification': renderVerification,
    'announcement/create/summary': renderSuccess,
  } = render
  const { authorized, admin } = store.user
  const { step, savingListing, savingPicture } = control
  const { id, pin, announcement, user, isPromoted } = data
  const { termsOfServiceConsentLabel, shareOnFacebookButtonLabel, congratulations } = texts
  const {
    category,
    blobs,
    picUploads,
    dbPictures,
    latitude,
    longitude,
    locality,
    sublocality,
    area,
    netRentAmount,
    grossRentAmount,
    rentCurrency,
    rooms,
    floor,
    totalFloors,
    addAvailabilityDate,
    availabilityDate,
    features,
    furnishings,
    showPolishDescription,
    polishDescription,
    showEnglishDescription,
    englishDescription,
    name,
    link,
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    businessName,
  } = inputs

  return {
    lang,
    isMobile,
    renderForm,
    renderEdit,
    renderVerification,
    renderSuccess,
    authorized,
    admin,
    step,
    savingListing,
    savingPicture,
    id,
    pin,
    announcement,
    user,
    category,
    blobs,
    picUploads,
    dbPictures,
    latitude,
    longitude,
    locality,
    sublocality,
    area,
    netRentAmount,
    grossRentAmount,
    rentCurrency,
    rooms,
    floor,
    totalFloors,
    addAvailabilityDate,
    availabilityDate,
    features,
    furnishings,
    showPolishDescription,
    polishDescription,
    showEnglishDescription,
    englishDescription,
    name,
    link,
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    businessName,
    termsOfServiceConsentLabel,
    shareOnFacebookButtonLabel,
    congratulations,
    isPromoted,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setErrors: value => dispatch({ type: 'errors', value }),
    dispatch,
  }
}
