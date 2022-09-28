import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './style'
import closeModal from '../../assets/xFechar.svg'
import IncomeImage from '../../assets/Entradas.png'
import OutcomeImage from '../../assets/Saídas.svg'

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    return(
        //a estilização desse MODAL está no GlobalStyle
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay' /*Aqui eu estou dando uma classe pro modal, especifico para o overlay ou parte escura ou deslecionada pelo MODAL, vide documentacao*/
        className='react-modal-content' /*Aqui estou dando uma classe para o conteudo do Modal para poder estilizar, vide documentação React Modal */>
            
            <button 
            type='button'
            onClick={onRequestClose}
            className="button-close-modal">

            <img src={closeModal} alt="Botão de fechar formulário" />
            </button>
    <Container>

        <h2>Cadastra Transação</h2>    
        <input placeholder='Titulo' />

        <input placeholder='Valor' type='number'/>
        <TransactionTypeContainer>
            
            <button type='button'>
                <img src={IncomeImage} alt="Imagem de Setinha Verde apontando para cima" />
                <span>Entrada</span>
            </button>

            <button type='button'>
                <img src={OutcomeImage} alt="Imagem de Setinha Vermelha apontando para baixo" />
                <span>Saída</span>
            </button>

        </TransactionTypeContainer>
        <input placeholder='Categoria' />
        <button type="submit">
            Cadastrar
        </button>
    </Container>

        </Modal>
    )
}