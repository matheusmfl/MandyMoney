
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable(){

    const {transactions} = useContext(TransactionsContext)

    return(


       
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>
                            Titulo
                        </th>
                        <th>
                            Valor
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th>
                            Data
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction=> {
                        return (
                            <tr key={transaction.id}>
                        <td>{transaction.title}</td>

                        
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR' ,
                            {style: 'currency',
                            currency: 'BRL'}).format(transaction.amount)}
                            
                            </td>
                        <td>{transaction.description}</td>
                        <td>
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.amount))}
                        </td>
                    </tr>
                        ) //usei a API Intl para poder converter o valor númerico em valor de moeda Brasileiro e para converter a data em um formato legível
                    })}
                </tbody>
            </table>
        </Container>
    )
}


