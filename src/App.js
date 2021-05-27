import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Battle from './Battle';
import '../node_modules/react-vis/dist/style.css';
//import {XYPlot, LineSeries} from 'react-vis';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LineSeries
} from 'react-vis';

//import JSONPretty from 'react-json-pretty';
//import dataJson from 'gapoldnavyproduction_2019-05-24_combined.js';
// <JSONPretty id='json-pretty' data={dataJson}></JSONPretty>
function Home (){
  return(
    <div>
      <h1>Home</h1>
     
    </div>
  )
}
function Misc (){
  return(
    <div>
      <h1>Misc</h1>
    </div>
  )
}
class App extends React.Component{
  render (){
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    const BarSeries =  VerticalBarSeries;
    return (
      <Router>
        <div>
          <nav>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/Battle'> Battle </Link>
            </li>
            <li>
              <Link to='/Misc'> Misc </Link>
            </li>
          </nav>

          <Route exact path ='/' component={Home}/>
          <Route path ='/Battle' component={Battle}/>
          <Route path ='/Misc' component={Misc}/>

          <div className="App">
            <XYPlot height={300} width={300}>
              <LineSeries data={data} />
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              
            </XYPlot>
          </div>
          <div>
            <XYPlot width={300} height={300} stackBy="y">
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <BarSeries
                data={[{x: 2, y: 10}, {x: 4, y: 5}, {x: 5, y: 15}]}
                stack
              />
              <BarSeries
                data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]}
                stack
              />
              <BarSeries
                data={[{x: 2, y: 17}, {x: 5, y: 9}, {x: 9, y: 10}]}
                color='red'
              />
              <LineSeries
                className="fourth-series"
                data={[{x: 2, y: 26}, {x: 4, y: 8}, {x: 5, y: 30}]}
              />
            </XYPlot>
          </div>
        </div>

      </Router>
    )
    
  }
}

export default App;
