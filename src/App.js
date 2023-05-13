import './App.css';
import { useEffect, useState } from 'react';
import MojPrzycisk from './components/MojPrzycisk';


// const dodajJeden = () => {
//   liczba = liczba + 1;
//   console.log(liczba);
// };

function App() {
  let [liczba, setLiczba] = useState(0);
  let [tekst, setText] = useState("liczba jest równa zero");

  const dodajJeden = () => {
    setLiczba(liczba + 1);
    dynamicznyTekst();
    console.log(liczba);
  };

  const dynamicznyTekst = () => {
    let mojtekst = "";
    if (liczba > 0 && liczba < 5) {
      mojtekst = "liczba jest większa od zera";
    } else if (liczba > 5) {
      mojtekst = "liczba jest większa od 5";
    }
    setText(mojtekst);
  };
   
  useEffect(() => {
    dynamicznyTekst();
  });

  return (
    <div className="App">
      
      <header className="App-header">
      <h2>{tekst}</h2>
        <div className="moj-text">liczba wynosi: {liczba}</div>
        <button type="button"
          onClick={dodajJeden}
          className="btn btn-primary">Dodaj jeden</button>
        <MojPrzycisk funkcja="zmienTekst" klasaPrzycisku="btn btn-primary" tekstPrzycisku="ok" />
        <MojPrzycisk funkcja ="zapiszTekst" klasaPrzycisku="btn btn-warning" tekstPrzycisku="anuluj"/>
      </header>
    </div>
  );
}

export default App;
