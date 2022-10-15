import logo from './logo.svg';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{
  name: 'Page A',
  pv: 2400,
  amt: 2400,
},
{
  name: 'Page B',
  pv: 1398,
  amt: 2210,
},
{
  name: 'Page C',
  pv: 9800,
  amt: 2290,
},
{
  name: 'Page D',
  pv: 3908,
  amt: 2000,
},
{
  name: 'Page E',
  pv: 4800,
  amt: 2181,
},
{
  name: 'Page F',
  pv: 3800,
  amt: 2500,
},
{
  name: 'Page G',
  pv: 4300,
  amt: 2100,
}]; // Sample data

function DrawGraph() {
  return (
    <div>
      <LineChart width={1500} height={2000} data={data} // Graph is too big. Interval is currently 200 per tick
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis domain={[dataMin => (Math.floor(dataMin/200)*200), dataMax => (Math.ceil(dataMax/200)*200)]} tickCount={50}/>
        <Line type="monotone" dataKey="pv" stroke="#0095FF" />
      </LineChart>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      {DrawGraph()}
    </div>
  );
}

export default App;
