import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import TelaFiltros from '../telaFiltros/index';
import TelaTrocaForm from '../telaTrocaForm/index';
import img from '../resources/images/olx-104.png';

function TelaInicial({ vetor }) {

    
    
    return (
        <div>
            <hr></hr>

            <header className="header">

                <div>
                    <img src={img}></img>
                    <input type='text' className='buscar' placeholder='Buscar por produtos'></input>
                </div>

                <TelaFiltros/>

                <nav>
                    <a className="bi bi-suitcase-lg-fill a" href="#"> Plano profissional</a>
                    <a className="bi bi-tags-fill a" href='#'> Meus anuncios</a>
                    <a className="bi bi-chat-fill a" href='#'> Chat</a>
                    <a className="bi bi-bell-fill a" href='#'> Notificações</a>
                </nav>

                <div className='botoes'>
                    <input type='button' className='botaoEntrar' value='Entrar'></input>
                    <input type='button' className='botaoAnunciar' value='Anunciar'></input>
                </div>

            </header>

            <hr></hr>

            <section className='section' id='mais-procurados'>

                <h2>Mais procurados</h2>
                <div id='img-mais'>

                    {
                        vetor.map((obj, indice) => (
                            <a href={'http://localhost:3000/produto/'+obj.id} key={indice}>
                                <div>
                                    <div className='imgMeio'>
                                        <img className='img' src={obj.imagem_url}></img>
                                    </div>
                                    <p className='p'>R$: {obj.preco}</p>
                                    <p className='p'>{obj.nome}</p>     
                                </div>
                                <div>
                                    <p className='tag'>{obj.filtros.anosDeUso}</p>

                                    {
                                    obj.filtros.cor &&
                                    <p className='tag'>{obj.filtros.cor}</p>
                                    }       
                                </div>
                            </a>
                        ))
                    }

                </div>

            </section>

            <section className='section' id='mais-recentes'>

                <h2>Mais recentes</h2>
                <div id='img-mais'>

                    {
                        vetor.map((obj, indice) => (
                            <a href={'http://localhost:3000/produto/'+obj.id} key={indice}>
                                <div>
                                    <div className='imgMeio'>
                                        <img className='img' src={obj.imagem_url}></img>
                                    </div>
                                    <p className='p'>R$: {obj.preco}</p>
                                    <p className='p'>{obj.nome}</p>     
                                </div>
                                <div>
                                    <p className='tag'>{obj.filtros.anosDeUso}</p>

                                    {
                                    obj.filtros.cor &&
                                    <p className='tag'>{obj.filtros.cor}</p>
                                    }       
                                </div>
                            </a>
                        ))
                    }
                </div>

            </section>

            <section className='section' id='mais-procurados-computadores'>

                <h2>Mais procurados em Computadores</h2>
                <div id='img-mais'>

                    {
                        vetor.map((obj, indice) => (
                            <a href={'http://localhost:3000/produto/'+obj.id} key={indice} >
                                <div>
                                    <div className='imgMeio'>
                                        <img className='img' src={obj.imagem_url}></img>
                                    </div>
                                    <p className='p'>R$: {obj.preco}</p>
                                    <p className='p'>{obj.nome}</p>     
                                </div>
                                <div>
                                    <p className='tag'>{obj.filtros.anosDeUso}</p>

                                    {
                                    obj.filtros.cor &&
                                    <p className='tag'>{obj.filtros.cor}</p>
                                    }       
                                </div>
                            </a>
                        ))
                    }
                </div>

            </section>

            <TelaTrocaForm/>

        </div>
    );
}

export default TelaInicial;