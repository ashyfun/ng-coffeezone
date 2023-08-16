export interface Cafe {
  code: string
  title: string
  topics: string
  location?: {
    address: string
    lat: number
    lon: number
  }
}
