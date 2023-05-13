import './App.css';
import { useEffect, useState } from 'react';
// import MojPrzycisk from './components/MojPrzycisk';
import Formularz from './components/Formularz';

// const dodajJeden = () => {
//   liczba = liczba + 1;
//   console.log(liczba);
// };

function App() {
 
  return (
    <div className="App">
      
      <header className="App-header">
       <Formularz />
       </header>
    </div>
  );
}

export default App;
