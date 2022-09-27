import logoImg from '../../assets/logoMandyMoney.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="submit">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}