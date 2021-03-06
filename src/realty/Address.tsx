import React from 'react';
import {Address as Props} from '../domain';

const Address = (props: Props) => (
    <div>
        <p>{props.street}, {props.neighborhood}</p>
        <small>{props.city},{props.state}</small>
    </div>);

export default Address;