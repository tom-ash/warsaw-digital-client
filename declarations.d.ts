declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module 'isomorphic-style-loader-react18/withStyles'
declare module 'isomorphic-style-loader-react18/useStyles'
declare module 'managed-inputs'

type LangHandler = (this: React.ClassicComponent<{ lang: 'pl' | 'en' }>, langObject: LangObject) => string

type LangObject = {
  pl: string
  en: string
}

type ChangeRoute = (
  // TODO: Signify bound this.
  props: {
    href: string
    withoutScroll?: boolean
    retainQueryParams?: boolean
  }
) => void

type BuildUrl = (props: { path: string; query?: string; fragment?: string }) => string

type Lang = 'pl' | 'en'

interface ChangeError {
  (props: LangObject): void
}

type ChangeControl = (args: { [key: string]: boolean }) => void
type ChangeInputs = (args: { [key: string]: string | number | boolean }) => void
