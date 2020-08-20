interface Price {
  amount: number
  currency: string
}

interface Address {
  city: string
  neighborhood: string
  state: string
  street: string
}

interface Features {
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
}

interface PropertyAttributes {
  size: number
  features: Features
  address: Address
  price: Price
}

export type {Price, Address, Features, PropertyAttributes};