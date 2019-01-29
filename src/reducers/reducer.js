  const initialState = {breeds: "https://images.dog.ceo/breeds/brabancon/n02112706_1102222.jpg"}

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case 'SET_BREEDS':
    return [
      ...state,
      action.payload]
    default:
    return state
    }
  }
  export default reducer