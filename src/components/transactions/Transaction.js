const Transaction = ({title, date, amount, category, icon}) =>{
    const amountColor = {
        color : amount > 0 ? "#40c545" : "#e77172", 
        backgroundColor : amount > 0 ?  "#e1f5e2" : "#fee8da"
    }
    const totalAmount = amount > 0 ? `+ $${amount}` : `- $${Math.abs(amount)}`
    return(
        <div className='transaction cursor'>
            <div className='transaction-icon' style={amountColor}> 
                {icon}
            </div>
            <div className='transaction-title-date'> 
                <p className="transaction-title"> {title}</p>
                <p className="transaction-date"> {date}</p>
            </div>
            <div className='transaction-price-category'> 
                <p className="transaction-amount" style={{color : amountColor.color}}> {totalAmount}</p>
                <p className="transaction-category"> {category} </p>
            </div>
        </div>
    )
}
export default Transaction;