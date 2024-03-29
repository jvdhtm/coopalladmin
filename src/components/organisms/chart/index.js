import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';


// Components
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import H from '../../atoms/h';
import  Card from '../../molecules/card';
import  CardBody from '../../molecules/cardBody';
import  Grids from '../../molecules/grids';
import  CardHeader from '../../molecules/cardHeader';


const Wrapper = styled.div`
  ${style}
`;

const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  
  const bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  
  const doughnut = {
    labels: [
      'Red',
      'Green',
      'Yellow',
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      }],
  };
  
  const radar = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
  
  const pie = {
    labels: [
      'Red',
      'Green',
      'Yellow',
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      }],
  };
  
  const polar = {
    datasets: [
      {
        data: [
          11,
          16,
          7,
          3,
          14,
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB',
        ],
        label: 'My dataset' // for legend
      }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue',
    ],
  };

  const options = {}
const Chart = ({ title ,children ,className ,...props }) => {

    const Class = classNames('chart', className);
    return  <Wrapper className={Class}>
                    { title ? <H level="1">{title}</H>:""}
                    <div className="chart__body">
                      <Grids className="flexrow">
                        <Card className="col-6">
                          <CardHeader>
                            Line Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Line data={line} options={options} />
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="col-6">
                          <CardHeader>
                            Bar Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Bar data={bar} options={options} />
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="col-6">
                          <CardHeader>
                            Doughnut Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Doughnut data={doughnut} />
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="col-6">
                          <CardHeader>
                            Radar Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Radar data={radar} />
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="col-6">
                          <CardHeader>
                            Pie Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Pie data={pie} />
                            </div>
                          </CardBody>
                        </Card>
                        <Card className="col-6">
                          <CardHeader>
                            Polar Area Chart
                            <div className="card-header-actions">
                              <a href="http://www.chartjs.org" className="card-header-action">
                                <small className="text-muted">docs</small>
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <div className="chart-wrapper">
                              <Polar data={polar} options={options}/>
                            </div>
                          </CardBody>
                        </Card>
                      </Grids>
                
                    </div>   
            </Wrapper> 
            
}

Chart.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    className: PropTypes.string,
};


export default Chart;
