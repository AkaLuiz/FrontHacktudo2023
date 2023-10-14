import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import TelaInicial from './telaInicial';
import TelaTrocaForm from './telaTrocaForm/index';
import produto from './resources/json/produtos.json';

function App() {

  //UseState
  const[produtos, setProdutos] = useState([]);

  //useEffect
  useEffect(()=>{
    fetch('http://127.0.0.1:5500/front/src/resources/json/produtos.json')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial vetor={produtos} />}></Route>
        <Route path="/telaTroca" element={<TelaTrocaForm/>}></Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App;
