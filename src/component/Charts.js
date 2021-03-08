import React from 'react'
import {Line , Bar} from 'react-chartjs-2'

function Charts() {
    return (
        <>
<section className="dashboard-header ml-5">
            <div className="container-fluid">

                {/* firstrowrow */}
              <div className="row col-12 justify-content-between mb-3">

              <div className="statistics col-lg-3 col-12 grow">
                  <div className="statistic d-flex align-items-center bg-white has-shadow">
                  <div className="icon bg-violet"><i className="icon-user"></i></div>
                    <div className="title"><span>New<br />client</span>
                      <div className="progress" style={{height:4}}>
                        <div role="progressbar" style={{width:'70%' , height:4}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" className="progress-bar bg-violet"></div>
                      </div>
                      </div>

                  </div>
              </div>

              <div className="statistics col-lg-3 col-12 grow">
                  <div className="statistic d-flex align-items-center bg-white has-shadow">
                    <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                    <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                  </div>
              </div>

              <div className="statistics col-lg-3 col-12 grow">
                  <div className="statistic d-flex align-items-center bg-white has-shadow">
                    <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                    <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                  </div>
              </div>

              <div className="statistics col-lg-3 col-12 grow">
                  <div className="statistic d-flex align-items-center bg-white has-shadow">
                    <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                    <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                  </div>
              </div>

            
              </div>
               {/* !firstrowrow */}

              {/* secondrow */}

              <div className="row col-12 justify-content-center" >


                  <div className="col-lg-3 col-12" >

                        <div className="statistics mb-3 grow" >
                            <div className="statistic d-flex align-items-center bg-white has-shadow">
                                <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                                <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                            </div>
                        </div>

                        <div className="statistics mb-3 grow">
                            <div className="statistic d-flex align-items-center bg-white has-shadow">
                                <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                                <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                            </div>
                        </div>

                        <div className="statistics mb-3 grow">
                            <div className="statistic d-flex align-items-center bg-white has-shadow">
                                <div className="icon bg-red"><i className="fa fa-tasks"></i></div>
                                <div className="text"><strong>234</strong><br/><small>Applications</small></div>
                            </div>
                        </div>
                  </div>

                  <div className="col-lg-6 col-12">
                            {/* <!-- Line Chart            --> */}
                            <div className="chart ">
                            <div className="line-chart bg-white d-flex align-items-center justify-content-center has-shadow">
                                <Line 
                                data={{
                                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
                                    datasets: [
                                        {
                                            label: "Page Visitors",
                                            fill: true,
                                            lineTension: 0,
                                            backgroundColor: "transparent",
                                            borderColor: '#f15765',
                                            pointBorderColor: '#da4c59',
                                            pointHoverBackgroundColor: '#da4c59',
                                            borderCapStyle: 'butt',
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: 'miter',
                                            borderWidth: 1,
                                            pointBackgroundColor: "#fff",
                                            pointBorderWidth: 1,
                                            pointHoverRadius: 5,
                                            pointHoverBorderColor: "#fff",
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 0,
                                            data: [50, 20, 60, 31, 52, 22, 40, 25, 30, 68, 56, 40, 60, 43, 55, 39, 47],
                                            spanGaps: false
                                        },
                                        {
                                            label: "Page Views",
                                            fill: true,
                                            lineTension: 0,
                                            backgroundColor: "transparent",
                                            borderColor: "#54e69d",
                                            pointHoverBackgroundColor: "#44c384",
                                            borderCapStyle: 'butt',
                                            borderDash: [],
                                            borderDashOffset: 0.0,
                                            borderJoinStyle: 'miter',
                                            borderWidth: 1,
                                            pointBorderColor: "#44c384",
                                            pointBackgroundColor: "#fff",
                                            pointBorderWidth: 1,
                                            pointHoverRadius: 5,
                                            pointHoverBorderColor: "#fff",
                                            pointHoverBorderWidth: 2,
                                            pointRadius: 1,
                                            pointHitRadius: 10,
                                            data: [20, 7, 35, 17, 26, 8, 18, 10, 14, 46, 30, 30, 14, 28, 17, 25, 17, 40],
                                            spanGaps: false
                                        }
                                    ]
                                                        }}
                                            options={{
                                                scales: {
                                                    xAxes: [{
                                                        display: true,
                                                        gridLines: {
                                                            display: false
                                                        }
                                                    }],
                                                    yAxes: [{
                                                        display: true,
                                                        gridLines: {
                                                            display: false
                                                        }
                                                    }]
                                                },
                                               
                                            }}
                                            
                                />
                            </div>
                            </div>
                  </div>
                
                  <div className="col-lg-3 col-12">
                  {/* <!-- Bar Chart   --> */}
                  <div className="bar-chart has-shadow align-items-center bg-white">
                    <div className="title mr-2 ml-2"><strong className="text-violet">95%</strong><br/><small>Current Server Uptime</small></div>
                   <Bar 
                   data ={{
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
                    datasets: [
                        {
                            label: "runtime",
                            backgroundColor: [
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)'
                            ],
                            borderColor: [
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)',
                                'rgb(121, 106, 238)'
                            ],
                            borderWidth: 1,
                            data: [35, 49, 55, 68, 81, 95, 85, 40, 30, 27, 22, 15]
                        }
                    ]
                   }}
                   options={{
                    scales:
                    {
                        xAxes: [{
                            display: false
                        }],
                        yAxes: [{
                            display: false
                        }],
                    },
                    legend: {
                        display: false
                    }
                   }}
                   
                   />
                   <span className="mb-3"></span>

                   
                  </div>

                  {/* <!-- Numbers--> */}
                  <div class="statistic d-flex align-items-center bg-white has-shadow mt-3">
                    <div class="icon bg-green"><i class="fa fa-line-chart"></i></div>
                    <div class="text"><strong>99.9%</strong><br /><small>Success Rate</small></div>
                  </div>
               
                  
                  </div>

                


              </div>

               {/* !secondrow */}

            </div>
 </section>
                
        
        </>
    )
}

export default Charts
