import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import './App.css';
import TelaInicial from './telaInicial';
import TelaProduto from './telaProduto/index';
import axios from 'axios';

function App() {

  //UseState
  const[produtos, setProdutos] = useState([]);

  //useEffect
  useEffect(()=>{
    axios.get('http://localhost:3333/produto')
    .then((response)=> {
      setProdutos(response.data)
    });
  }, [])

    
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial vetor={produtos} />}></Route>
        <Route path="/produto/:id" element={<TelaProduto vetor={produtos} />}></Route>
      </Routes>
    </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App;
