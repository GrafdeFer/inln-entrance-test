export const initialState = {
  messages: [
    {
      text: 'Hi dude!',
      date: '9 нояб. 2018 г., 14:49:24',
      author: 'Den',
      receiver: 'Stanislav',
    },
    {
      text: 'Hello dude!',
      date: '9 нояб. 2018 г., 14:49:25',
      author: 'Jack',
      receiver: 'Den',
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
