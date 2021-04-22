import React from 'react'
import {Pie} from 'react-chartjs-2'



function Equipedata() {


    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
    return (
<>
        <div className="col-4">
        <div className="card z-depth-3">
              
        </div>
        </div>
        <div className="col-4">
            <Pie data={data} width={"50%"} height={"50%"}/>
        </div>
        <div className="col-4">
       card
        </div>
</>
        
    )
}

export default Equipedata
