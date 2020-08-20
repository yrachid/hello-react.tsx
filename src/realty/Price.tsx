import React from 'react';
import {Price as Props} from '../domain';

function Price(props: Props) {
    return <h1>{props.currency} {props.amount}</h1>;
}

export default Price;