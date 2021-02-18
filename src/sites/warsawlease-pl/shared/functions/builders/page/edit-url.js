import { PL, EN } from '../../../constants/langs/langs'

function buildPageEditUrl({ pageCreateData: { name, langVerUrls }, lang }) {
  if (!name || !langVerUrls) return 

  return `${{ [PL]: 'edytuj-strone', [EN]: 'edit-page' }[lang]}/${langVerUrls[lang] || `${name}/${lang}`}`
}

export default buildPageEditUrl
