import './Transactions.css'
import { useState } from 'react'
import Transaction from './Transaction'
import {transaction} from '../../data/Data'
const Transactions = () =>{
    const [transactions, setTransactions] = useState(transaction)
    const recentTransactions = transactions.map(transaction => <Transaction {...transaction}/>)
    return(
        <div className='transactions'>
            <h3>Your card</h3>
            <div className="cards-container"> 
                <div className="cards"> 
                    <div className='cards-col-1'>
                        <p> Bank Of America </p>
                        <div className='card-balance'> 
                            <p> Balance </p>
                            <h3>$7973,00</h3>   
                        </div>
                    </div>
                    <div className="cards-col-2">
                        <h3>Visa</h3>
                        <div className='card__holder-name'> 
                            <small> ? </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recent__transaction-container"> 
                <div className='recent__transaction'> 
                    <h3> Recent Transactions</h3>
                    <i className="fa-solid fa-ellipsis cursor"></i>
                </div>
            </div>
            <div className='recent__transaction-wrapper'> 
                {recentTransactions}
            </div>
        </div>
    )
}
export default Transactions;