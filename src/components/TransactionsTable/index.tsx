import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transactions[]>([])
    
    useEffect(() => {

        api.get('transactions') //usando o axios não precisamos converter para JSON
        .then(response => setTransactions(response.data.transactions))//Tamos pegando o get e salvando no hooker setTransactions  // agora os dadoss não ficam mais em DATA, ficam em response.data
    }, []);
   

    interface Transactions {
        id: number,
        title: string,
        type: string,
        amount: number,
        createdAt: string,
        description: string,
    }
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
                    {transactions.map(transactions=> {
                        return (
                            <tr key={transactions.id}>
                        <td>{transactions.title}</td>
                        <td className={transactions.type}>{transactions.amount}</td>
                        <td>{transactions.description}</td>
                        <td>{transactions.createdAt}</td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}