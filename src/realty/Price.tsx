import React from 'react';
import {Price as Props} from '../domain';
import './Price.css';

const NUMBER_CHUNK_SIZE = 3;
const CURRENCY_SEPARATOR = '.';
const currencySymbols: { [key: string]: string } = {
    'BRL': 'R$'
};

const formatCurrency = (currency: string) => currencySymbols[currency] || '$';

const formatAmount = (value: number): string => {
    const splitIntoChunks = (src: string, chunks: Array<string> = []): Array<string> => src.length <= NUMBER_CHUNK_SIZE
        ? [src, ...chunks]
        : splitIntoChunks(src.slice(0, -NUMBER_CHUNK_SIZE), [src.slice(-NUMBER_CHUNK_SIZE), ...chunks]);

    return value < 1_000
        ? value.toString()
        : splitIntoChunks(value.toString()).join(CURRENCY_SEPARATOR);
};

const Price = (props: Props) => <span className="price-tag">{formatCurrency(props.currency) + formatAmount(props.amount)}</span>;

export default Price;