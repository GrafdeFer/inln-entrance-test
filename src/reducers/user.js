export const initialState = {
  authorized: false,
  login: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        authorized: true,
        login: action.payload.login,
      }
    case 'LOGIN_FAILED':
      return {
        authorized: false,
        login: '',
        token: '',
      }
    default:
      return state
  }
}