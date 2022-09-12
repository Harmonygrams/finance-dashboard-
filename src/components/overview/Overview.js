import { useState } from 'react'
import { clear } from '@testing-library/user-event/dist/clear'
import './Overview.css'
import { useEffect } from 'react'

const Overview = ({totalInPercentage, amountInPercentage, reference, barColor}) => {
    const amount = amountInPercentage < 1 ? 
    {color : '#e77172', value : `-$${Math.abs(amountInPercentage)}`, reference : `Use for ${reference}`} : 
    {color: '#40c545', value : `+$${amountInPercentage}`, reference : `from ${reference}`}
    const progressBarStyle = {
        backgroundImage : `conic-gradient(${barColor} ${totalInPercentage * 3.6}deg, #f3f7fe ${totalInPercentage * 3.6}deg, #f3f7fe 100deg)`
    }
    return(
        <div className='progressBar-container'> 
            <div className='progressbar-cirle' style={progressBarStyle}> 
            </div>
            <p className='overview-description' > {totalInPercentage}% {amount.reference}</p>
            <p className='overview-total' style={{color : amount.color}}>{amount.value}</p>
        </div>
    )
}
export default Overview; 
