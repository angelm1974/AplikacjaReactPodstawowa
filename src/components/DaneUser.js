import React, { useState } from "react";
import Formularz from "./Formularz";
import Siatka from "./Siatka";

export default function DaneUser() {
  const [formDane, setFormDane] = useState(null);
  const [gridData, setGridData] = useState([]);
//   const [visible, setVisible] = useState(true);

  const zapisz = (data) => {
    setFormDane(data);
    setGridData([...gridData, data]);
  };

  return (
    <div>
      <Formularz onSubmit={zapisz} />
      {formDane && (
        <div class="card">
          <div class="card-body">
            <div class="card-title">Dane osoby</div>
            <h6 class="card-subtitle mb-2">
              {formDane.imie} {formDane.nazwisko}
            </h6>
            <p className="card-text">
              Tutaj znajdą się dane usera. <br />
              Imię: {formDane.imie} <br />
              Nazwisko: {formDane.nazwisko} <br />
              Email: {formDane.haslo} <br />
            </p>
            <a href="mailto:{formDane.email}" class="card-link">
              Napisz do mnie
            </a>
          </div>
        </div>
      )}
      <Siatka gridData={gridData} />
    </div>
  );
}
