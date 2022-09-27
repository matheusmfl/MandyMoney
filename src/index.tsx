import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer} from 'miragejs'  //importando a FakeAPI do mirage


createServer({

  routes(){
    this.namespace = 'api' // no fetch, o /api é a rota

    this.get('/transactions', () => {
      return [ // simulando o banco de dados
        {
          id:1,
          title: 'transaction 1',
          amount: 400,
          type: 'Food',
          createdAt: new Date()
        }
      ]
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

