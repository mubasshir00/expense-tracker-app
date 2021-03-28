import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    const { deleteTransactions} = useContext(GlobalContext)
    return (
        <div>
            {
                <li className="list-item">
                   <div>
                        {transaction.text} <span>${transaction.amount}</span>
                        <button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>X</button>
                   </div>
                </li>
            }
        </div>
    )
}

export default Transaction
