
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){ // essa é a função que abre o Modal 
      setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal(){ // função que fecha o Modal
      setIsNewTransactionModalOpen(false)
  }
 
 

  return (

    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenNewTransactionModal}/> 
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
 
      <GlobalStyle/>
    </TransactionsProvider>
  );
}