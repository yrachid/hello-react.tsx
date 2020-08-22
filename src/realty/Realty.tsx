import React from 'react';
import {Price, Features, Address} from '.';
import {PropertyAttributes as Props} from '../domain'

function Realty(props: Props) {
    return (<section className="Realty">
      <small>{props.type}</small>
      <Price amount={props.price.amount} currency={props.price.currency}/>
      <Features bedrooms={props.features.bedrooms} bathrooms={props.features.bathrooms} parkingSpaces={props.features.parkingSpaces} />
      <Address neighborhood={props.address.neighborhood} city={props.address.city} state={props.address.state} street={props.address.street}/>
    </section>);
}

export default Realty;