import { useParams } from 'react-router-dom'
import './styles.css';
import ReactModal from 'react-modal';
import img from '../resources/images/olx-104.png';
import { useEffect, useState, React } from 'react';
import TelaTrocaForm from '../telaTrocaForm';

function TelaProduto({vetor}) {

    const { id } = useParams();
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

            

                <TelaTrocaForm className='botaoTrocar' />

            </div>
        </>
    )

}

export default TelaProduto;