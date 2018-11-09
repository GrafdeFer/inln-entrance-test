import login from '../../helpers/login'

export const logIn = (payload, redirect) => {
  return dispatch => {
    const result = login(payload)
    switch (result.status) {
      case 200:
        dispatch(loginSuccess(result))
        redirect()
        break
      case 400:
        dispatch(loginFailed(result))
        break
      default:
        dispatch(loginFailed(result))
        break
    }
  }
}

export const loginSuccess = payload => ({
  type: 'LOGIN_SUCCESS',
  payload,
})

export const loginFailed = payload => ({
  type: 'LOGIN_FAILED',
  payload,
})
