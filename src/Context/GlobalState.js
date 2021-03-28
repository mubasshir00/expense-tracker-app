import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions:[
        {id:1,text:'car',amount:-23},
        {id:2,text:'salary',amount:344},
        { id: 3, text: 'salary', amount: 344 }
    ]
}

//creat context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransactions(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function deleteTransactions(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function percent(num){
        var temp = (num/100)*100;
        if(temp>=100){
            return 100;
        }
        else {
            return temp
        }
    }

    return(
        <GlobalContext.Provider
        value={{
            transactions:state.transactions,
                addTransactions,
                deleteTransactions,
                currencyFormat,
                percent
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}