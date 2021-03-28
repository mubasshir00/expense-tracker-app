import React, { useContext } from 'react'
import GraphShow from './GraphShow'
import { GlobalContext } from '../Context/GlobalState'
import '../Styles/Graph.css'
const Graph = () => {
    const { transactions, percent } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction => (transaction.amount));

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;
    return (
        <div>
            <div className="skillsContainer">
                <GraphShow text='income' progress={percent(income)} width={percent(income)}/>
                <GraphShow text='expense' progress={percent(expense)} width={percent(expense)}/>
            </div>
        </div>
    )
}

export default Graph
