export function addCorrect(answer) {
    return {
        type: 'ADD_CORRECT_ANSWER',
        payload: {
            correct: answer
        }
    }
}