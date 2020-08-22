import React from 'react';
import './App.css';
import {RealtyAttributes as EstatePropertyAttributes} from './domain';
import {Realty} from './realty'

const toRealty = (realty: EstatePropertyAttributes, idx: number) => (
  <Realty
    type={"Apartment"}
    size={realty.size}
    features={realty.features}
    address={realty.address}
    price={realty.price}
    key={idx} />);

const App = (props: MainProps) => (
  <div className="App">
    <header className="App-header">
    </header>
    <section className="App-body">
      <section className="App-realties">
        {props.realties.map(toRealty)}
      </section>
    </section>
  </div>
);

export interface MainProps {
  realties: Array<EstatePropertyAttributes>
}

export default App;
