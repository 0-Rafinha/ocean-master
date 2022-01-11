import { useState } from 'react';
import './App.css';
import Card from './components/templates/Card';
import dado from './data'


export default function App() {

  const [data] = useState(dado)

  return (
    <div className="App">
      <h1 className="title">FreeOcean</h1>
      <h2 className="subtitle">The best Non Fungible Token marketplace out there</h2>
      <div className="cards">{data.map((data, i) => <Card key={i} data={data}/>)}</div>
    </div>
  );
}