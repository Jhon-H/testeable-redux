import React from 'react';
import store from '../store/index';
import { useDispatch } from 'react-redux';
import { DeleteCita } from '../actions/index';

function Citas() {
  const dispatch = useDispatch(); 
  const storeCitas = store.getState();
  let fakeCont = 0;

  const handleDelete = id => {
    alert("id: " +  id);
    store.dispatch(DeleteCita(id));
  }

  return (
    <div className='col-7 mx-auto p-4' style={{marginTop: '5rem', backgroundColor: 'white'}}>
      <h2 style={{marginBottom: '2rem'}}> Agenda </h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'> # </th>
            <th scope='col'> Nombre </th>
            <th scope='col'> Fecha </th>
            <th scope='col'> Hora </th>
            <th scope='col'> Sintomas </th>
            <th scope='col'> Admin </th>
          </tr>
        </thead>
        <tbody>
          {
            storeCitas.map(cita => (
              <tr key={cita.id}>
                <th scope='row'> { fakeCont++ } </th>
                <td> { cita.name } </td>
                <td> { cita.date } </td>
                <td> { cita.hour } </td>
                <td> { cita.sintomas } </td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(cita.id)}
                >
                  Eliminar
                </button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Citas;
