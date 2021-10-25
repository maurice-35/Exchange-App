import React from 'react'
import Home from './components/common/Home'

const App = () => {

//  const nameArray = ['John', 'Paul', 'Eddy', 'Grace']


  return(
    <>
    <h1>Hello World!</h1>
    <Home />
      {/* {nameArray.map(name => {
        return <p key={name}>{name}</p>
      })} */}
    </>
  )
}

export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {

//   const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//   qs: {
//     q: 'London,uk',
//     lat: '0',
//     lon: '0',
//     callback: 'test',
//     id: '2172797',
//     lang: 'null',
//     units: 'imperial',
//     mode: 'xml'
//   },
//   headers: {
//     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//     'x-rapidapi-key': '376ec06b32msh65da9fe86d1fcf0p1d5ccejsnec1df064d548',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
