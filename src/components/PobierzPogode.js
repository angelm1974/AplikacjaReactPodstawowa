import axios from "axios";
import React, { useState, useEffect } from "react";

const PobierzPogode = () => {
  const [pogoda, setPogoda] = useState([]);
  const [filtrText, setFiltrText] = useState("");

  useEffect(() => {
    axios
      .get("https://danepubliczne.imgw.pl/api/data/synop/")
      .then((response) => {
        setPogoda(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }, []);

    const filtrPogody= pogoda.filter((item) => item.stacja.includes(filtrText));
  
   return (
    <div class="mt-3">
        <h2>Witaj w serwisie pogodowym!!!</h2>
        <input type="text" placeholder="Wpisz nazwę stacji" onChange={(e) => setFiltrText(e.target.value)} />
      <div className="container mt-3">
            
            <table class="table table-dark table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Stacja</th>
      <th scope="col">Temp.</th>
      <th scope="col">Prędklość wiatru</th>
      <th scope="col">Wilgotność</th>
      <th scope="col">Ciśnienie</th>
    </tr>
  </thead>
  <tbody>
    {filtrPogody.map((item,index) => (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.stacja}</td>
      <td>{item.temperatura} C</td>
      <td>{item.predkosc_wiatru}</td>
      <td>{item.wilgotnosc_wzgledna}</td>
      <td>{item.cisnienie}</td>
    </tr>
    ))}
  </tbody>

  </table>
        </div>
    </div>
  );
};

export default PobierzPogode;
