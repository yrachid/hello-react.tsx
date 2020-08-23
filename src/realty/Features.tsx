import React from 'react';
import './Features.css';
import car from './images/car.svg';
import bed from './images/bed.svg';
import shower from './images/shower.svg';
import {Features as Props} from '../domain'

const Feature = (iconSrc: string, alternativeText: string) => (props: {quantity: number}) => (
    <span className="feature">
        <img src={iconSrc} alt={alternativeText} className="feature-icon"/>
        <span className="feature-content">{props.quantity}</span>
    </span>);

const Bedrooms = Feature(bed, 'bedrooms');
const Bathrooms = Feature(shower, 'bathrooms');
const ParkingSpaces = Feature(car, 'parking spaces');

function Features(props: Props) {
    return (
      <section className="features">
        <Bedrooms quantity={props.bedrooms} />
        <Bathrooms quantity={props.bathrooms} />
        <ParkingSpaces quantity={props.bathrooms} />
      </section>);
}

export default Features;
