export default function(payload) {
  const usersData = {
    user1: { password: 'lol' },
    user2: { password: 'lol' },
    user3: { password: 'lol' },
  }
  const login = payload.login
  const password = payload.password
  if (login in usersData) {
    if (usersData[login].password === password) {
      return {
        status: 200,
        text: 'Success!',
        login: login,
      }
    } else {
      return { status: 400, text: 'Login or password are wrong!' }
    }
  } else {
    return { status: 400, text: 'Login or password are wrong!' }
  }
}
