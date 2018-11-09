export const initialState = {
  showDrawer: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SWITCH_DRAWER':
      return {
        showDrawer: !state.showDrawer,
      }
    default:
      return state
  }
}
