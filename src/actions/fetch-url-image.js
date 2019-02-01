import * as request from 'superagent';
import { setImage } from './setImage'

export  function fetchUrlImage() {
    return function(dispatch){
        request('https://dog.ceo/api/breeds/image/random')
            .then(response => dispatch( setImage(response.body.message)))
    } 
     
}
