const initialState = {
  isSidebar : false
}

const reducer = (state=initialState, actions) => {
  switch (actions.type) {
    case 'CHANGE-SIDEBAR':
      return {
        ...initialState,
        isSidebar : actions.value
      }
    default:
      return state;
  }
};

export default reducer;