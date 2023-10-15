import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import './App.css';
import TelaInicial from './telaInicial';
import TelaProduto from './telaProduto/index';
import axios from 'axios';

function App() {

  //modelo
  const produtoModelo ={
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    categoria_id: 2,
    usuario_id: 1,
    filtros: {
      cor: '',
      anosDeUso: ''
    },
    vendido: 0,
    troca: 1,
    imagem_url:''
  }

  //UseState
  const[produtos, setProdutos] = useState([]);
  const[produto, setProduto] = useState(produtoModelo)

  setProduto({...produto, nome:nome})
  //useEffect
  useEffect(()=>{
    axios.get('http://localhost:3333/produto')
    .then((response)=> {
      setProdutos(response.data)
    });
  }, [])

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial vetor={produtos} />}></Route>
        <Route path="/produto/:id" element={<TelaProduto vetor={produtos} produto={produto} />}></Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

export default App;
