import React from 'react';

function Address(props: Props) {
    return (
        <div>
            <p>{props.neighborhood}</p>
            <small>{props.city}</small>
        </div>
    );
}

interface Props {
    neighborhood: string
    city: string
}

export default Address;