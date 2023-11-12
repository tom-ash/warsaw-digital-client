type ObjectNode = {
  identifier?: string
  className?: string
  style?: React.CSSProperties
  codeLang?: string
  // Section?: string
  // TODO: Add Definition, Logo, Figure.
  Root?: RenderNodeData[]
  ArticleHeader?: {
    useCoverImage?: boolean
  }
  Main?: RenderNodeData[]
  Article?: RenderNodeData[]
  Section?: RenderNodeData[]
  Division?: RenderNodeData[]
  HeadingOne?: string
  HeadingTwo?: string
  HeadingThree?: string
  HeadingFour?: string
  Editorial?: string
  TableOfContents?: string
  UnorderedList?: string[]
  Image?: { source: string; alternative: string }
  Anchor?: { h: string; r: string; t: string; c: string }
  Code?: string | { c: string; l: string }
  YouTubeEmbed?: { s: string; w: string }
  Share?: { href: string }
  cat?: undefined
}

interface Author {
  cat: 'Author'
  data: undefined
}

interface Index {
  cat: 'Index'
  data: {
    withImages?: boolean
  } | undefined
}

type RenderNodeData = string | string[] | ObjectNode | Author | Index

type RenderNodeProps = {
  node: RenderNodeData
  index?: number
  tutorials?: Array<any>
  articles?: Array<any>
  codeLang?: string
}
