import React from 'react';
import {Price, Features, Address} from '.';

function EstateProperty(props: Props) {
    return (<section className="estate-property">
      <small>Apartment</small>
      <Price amount={props.price.amount} currency={props.price.currency}/>
      <Features bedrooms={props.features.bedrooms} bathrooms={props.features.bathrooms} parkingSpaces={props.features.parkingSpaces} />
      <Address neighborhood={props.address.neighborhood} city={props.address.city}/>
    </section>);
}

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

export interface Props {
  size: number
  features: Features
  address: Address
  price: Price
}

export default EstateProperty;