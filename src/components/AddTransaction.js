import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Button from '@material-ui/core/Button';

import '../Styles/AddTrans.css'
const AddTransaction = () => {
    const { addTransactions } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setamount] = useState();
    
    const submitHandler =(e)=>{
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random()*100000),
            text,
            amount: +amount
        }
        addTransactions(newTransaction);
        setText('');
        setamount()
    }

    return (
        <div>
            <form className="form-container" onSubmit={submitHandler}>
                <label htmlFor="text">Note</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write Your Note"/>
                <label className="amount-label" htmlFor="text" >Amount</label>
                <input className="amount-input" type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter Amount"/>
                <button>Add Transaction</button>
                
            </form>
        </div>
    )
}

export default AddTransaction
