const files = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_FILE': {
      console.log('Trigger?')
      const newState = state.slice(0);
      newState.push(action.content);
      return [].concat(newState);
    }
    default:
      return state;
  }
};

export default files;
