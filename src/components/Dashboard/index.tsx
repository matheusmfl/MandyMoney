import  {Container}  from "../Dashboard/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContexts";

export function Dashboard(){

    const data = useContext(TransactionsContext)
    console.log(data)
    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}