import React, { useState } from "react";

export default function Formularz(props) {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [email, setEmail] = useState("");
  const [haslo, setHaslo] = useState("");

  const zapisz = (event) => {
    event.preventDefault();
    props.onSubmit({ imie, nazwisko, email, haslo });
    setImie("");
    setNazwisko("");
    setEmail("");
    setHaslo("");
  };

  return (
    <div className="mt-4">
      <div style={{ verticalAlign: "top" }}>Formularz</div>
      <form onSubmit={zapisz}>
        <div class="mb-3">
            <label for="imie" class="form-label">
                Podaj imię</label>
            <input 
                type="text"
                class="form-control"
                id="frmimie"
                placeholder="Podaj imię"
                value={imie}
                onChange={(event) => setImie(event.target.value)}
            />
        </div>
        <div class="mb-3">
            <label for="nazwisko" class="form-label">
                Podaj nazwisko</label>
            <input 
                type="text"
                class="form-control"
                id="frmnazwisko"
                placeholder="Podaj nazwisko"
                value={nazwisko}
                onChange={(event) => setNazwisko(event.target.value)}
            />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">
                Podaj email</label>
            <input 
                type="email"
                class="form-control"
                id="frmemail"
                placeholder="Podaj emaila"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
        </div>
        <div class="mb-3">
            <label for="haslo" class="form-label">
                Podaj hasło</label>
            <input 
                type="password"
                class="form-control"
                id="frmhaslo"
                placeholder="Podaj haslo"
                value={haslo}
                onChange={(event) => setHaslo(event.target.value)}
            />
        </div>
        <button type="submit" class="btn btn-primary">
            Zapisz
        </button>
      </form>
    </div>
  );
}
