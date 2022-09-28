import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style'
import closeModal from '../../assets/xFechar.svg'
import IncomeImage from '../../assets/Entradas.png'
import OutcomeImage from '../../assets/Saídas.svg'
import {FormEvent, useState} from 'react'
import {api} from '../../services/api'


interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}



export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    const [tytle, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [description, setDescription] = useState('')
    const [type, setType] = useState('deposit')
    

    function HandleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        
       const data = {tytle, value, description, type}

       api.post('/transactions', data)
        
    }

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

            
    <Container onSubmit={HandleCreateNewTransaction}
    /*Aqui o OnSubmit impede de o formulário recarregar a página ao submitar */
    // A função que executa o PrevantDefault vem do pacote de formulários do React, chamado FormEvent
    >  

        <h2>Cadastra Transação</h2>    
        
        <input 
                placeholder='Titulo'  
                value={tytle}
                onChange={event => setTitle(
            event.target.value/*event e event.target.value são valores q existem no onChange, que é a função que caputra aóis a mudança no input*/
            )}/>  

        <input 
        placeholder='Valor' 
        value={value} 
        onChange={event => setValue(Number(event.target.value))} // o Number ta transofrmando o valor do event.target.value em numero, já que o valor default é uma string
        type='number'/>
        <TransactionTypeContainer>
            
            <RadioBox type='button'
             /*className={type === 'deposit' ? 'active' : ''}*/ 
             onClick={() => {setType('deposit')}}
             isActive = {type === 'deposit'}
             ActiveColor='green'
             //Propriedade do StyledComponents
             >
                <img src={IncomeImage} alt="Imagem de Setinha Verde apontando para cima" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox type='button'
             /*className={type === 'withdraw' ? 'active' : ''}*/ 
             onClick={() => {setType('withdraw')}}
             isActive = {type === 'withdraw'} //Propriedade do StyledComponents
             ActiveColor = 'red'
             >
                <img src={OutcomeImage} alt="Imagem de Setinha Vermelha apontando para baixo" />
                <span>Saída</span>
            </RadioBox>

        </TransactionTypeContainer>
        <input placeholder='Categoria' 
        value={description} 
        onChange={event => setDescription(event.target.value)} // o Number ta transofrmando o valor do event.target.value em numero, já que o valor default é uma string
        />
        <button type="submit">
            Cadastrar
        </button>
    </Container>

        </Modal>
    )
}