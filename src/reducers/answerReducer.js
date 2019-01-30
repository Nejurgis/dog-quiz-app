const initialState = {
        correct: [],
        inCorrect: []
    }


const answerReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'ADD_CORRECT_ANSWER':
            return {
                ...state, 
                correct: [...state.correct, action.payload]
            }
                

        case 'ADD_INCORRECT_ANSWER':
            return {
                ...state,
                inCorrect: [...state.inCorrect, action.payload]
            }
        default:
            return state
    }
}

export default answerReducer