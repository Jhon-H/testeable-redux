let nextId = 0;

export const AddCita = (cita) => {
  return {
    type: 'ADD',
    payload: {
      id: nextId++,
      ...cita
    }
  }
}

export const EditCita = cita => {
  return {
    type: 'EDIT',
    payload: {
      id: cita.id,
      cita: cita
    }
  }
}

export const DeleteCita = id => {
  return {
    type: 'DELETE',
    payload: id
  }
}