// vide anotações do contexto no Notion
import { createContext } from "react";

export const TransactionsContext = createContext([]); // aqui dentro do parametro passaremos o valor Default

//provider vem de dentro do CreateContext, o provider é o responsavel para que todos os elementos da página
// tenha acesso as informações no contexto
// eu vou colocar o Provider em volta do APP.tsx, pois assim todo o app vai ter acesso aos dados salvos no contexto
// o provider precisa obrigatóriamente receber um Value que é o valor do contexto