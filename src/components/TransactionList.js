import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction';
import '../Styles/Transaction.css'
const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
           <ul className="trans-list">
               {
                   transactions.map(transaction=>(
                       <Transaction transaction={transaction}/>
                   ))
               }
           </ul>
        </div>
    )
}

export default TransactionList
