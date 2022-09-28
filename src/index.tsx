import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs'  //importando a FakeAPI do mirage



createServer({

// o mirage possui um banco de dados internos chamado MODELS , aqui eu criarei a primeira tabela do banco de dados
  models : {
    transaction: Model,
  },

  // para o banco de dados não ficar vazio quando iniciar, eu vou chamar uma propriedade chamada seeds() que recebe como paramêtro o server
  // e dentro vamos executar server.db.loadData() dentro do parametros eu vou passar o nome da tabela ('transactions'), que é sempre o nome do Model mas no plural
  // dentro da funçao loadData eu passo a transactions dentro de um array de como eu gostaria que ela começasse

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Developer',
          amount: 6000,
          createdAt: new Date('2022-10-09 09:00:00')
        },
        // aqui setei os valores padrões para conter no banco de dados
        {
          id: 2,
          title: 'pagamento pc',
          type: 'withdraw',
          category: 'peças e acessorios',
          amount: 434,
          createdAt: new Date('2022-10-19 09:00:00')
        }
      ] 
    }
)},

  routes(){
    this.namespace = 'api' // no fetch, o /api é a rota


    this.get('/transactions', () => {
      return this.schema.all('transaction')  // aqui eu tou retornando todas as informações da rota transactions presente no banco de dados(schema)
    })

    this.post('/transactions' , (schema, request)=> {
      const data = JSON.parse(request.requestBody) /*Schema é o banco de dados*/ 
      return schema.create('transaction', data) // aqui eu tou passando os Dados para o schema(banco de dados)
    })


  } 
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

