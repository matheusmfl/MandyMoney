import { Container } from "./styles";

export function TransactionsTable(){
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