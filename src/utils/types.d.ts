export interface GlobalResponse {
  id: number;
  locale: string;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: Menu[];
  social: Social;
  footerMenu: FooterMenu[];
}

export interface Metadata {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: any;
}

export interface Menu {
  id: number;
  title?: string;
  link?: string;
  openNewWindow: boolean;
  dropdown: Dropdown[];
}

export interface Dropdown {
  id: number;
  title?: string;
  link: string;
  openNewWindow: boolean;
}

export interface Social {
  facebook: string;
  instagram: string;
  twitter: string;
  youTube: string;
  tikTok: string;
  linkedIn: string;
}

export interface FooterMenu {
  id: number;
  title?: string;
  link: any;
  openNewWindow: boolean;
  dropdown: Dropdown[];
}

export interface HomePageResponse {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: Alternate[];
  metadata: Metadata;
  contentSections: ContentSection[];
}

export interface Alternate {
  locale: string;
  path: string;
}

export interface Metadata {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: any;
}

export interface ContentSection {
  id: number;
  __component:
    | "sections.hero-video"
    | "sections.brands"
    | "sections.card-content-grid"
    | "sections.modules"
    | "sections.centered-cta";
  theme: "dark" | "light";
  full?: boolean;
  preTitle?: string;
  title?: string;
  description?: string;
  buttons?: Button[];
  demo?: Demo;
  background?: Background;
  brands?: Brand[];
  cards?: Card[];
}

export interface Button {
  id: number;
  appearance: string;
  size: "sm" | "md" | "lg";
  color: string;
  url: string;
  text: string;
  subText: any;
  fluid: boolean;
  newTab: boolean;
  startIcon: any;
  endIcon?: string;
}

export interface Demo {
  id: number;
  title?: string;
  url: string;
  format: string;
}

export interface Background {
  id: number;
  alternativeText: any;
  width: number;
  height: number;
  url: string;
}

export interface Brand {
  id: number;
  alternativeText: any;
  title?: string;
  url: string;
}

export interface Card {
  id: number;
  title?: string;
  description?: string;
  button?: Button;
  icon?: string;
}

interface PageResponses {
  "/": HomePageResponse[];
}
