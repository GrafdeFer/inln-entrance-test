export const initialState = {
  authorized: true,
  login: 'Stanislav',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        state,
      }
    default:
      return state
  }
}
