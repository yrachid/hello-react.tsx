import React from 'react';
import {Price, Features, Address} from '.';
import {PropertyAttributes as Props} from '../domain'

function EstateProperty(props: Props) {
    return (<section className="estate-property">
      <small>Apartment</small>
      <Price amount={props.price.amount} currency={props.price.currency}/>
      <Features bedrooms={props.features.bedrooms} bathrooms={props.features.bathrooms} parkingSpaces={props.features.parkingSpaces} />
      <Address neighborhood={props.address.neighborhood} city={props.address.city}/>
    </section>);
}

export default EstateProperty;