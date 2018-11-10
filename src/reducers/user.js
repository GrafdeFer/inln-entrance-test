export const initialState = {
  authorized: false,
  login: '',
  error: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        authorized: true,
        login: action.payload.login,
        error: null,
      }
    case 'LOGIN_FAILED':
      return {
        authorized: false,
        login: '',
        error: action.payload.text,
      }
    default:
      return state
  }
}
