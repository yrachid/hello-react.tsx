import React from 'react';
import {render} from '@testing-library/react';
import Price from './Price';

test('renders price with correct currency symbol', () => {
    const {getByText} = render(<Price amount={300} currency="BRL"/>);
    const linkElement = getByText('R$300');

    expect(linkElement).toBeInTheDocument();
});

test('defaults currency symbol to $ when currency is not supported', () => {
    const {getByText} = render(<Price amount={300} currency="USD"/>);
    const linkElement = getByText('$300');

    expect(linkElement).toBeInTheDocument();
});

test('Formats thousands big numbers', () => {
    const units = render(<Price amount={9} currency="BRL"/>);
    const tens = render(<Price amount={99} currency="BRL"/>);
    const hundreds = render(<Price amount={999} currency="BRL"/>);
    const thousands = render(<Price amount={9_999} currency="BRL"/>);
    const tensOfThousands = render(<Price amount={99_999} currency="BRL"/>);
    const hundredsOfThousands = render(<Price amount={999_999} currency="BRL"/>);
    const millions = render(<Price amount={9_999_999} currency="BRL"/>);
    const tensOfMillions = render(<Price amount={99_999_999} currency="BRL"/>);

    expect(units.getByText('R$9')).toBeInTheDocument();
    expect(tens.getByText('R$99')).toBeInTheDocument();
    expect(hundreds.getByText('R$999')).toBeInTheDocument();
    expect(thousands.getByText('R$9.999')).toBeInTheDocument();
    expect(tensOfThousands.getByText('R$99.999')).toBeInTheDocument();
    expect(hundredsOfThousands.getByText('R$999.999')).toBeInTheDocument();
    expect(millions.getByText('R$9.999.999')).toBeInTheDocument();
    expect(tensOfMillions.getByText('R$99.999.999')).toBeInTheDocument();
});
