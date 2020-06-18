import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log(state.bands)
      const band = {
        id: uuid(),
        name: action.payload
      }
      return { ...state, bands: [...state.bands, band]};
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.payload)
      return { bands };
    default:
      return state;
  }
};
