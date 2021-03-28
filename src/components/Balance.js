import React, { useContext } from 'react'
import '../Styles/Balance.css'
import { GlobalContext} from '../Context/GlobalState'
const Balance = () => {
    const { transactions, currencyFormat } = useContext(GlobalContext)
    const amounts = transactions.map(transaction=>transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc+item),0);
    return (
        <div className="balance-container">
           <div className="balance-content">
                <p className="title">Your Balance</p>
                <p>{currencyFormat(total)}</p>
           </div>
        </div>
    )
}

export default Balance
