import React from 'react'


const Siatka = ({gridData}) => {
    return (
        <div className="container">
            
            <table class="table table-dark table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Imię</th>
      <th scope="col">Nazwisko</th>
      <th scope="col">Email</th>
      <th scope="col">Hasło</th>
    </tr>
  </thead>
  <tbody>
    {gridData.map((item,index) => (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.imie}</td>
      <td>{item.nazwisko}</td>
      <td>{item.email}</td>
      <td>{item.haslo}</td>
    </tr>
    ))}
  </tbody>

  </table>
        </div>
    )
}

export default Siatka