export function addIncorrect(answer) {
    return {
        type: 'ADD_INCORRECT_ANSWER',
        payload: {
            incorrect: answer
        }
    }
}