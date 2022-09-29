// vide anotações do contexto no Notion
import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number,
    title: string,
    type: string,
    amount: number,
    createdAt: string,
    description: string,
}
interface TransactionInput{
    title: string,
    amount: number,
    type: string,
    category: string
}

// outras formas de fazer a interface acima /\
// type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>
// no lugar do Omit poderemos usar o Pick que faz efeito contrário



interface ContextProviderProps
{children: ReactNode;}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransactions: (transaction: TransactionInput) => Promise<void>
}


//agora o contexto tem o formato da typagem acima /\
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData); // aqui dentro do parametro passaremos o valor Default

//provider vem de dentro do CreateContext, o provider é o responsavel para que todos os elementos da página
// tenha acesso as informações no contexto
// eu vou colocar o Provider em volta do APP.tsx, pois assim todo o app vai ter acesso aos dados salvos no contexto
// o provider precisa obrigatóriamente receber um Value que é o valor do contexto


// aqui em baixo tou trazendo a informação que vai ser consumida pelo Provider

export function TransactionsProvider({children}: ContextProviderProps) {
   
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {

        api.get('transactions') //usando o axios não precisamos converter para JSON
        .then(response => setTransactions(response.data.transactions))//Tamos pegando o get e salvando no hooker setTransactions  // agora os dadoss não ficam mais em DATA, ficam em response.data
    }, []);
   

// aqui eu tou tirando o POST da API la no NewTransactionModal e colocando aqui no Context
// Essa transaction não recebe a mesma interface da transaction contexts, pois aqui não precisa de ID nem de Date
// aqui eu só terei Value, title, category e Type
// id e CreatedAt pertencem ao MirageJS


async function createTransactions(transactionInput: TransactionInput) {
   const response = await api.post('/transactions', transactionInput)
   const { transaction } = response.data

   setTransactions([...transactions, transaction])
}
    //agora o Value não pode retornar somente a transactions, ele também precisa retornar a CreateTransactions para herdar la no NewTransactionsModal
    // agora vou ter que retornar um Objeto dentro de Value, pois ele receberá Transactions e a função CreateTransactions
    return(
        <TransactionsContext.Provider value={{transactions, createTransactions }}> 
            {children}
        </TransactionsContext.Provider>
        // Um erro de tipagem acontece ao tentar colocar Transactions[] e createTransaction() dentro do objeto
        // que está no parametro de Value, o erro está no CreateContext, pois la falamos que ele só tem uma lista de transactions
        // só que agora não é mais verdade, tem um array e uma função
    );
}

// ao exportar o Transactions Context para o APP, um erro aparecerá de tipagem, pois o TransactionProvider vai ser
// o pai de todo o elemento, precisamos criar uma interface e dizer que ele terá children, só que ao tipar o tipo de
//children, não podemos informar os dados usuais, para isso iremos importar o REACTNODE do react, pois ele quer dizer
//que o children do props aceitará qualquer tipo de conteudo react ( Como um componente por exemplo )





