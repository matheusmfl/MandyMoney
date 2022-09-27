import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    useEffect(() => {

        api.get('transactions') //usando o axios não precisamos converter para JSON
        .then(response => console.log(response.data))  // agora os dadoss não ficam mais em DATA, ficam em response.data
    }, []);
   
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
                    <tr>
                        <td>Computador</td>
                        <td className="withdraw">-2.500,00$</td>
                        <td>Peças e Acessórios</td>
                        <td>13/10/1995</td>
                    </tr>

                    <tr>
                        <td>Venda de site</td>
                        <td className="deposit">1.000,00$</td>
                        <td>Serviços</td>
                        <td>22/09/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}