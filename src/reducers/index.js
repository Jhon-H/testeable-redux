export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];

    case 'DELETE':
      return state.filter(cita => cita.id !== action.payload);

    case 'EDIT':
      return state.map(cita => (cita.id !== action.payload.id ? cita : action.payload.cita));

    default:
      return state;
  }
}
