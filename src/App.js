import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries/Countries';

function App() {

  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   
//   return (
//     <div>
//       <h1>Visiting Every Country of the world!!!</h1>
//       <h3>Available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
