export const coreNoIndexRoutes = {
  showUserCreate: {
    sender: 'generic',
    pl: {
      regEx: /^\/?zarejestruj\/?$/,
      url: '/zarejestruj',
      title: 'Zarejestruj',
      description: 'Zarejestruj konto na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.'
    },
    en: {
      regEx: /^\/?sign-up\/?$/,
      url: '/sign-up',
      title: 'Sign Up',
      description: 'Sign Up to an Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showUserAuthorize: {
    sender: 'generic',
    pl: {
      regEx: /^\/?zaloguj\/?$/,
      url: '/zaloguj',
      title: 'Zaloguj',
      description: 'Zaloguj do konta na warsawlease.pl. Na warsawlease.pl w łatwy sposób dodasz bezpłatne ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura.'
    },
    en: {
      regEx: /^\/?sign-in\/?$/,
      url: '/sign-in',
      title: 'Sign In',
      description: 'Sign In to the Account on warsawlease.pl. On warsawlease.pl you can easily add a free announcement of lease of an apartment, usable premises and/or and office.'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorAbout: {
    sender: 'generic',
    pl: {
      regEx: /^\/?o-serwisie\/?$/,
      url: '/o-serwisie',
      title: 'O Serwisie',
      description: 'O Serwisie warsawlease.pl'
    },
    en: {
      regEx: /^\/?about\/?$/,
      url: '/about',
      title: 'About',
      description: 'About warsawlease.pl'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorContact: {
    sender: 'generic',
    pl: {
      regEx: /^\/?kontakt\/?$/,
      url: '/kontakt',
      title: 'Kontakt',
      description: 'Kontakt'
    },
    en: {
      regEx: /^\/?contact\/?$/,
      url: '/contact',
      title: 'Contact',
      description: 'Contact'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorTermsOfService: {
    sender: 'generic',
    pl: {
      regEx: /^\/?regulamin\/?$/,
      url: '/regulamin',
      title: 'Regulamin',
      description: 'Regulamin'
    },
    en: {
      regEx: /^\/?terms-of-service\/?$/,
      url: '/terms-of-service',
      title: 'Terms of Service',
      description: 'Terms of Service'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorCookiesPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^\/?polityka-cookies\/?$/,
      url: '/polityka-cookies',
      title: 'Polityka Cookies',
      description: 'Polityka Cookies'
    },
    en: {
      regEx: /^\/?cookies-policy\/?$/,
      url: '/cookies-policy',
      title: 'Cookies Policy',
      description: 'Cookies Policy'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorPrivacyPolicy: {
    sender: 'generic',
    pl: {
      regEx: /^\/?polityka-prywatnosci\/?$/,
      url: '/polityka-prywatnosci',
      title: 'Polityka Prywatności',
      description: 'Polityka Prywatności'
    },
    en: {
      regEx: /^\/?privacy-policy\/?$/,
      url: '/privacy-policy',
      title: 'Privacy Policy',
      description: 'Privacy Policy'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showVisitorPrivacySettings: {
    sender: 'generic',
    pl: {
      regEx: /^\/?ustawienia-prywatnosci\/?$/,
      url: '/ustawienia-prywatnosci',
      title: 'Ustawienia Prywatności',
      description: 'Ustawienia Prywatności'
    },
    en: {
      regEx: /^\/?privacy-settings\/?$/,
      url: '/privacy-settings',
      title: 'Privacy Settings',
      description: 'Privacy Settings'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showAnnouncementIndexAdded: {
    sender: 'generic',
    pl: {
      regEx: /^\/?dodane-ogloszenia\/?$/,
      url: '/dodane-ogloszenia',
      title: 'Dodane ogłoszenia',
      description: 'Dodane ogłoszenia'
    },
    en: {
      regEx: /^\/?added-announcements\/?$/,
      url: '/added-announcements',
      title: 'Added Announcements',
      description: 'Added Announcements'
    },
    needsAnnouncementIndexMap: false,
    overshadow: false,
    noIndex: true
  },
  showAnnouncementEdit: {
    sender: 'generic',
    pl: {
      regEx: /^\/?edytuj-ogloszenie\/\d+$/,
      url: '/edytuj-ogloszenie',
      title: 'Edytuj ogłoszenie',
      description: 'Edytuj ogłoszenie'
    },
    en: {
      regEx: /^\/?edit-announcement\/\d+$/,
      url: '/edit-announcement',
      title: 'Edit Announcement',
      description: 'Edit Announcement'
    },
    needsAnnouncementIndexMap: false,
    overshadow: false,
    noIndex: true
  },
  showUserShow: {
    sender: 'generic',
    pl: {
      regEx: /^\/?konto\/?$/,
      url: '/konto',
      title: 'Konto',
      description: 'Konto'
    },
    en: {
      regEx: /^\/?account\/?$/,
      url: '/account',
      title: 'Account',
      description: 'Account'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showUserEditPasswordReset: {
    sender: 'generic',
    pl: {
      regEx: /^\/?zresetuj-haslo\/?$/,
      url: '/zresetuj-haslo',
      title: 'Zresetuj hasło',
      description: 'Zresetuj hasło'
    },
    en: {
      regEx: /^\/?reset-password\/?$/,
      url: '/reset-password',
      title: 'Reset Password',
      description: 'Reset Password'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showUserEditPhoneVerify: {
    sender: 'generic',
    pl: {
      regEx: /^\/?zweryfikuj-numer-telefonu\/?$/,
      url: '/zweryfikuj-numer-telefonu',
      title: 'Zweryfikuj numer telefonu',
      description: 'Zweryfikuj numer telefonu'
    },
    en: {
      regEx: /^\/?verify-phone-number\/?$/,
      url: '/verify-phone-number',
      title: 'Verify Phone Number',
      description: 'Verify Phone Number'
    },
    needsAnnouncementIndexMap: true,
    overshadow: true,
    noIndex: true
  },
  showUserEditAccount: {
    sender: 'generic',
    pl: {
      regEx: /^\/?ustawienia-konta\/?$/,
      url: '/ustawienia-konta',
      title: 'Ustawienia konta',
      description: 'Ustawienia konta'
    },
    en: {
      regEx: /^\/?account-settings\/?$/,
      url: '/account-settings',
      title: 'Account Settings',
      description: 'Account Settings'
    },
    needsAnnouncementIndexMap: false,
    overshadow: false,
    noIndex: true
  }
}