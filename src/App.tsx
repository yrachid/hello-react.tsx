import React from 'react';
import './App.css';
import {PropertyAttributes as EstatePropertyAttributes} from './domain';
import {EstateProperty} from './estate-property'

function App(props: MainProps) {
  const ap = props.estate[0];
  const items =Array.from({length: 20}, (x, i) =>
    <EstateProperty
      size={ap.size} 
      features={ap.features}
      address={ap.address}
      price={ap.price}
      key={i}/>);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className="App-body">
        <section className="estate-properties">
          {items}
        </section>
      </section>
    </div>
  );
}

export interface MainProps {
  estate: Array<EstatePropertyAttributes>,
}

export default App;
