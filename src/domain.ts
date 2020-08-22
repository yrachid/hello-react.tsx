export interface Price {
  amount: number
  currency: string
}

export interface Address {
  city: string
  neighborhood: string
  state: string
  street: string
}

export interface Features {
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
}

export interface RealtyAttributes {
  type: string,
  size: number
  features: Features
  address: Address
  price: Price
}