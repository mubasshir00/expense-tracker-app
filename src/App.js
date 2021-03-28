import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
     <div className="App-container">
        <GlobalProvider>
          <Header />
          <Greeting />
          <Balance />
          <div className="TransGraph">
            <IncomeExpense />
            <Graph/>
          </div>
          <TransactionList />
          <AddTransaction />
        </GlobalProvider>
     </div>
    </div>
  );
}

export default App;
