export interface BlockProps {
  title: string,
  subtitle?: string,
  text?: string,
  icon?: string
}

export interface ImageProps {
  title?: string,
  file: {
    url: string,
    filename: string,
    contentType: Object
  }
}

export interface LinkProps {
  title: string,
  url: string,
  icon?: string
}

export interface IconProps {
  title: string,
  text: string,
  icon: string
}