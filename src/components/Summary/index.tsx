import {Container} from './styles'
import setaEntrada from '../../assets/Entradas.png'
import setaSaida from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { useContext } from 'react'
export function Summary() {

    const {transactions} = useContext(TransactionsContext)

    // usei o Reduce para calcular o total de entradas e saidas e realizar a lógica do Summary
    const summary = transactions.reduce((acc, transaction) => {
        

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount; }
            else{
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount
            }

            return acc;
        }
        ,{
            deposits: 0,
            withdraws: 0,
            total: 0
        }
        
    )

    return (
            <Container>

               <div>
                <header>
                    <p>Entradas</p>
                    <img src={setaEntrada} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR' ,
                            {style: 'currency',
                            currency: 'BRL'}).format(summary.deposits)}</strong>
               </div>

               <div>
                <header>
                    <p>Saidas</p>
                    <img src={setaSaida} alt="Entradas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR' ,
                            {style: 'currency',
                            currency: 'BRL'}).format(summary.withdraws)}</strong>
               </div>

               

               <div className='highlightBackground'>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR' ,
                            {style: 'currency',
                            currency: 'BRL'}).format(summary.total)}</strong>
               </div>

            </Container>
        
    )
}