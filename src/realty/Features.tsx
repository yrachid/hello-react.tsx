import React from 'react';
import car from './images/car.svg';
import bed from './images/bed.svg';
import shower from './images/shower.svg';
import {Features as Props} from '../domain'

const Feature = (iconSrc: string, alternativeText: string) => (props: FeatureProps) => (
    <span className="feature">
        <img src={iconSrc} alt={alternativeText}/>
        {props.quantity}
    </span>);

const Bedrooms = Feature(bed, 'bedrooms');
const Bathrooms = Feature(shower, 'bathrooms');
const ParkingSpaces = Feature(car, 'parking spaces');

function Features(props: Props) {
    return (
      <section className = "Realty-features">
        <Bedrooms quantity={props.bedrooms} />
        <Bathrooms quantity={props.bathrooms} />
        <ParkingSpaces quantity={props.bathrooms} />
      </section>);
}

interface FeatureProps {
    quantity: number
}

export default Features;
