export const initialState = {
  messages: [
    {
      text: 'Lorem ipsum dolor sit amet!',
      date: '9 нояб. 2018 г., 14:40:24',
      author: 'user1',
      receiver: 'user2',
    },
    {
      text: 'Pellentesque porta elit eget enim maximus eleifend.',
      date: '9 нояб. 2018 г., 14:48:27',
      author: 'user3',
      receiver: 'user1',
    },
    {
      text: 'Donec viverra, risus vel condimentum dictum',
      date: '9 нояб. 2018 г., 14:42:26',
      author: 'user2',
      receiver: 'user3',
    },
    {
      text: 'Pellentesque eget nulla blandit, molestie nisi id, luctus arcu.',
      date: '9 нояб. 2018 г., 14:45:15',
      author: 'user1',
      receiver: 'user2',
    },
    {
      text: 'Duis ligula lacus, rutrum in orci a, auctor sagittis felis.',
      date: '9 нояб. 2018 г., 14:44:35',
      author: 'user2',
      receiver: 'user1',
    },
    {
      text: 'Pellentesque lobortis ex lectus.',
      date: '9 нояб. 2018 г., 14:41:21',
      author: 'user3',
      receiver: 'user2',
    },
    {
      text: 'Ut convallis cursus fringilla.',
      date: '9 нояб. 2018 г., 14:46:25',
      author: 'user2',
      receiver: 'user3',
    },
    {
      text: 'Ut vitae velit sollicitudin, finibus dui vitae, cursus nisl.',
      date: '9 нояб. 2018 г., 14:43:24',
      author: 'user1',
      receiver: 'user3',
    },
    {
      text: 'Sed ultricies eleifend ornare.',
      date: '9 нояб. 2018 г., 14:41:22',
      author: 'user3',
      receiver: 'user1',
    },
    {
      text: 'Etiam ultrices felis sollicitudin mauris tristique ac a elit.',
      date: '9 нояб. 2018 г., 14:45:25',
      author: 'user3',
      receiver: 'user2',
    },
  ],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    default:
      return state
  }
}
