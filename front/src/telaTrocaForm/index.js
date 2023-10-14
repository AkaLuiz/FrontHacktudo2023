import React, { useState } from 'react';
import './styles.css';
import ReactModal from 'react-modal';

function TelaTrocaForm() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>

            <button onClick={toggleModal} className="btn-modal">
                Trocar
            </button>

            {modal && (
                <ReactModal
                    isOpen={toggleModal}
                    className={modal}
                >

                    <div onClick={toggleModal} className="overlay"></div>

                    <div className="modal-content">

                        <h2>Proposta de troca</h2>
                        <input style={{marginBottom:5}} type='number' className='form' placeholder='Preço do produto'></input>
                        <input type='text' className='form' placeholder='Nome do produto'></input>
                        <label>Categoria:</label>
                        <select style={{marginBottom:15}} className='form'>
                            <option>Periféricos gamer</option>
                            <option>Esportes e Lazer</option>
                            <option>Música e hobbies</option>
                            <option>Para sua casa</option>
                        </select>
                        <button className='botaoForm'>
                            ADICIONAR
                        </button>
                        <hr></hr>
                        <div className='div'>
                            <div>
                                <img src="/static/media/olx-104.c5dad2aa56ea459d7f90.png"></img>
                                <p>Bola de futebol</p>
                            </div>
                            <div>
                                <p class="tag">1 ano de uso</p>
                            </div>
                        </div>

                        

                        <button className="close-modal" onClick={toggleModal}>
                            FECHAR
                        </button>

                    </div>
                </ReactModal >
            )
            }


        </>
    )

}

export default TelaTrocaForm;