export function getDogBreeds(breeds) {
    return {
        type: 'GET_DOG_BREEDS',
        payload: {
            breedNames: breeds
        }
    }
}