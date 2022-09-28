// vide anotações do contexto no Notion
import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";


interface Transactions {
    id: number,
    title: string,
    type: string,
    amount: number,
    createdAt: string,
    description: string,
}

interface ContextProviderProps
{children: ReactNode;}

export const TransactionsContext = createContext<Transactions[]>([]); // aqui dentro do parametro passaremos o valor Default

//provider vem de dentro do CreateContext, o provider é o responsavel para que todos os elementos da página
// tenha acesso as informações no contexto
// eu vou colocar o Provider em volta do APP.tsx, pois assim todo o app vai ter acesso aos dados salvos no contexto
// o provider precisa obrigatóriamente receber um Value que é o valor do contexto


// aqui em baixo tou trazendo a informação que vai ser consumida pelo Provider

export function TransactionsProvider({children}: ContextProviderProps) {
   
    const [transactions, setTransactions] = useState<Transactions[]>([])
    
    useEffect(() => {

        api.get('transactions') //usando o axios não precisamos converter para JSON
        .then(response => setTransactions(response.data.transactions))//Tamos pegando o get e salvando no hooker setTransactions  // agora os dadoss não ficam mais em DATA, ficam em response.data
    }, []);
   
    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>

    );
}

// ao exportar o Transactions Context para o APP, um erro aparecerá de tipagem, pois o TransactionProvider vai ser
// o pai de todo o elemento, precisamos criar uma interface e dizer que ele terá children, só que ao tipar o tipo de
//children, não podemos informar os dados usuais, para isso iremos importar o REACTNODE do react, pois ele quer dizer
//que o children do props aceitará qualquer tipo de conteudo react ( Como um componente por exemplo )