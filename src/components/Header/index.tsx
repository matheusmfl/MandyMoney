
import logoImg from '../../assets/logoMandyMoney.svg'
import { Container, Content } from './styles'


interface propsHeader {
    onOpenTransactionModal: () => void
} // essa função está no APP tsx, então criei uma props, que vai receber a função lá no APP
// Eu falo que a função: () => void é do tipo vazia

export function Header({onOpenTransactionModal}: propsHeader) { // aqui eu desestruturei a Props para receber somente a function
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" /> 
            
            <button type="submit" onClick={onOpenTransactionModal}/*esse botão abre o MODAL*/> 
                Nova transação
            </button>
            </Content>
           
        </Container>
    )
}