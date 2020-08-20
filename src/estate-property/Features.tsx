import React from 'react';
import car from './car.svg';
import bed from './bed.svg';
import shower from './shower.svg';

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
      <section className = "estate-property-features">
        <Bedrooms quantity={props.bedrooms} />
        <Bathrooms quantity={props.bathrooms} />
        <ParkingSpaces quantity={props.bathrooms} />
      </section>);
}

interface FeatureProps {
    quantity: number
}

interface Props {
    bedrooms: number,
    bathrooms: number,
    parkingSpaces: number
}

export default Features;
