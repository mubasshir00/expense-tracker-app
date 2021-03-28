import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'
import '../Styles/IncomeExpense.css'
const IncomeExpense = () => {
    
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>(transaction.amount));
    
    const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0);
    const expense = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1;
    return (
        <div className="income-container">
          <div className="div1">
                <p className="title1">Income</p>
               <p>${income}</p>
          </div>
          <div className="div2">
                <p className="title2">Expense</p>
              <p>${expense}</p>
          </div>
        </div>
    )
}

export default IncomeExpense
