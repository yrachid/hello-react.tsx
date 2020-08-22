import React from 'react';
import car from './images/car.svg';
import bed from './images/bed.svg';
import shower from './images/shower.svg';
import {Features as Props} from '../domain'

const Feature = (iconSrc: string) => (props: FeatureProps) => (
    <span className="feature">
        <img src={iconSrc} />
        {props.quantity}
    </span>);

const Bedrooms = Feature(bed);
const Bathrooms = Feature(shower);
const ParkingSpaces = Feature(car);

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
