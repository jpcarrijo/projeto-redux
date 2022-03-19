import React from 'react';
import { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(100)

  return (
    <>
      <div className='App'>
        <h1> Projeto Redux </h1>
        <div className='linha'>
          <Intervalo min={min} max={max}> </Intervalo>
        </div>
        <div className='linha'>
          <Media title="Média" green min={min} max={max} > Teste 2 </Media>
          <Soma title="Soma" blue min={min} max={max} > Teste 3 </Soma>
          <Sorteio title="Sorteio" purple min={min} max={max} > Teste 4 </Sorteio>
        </div>
      </div>
    </>
  )
}


export default App;
