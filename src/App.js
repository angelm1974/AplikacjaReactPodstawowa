import './App.css';
import { useEffect, useState } from 'react';
import PobierzPogode from './components/PobierzPogode';
// import MojPrzycisk from './components/MojPrzycisk';
// import DaneUser from './components/DaneUser';

// const dodajJeden = () => {
//   liczba = liczba + 1;
//   console.log(liczba);
// };

function App() {
 
  return (
    <div className="App">
      
      <header className="App-header">
       {/* <DaneUser /> */}
        <PobierzPogode />
       </header>
    </div>
  );
}

export default App;
