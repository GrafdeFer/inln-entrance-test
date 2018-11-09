export const initialState = {
  messages: [{ text: 'asssssssssssdasdasd' }],
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
