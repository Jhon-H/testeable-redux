import React, { useState } from 'react';
import { AddCita } from '../actions/index';
import store from '../store/index';

function FormAdd() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    hour: '',
    sintomas: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const reset = () => {
    setForm({
      name: '',
      date: '',
      hour: '',
      sintomas: ''
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(AddCita(form));
    reset();
  }

  return (
    <div className='col-7 mx-auto p-4' style={{marginTop: '1rem', backgroundColor: 'white'}}>
      <h2 className='text-center'> Agregar citas </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'> Nombre </label>
        <input
          id='name'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Tu nombre'
          className='form-control'
          required
        />

        <div className='row'>
          <div className="form-group col">
            <label htmlFor='date'> Fecha </label>
            <input
              type='date'
              id='date'
              name='date'
              value={form.date}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor='hour'> Hora </label>
            <input
              type='time'
              id='hour'
              name='hour'
              value={form.hour}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
        </div>

        <label htmlFor='sintomas'> Sintomas </label>
        <textarea
          if="sintomas"
          name="sintomas"
          value={form.sintomas}
          placeholder="Lista tus sintomas"
          onChange={handleChange}
          className='form-control'
          cols='4'
          style={{resize: 'none'}}

          required
        />

        <input type="submit" value="Enviar" className='btn btn-primary' />
      </form>
    </div>
  );
}

export default FormAdd;
