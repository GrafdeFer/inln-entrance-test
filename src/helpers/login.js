export default function(payload) {
  const usersData = {
    login: { password: 'lol', token: '123456' },
    lol: { password: 'lol', token: '456789' },
  }
  const login = payload.login
  const password = payload.password
  if (login in usersData) {
    if (usersData[login].password === password) {
      return {
        status: 200,
        text: 'Success!',
        token: usersData[login].token,
        login: login,
      }
    } else {
      return { status: 400, text: 'Login or password are wrong!' }
    }
  } else {
    return { status: 400, text: 'Login or password are wrong!' }
  }
}
