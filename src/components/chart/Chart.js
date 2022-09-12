import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
const Chart = ({data}) => {
    const options = {
        responsive : true, 
        maintainAspectRatio: false,
        plugins : {
            legend : false
        }, 
        scales: {
            x: {
              grid: {
                display: false,
                drawBorder : false,
              }
            },
            y: {           
              grid: {
                display: false,  
                drawBorder : false,
              }, 
              ticks : {display : false}
            }
        }, 
        label : {
            display : false
        }
    }
    return(
        <div> 
            <Bar data = {data} options = {options} />
        </div>
    )
}
export default Chart; 