const farmMenuConditionalReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_MENU_BOOLEAN':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default farmMenuConditionalReducer;
  