import { useParams } from 'react-router-dom'
import './styles.css';
import ReactModal from 'react-modal';
import img from '../resources/images/olx-104.png';
import { React } from 'react';
import TelaTrocaForm from '../telaTrocaForm';

function TelaProduto({ vetor }) {
    const { id } = useParams();
    let produto = [];



    return (
        <>
            <hr></hr>

            <header className="header">

                <div>
                    <img src={img}></img>
                    <input type='text' className='buscar' placeholder='Buscar por produtos'></input>
                </div>

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

            <div id='img-mais'>

                {
                    vetor.map((obj) => {
                        if (id == obj.id) {
                            return <div className='empurra'>

                                <section>
                                    <div className="legenda">
                                        <p>Distrito Federal - Distrito Federal - Brasilia</p>
                                        <h2>{obj.nome}</h2>

                                    </div>
                                    <div className="descricao">
                                        <img src={obj.imagem_url} alt="img anuncio" className="imgCard"></img>
                                        <h2>R$: {obj.preco}</h2>
                                        <p> {obj.descricao} </p>
                                    </div>
                                    <div className="nav_bar_descricao">
                                        <nav>
                                            <ul>
                                                <li><a href="#" className='aCard'>Favoritar</a></li>
                                                <li><a href="#" className='aCard'>Compartilhar</a></li>
                                                <li><a href="#" className='aCard'>Denunciar</a></li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div className="container_"></div>
                                </section>

                                <section>
                                    <div className="detalhes">
                                        <h2>Detalhes</h2>
                                        <ul>
                                            <li>{obj.filtros.cor}</li>
                                            <li>{obj.filtros.anosDeUso}</li>
                                        </ul>
                                    </div>

                                    
                                        <h1>Localização</h1>
                                        <div className="flexColumn">
                                        <div className="localizacao">
                                            
                                            <div className="flexColumn">
                                                <h3>CEP</h3>
                                                <p>xxx</p>
                                            </div>

                                            <div className="flexColumn">
                                                <h3>Municipio</h3>
                                                <p>xxx</p>
                                            </div>

                                            <div className="flexColumn">
                                                <h3>Bairro</h3>
                                                <p>xxx</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </section>

                            </div>
                        }
                    })
                }


                <div className='info'>
                    <h3 className='nomeCliente'>Senhor João</h3>
                    <p className='numeroCliente'>Número: (11) 9 9999-9999</p>
                    <div className='localizacao'>
                    <button className='bi bi-cart-fill comprar'>Comprar</button>
                    <button className='bi bi-chat chat'> Chat</button>
                    </div>
                    <div className='flexColumn' style={{marginTop:10}}>
                    <TelaTrocaForm className='botaoTrocar' />
                    </div>
                </div>
                

            </div>
        </>
    )

}

export default TelaProduto;