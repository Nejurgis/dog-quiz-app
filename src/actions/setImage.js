export function setImage(breeds) {
    return {
        type: 'SET_IMAGE',
        payload: {
            breeds: breeds
        }
    }
}