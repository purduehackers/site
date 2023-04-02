interface SanityImage {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  assetId: string
  extension: string
  metadata: any
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

interface Stat {
  data: string
  label: string
}

export interface SanityEvent {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  calLink: string
  customSlug: string
  desc: string
  emailSent: boolean
  end: string
  gMap: string
  hasPastEventDesc: boolean
  loc: string
  name: string
  ogDescription: string
  pastEventDesc: string
  recapImages: SanityImage[]
  rsvpCount: number
  secondEmailSent: boolean
  start: string
  stat1: Stat
  stat2: Stat
  stat3: Stat
  unlisted: boolean
}

export interface IEvent {
  name: string
  date: Date
  description: string
  rsvp: string
  img: string
  location: string
  color?: string
}
