import React, { useState } from 'react';
import './styles.css';
import ReactModal from 'react-modal';


function TelaFiltros() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button onClick={toggleModal}
                className="bi bi-sliders buttonFiltros">
                Filtros
            </button>


            {modal && (

                <ReactModal
                    isOpen={toggleModal}
                    className={modal}
                >
                    <div onClick={toggleModal} className="overlay"></div>

                    <div className="modal-content">

                        <h2>Filtros</h2>
                        <label>Cor:</label>
                        <div style={{ marginBottom: 15, padding: 10 }} className='form'>
                            <div>
                            <input type='checkbox' name='Branco'></input>
                            <label>Branco</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Amarelo'></input>
                            <label>Amarelo</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Preto'></input>
                            <label>Preto</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Vermelho'></input>
                            <label>Vermelho</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Cinza'></input>
                            <label>Cinza</label>
                            </div>

                        </div>

                        <label>Categoria:</label>
                        <div style={{ marginBottom: 15, padding: 10 }} className='form'>
                            <div>
                            <input type='checkbox' name='Periféricos gamer'></input>
                            <label>Periféricos gamer</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Esportes e Lazer'></input>
                            <label>Esportes e Lazer</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Música e hobbies'></input>
                            <label>Música e hobbies</label>
                            </div>

                            <div>
                            <input type='checkbox' name='Para sua casa'></input>
                            <label>Para sua casa</label>
                            </div>

                        </div>
                        <label>Anos de uso:</label>
                        <div style={{ marginBottom: 15, padding: 10 }} className='form'>
                            <div>
                            <input type='checkbox' name='Menos de 1 ano de uso'></input>
                            <label>Menos de 1 ano de uso</label>
                            </div>

                            <div>
                            <input type='checkbox' name='1 ano de uso'></input>
                            <label>1 ano de uso</label>
                            </div>

                            <div>
                            <input type='checkbox' name='2 anos de uso'></input>
                            <label>2 anos de uso</label>
                            </div>

                            <div>
                            <input type='checkbox' name='3 anos de uso'></input>
                            <label>3 anos de uso</label>
                            </div>

                            <div>
                            <input type='checkbox' name='4 anos de uso'></input>
                            <label>4 anos de uso</label>
                            </div>
                            
                            <div>
                            <input type='checkbox' name='5 anos de uso'></input>
                            <label>5 anos de uso</label>
                            </div>
                        </div>
                        <button className='botaoForm'>
                            Filtrar
                        </button>
                        
                        <button className="close-modal" onClick={toggleModal}>
                            FECHAR
                        </button>
                    </div>
                </ReactModal>

            )}


        </>
    )

}

export default TelaFiltros;