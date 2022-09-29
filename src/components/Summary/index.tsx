import {Container} from './styles'
import setaEntrada from '../../assets/Entradas.png'
import setaSaida from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { useContext } from 'react'
export function Summary() {

    const {transactions} = useContext(TransactionsContext)

    return (
            <Container>

               <div>
                <header>
                    <p>Entradas</p>
                    <img src={setaEntrada} alt="Entradas" />
                </header>
                <strong>1.000,00$</strong>
               </div>

               <div>
                <header>
                    <p>Saidas</p>
                    <img src={setaSaida} alt="Entradas" />
                </header>
                <strong>-2.000,00$</strong>
               </div>

               

               <div className='highlightBackground'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>-1.000,00$</strong>
               </div>

            </Container>
        
    )
}