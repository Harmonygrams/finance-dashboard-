import { useState } from 'react'
import './Main.css'
import Chart from '../chart/Chart'
import {data} from '../../data/Data'
import Overview from '../overview/Overview'
import QuickAccess from '../quickaccess/QuickAccess'
const Main = () =>{
    const [expenseChart, setExpenseChart] = useState({
        labels : data.map(userData => userData.day), 
        datasets : [{
            label : 'expense',
            data : data.map(userData => userData.expense), 
            backgroundColor : '#ff9a3e',
            borderSkipped : false,
            borderRadius : {
                bottomRight : 5, 
                bottomLeft : 5,
                topLeft : 5,
                topRight : 5,
            },
        }], 
    })
    const [incomeChart, setIncomeChart] = useState({
        labels : data.map(userData => userData.day), 
        datasets : [{
            label : 'income', 
            data : data.map(userData => userData.income), 
            backgroundColor : '#5D54BC',
            borderSkipped : 5,
            borderRadius : {
                bottomRight : 5, 
                bottomLeft : 5,
                topLeft : 5,
                topRight : 5,
            },
        }]
    })
    const expenses = data.map(userData => userData.expense)
    const income = data.map(userData => userData.income)
    return(
        <main className='main'> 
            <div className='app__overview'> 
                <h2> Overview </h2>
                <i className="fa-solid fa-magnifying-glass cursor"></i>
            </div>
            <div className='news'> 
                <div> 
                    <h3> Get Exclusive discounts for any payment method </h3>
                    <p> by uprading your plan to premium</p>
                </div>
                <button className='cursor'> Upgrade Now </button>
            </div>
            <QuickAccess />
            <div className='income__expense-container'> 
                <div className='expense-container'>
                    <div> 
                        <h3> Expense </h3>
                        <i className="fa-solid fa-ellipsis cursor"></i>
                    </div>
                    <p>${expenses.reduce((prevExpense, currentExpense) => prevExpense + currentExpense)} <span> Money out for this week </span></p>
                    <Chart data = {expenseChart}/> 
                </div>
                <div className='income-container'> 
                    <div> 
                        <h3>Income</h3>
                        <i className="fa-solid fa-ellipsis cursor"></i>
                    </div>
                    <p> ${income.reduce((prevIncome, nextIncome) => prevIncome + nextIncome)} <span> Income on this week </span></p>
                    <Chart data = {incomeChart} />
                </div>
            </div>
            <div className='overview'>
                <div className='overview-container'> 
                    <div className='overview-items'> 
                        <h3> Spending Overview </h3>
                        <i className="fa-solid fa-ellipsis cursor"></i>
                    </div>
                    <div className='overview-wrapper'>  
                        <Overview totalInPercentage = {41} amountInPercentage={-121.01} reference = {'hobies'} barColor='#fa6675'/>
                        <Overview totalInPercentage = {12} amountInPercentage={-768.21} reference = {'ATM'} barColor='#fbad37'/>
                    </div>
                </div>
                <div className='overview-container'> 
                    <div className='overview-items'> 
                        <h3> Income Overview </h3>
                        <i className="fa-solid fa-ellipsis cursor"></i>
                    </div>
                    <div className='overview-wrapper'> 
                        <Overview totalInPercentage = {25} amountInPercentage={205.54} reference = {'Grafos Ltd'} barColor='#6ace6e'/>
                        <Overview totalInPercentage = {59} amountInPercentage={1029.76} reference = {'Friends'} barColor='#41d0f0'/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main; 