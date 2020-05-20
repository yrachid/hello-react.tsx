import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props: Props) {
  const items = props.items.map(it => <li>{it}</li>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <ul>
          {items}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export interface Props {
  title: string,
  items: Array<string>
};

export const DEFAULT_PROPS: Props = {
  title: 'Hello',
  items: ['A', 'B', 'C']
};

export default App;
