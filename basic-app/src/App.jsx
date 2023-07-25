import './App.css';
import {useState} from 'react'
import Form from './components/Form';

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];

function App() {
  const [country, setCountry] = useState();
  return (
    <div className="App">
      <Form />
      <select 
      value={country}
      onChange={(e) => {
        console.log(e.target.value)
        setCountry(e.target.value)
      }}>
        {countries.map((item,index) => {
          return (<option value={index} key={index}>{item.name}</option>);
        })}
      </select>

      <select onChange={() => {console.log(countries[country], country)}} >
        {countries[country] && countries[country].cities.map((item,index) => {
          return <option value={index} key={index}>{item}</option>
        })}
      </select>

    </div>
  );
}

export default App;
