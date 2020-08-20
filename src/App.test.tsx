import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const {getByText} = render(<App title={"Hello React + Typescript"} items={[]}/>);
    const linkElement = getByText(/Hello React \+ Typescript/i);

    expect(linkElement).toBeInTheDocument();
});
