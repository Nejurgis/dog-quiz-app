import React from 'react'
import RandomButton from '../components/RandomButton'
import * as request from 'superagent'


class RandomButtonContainer extends React.Component {
    render() {
        //needs props still
        return <RandomButton generateRandom={this.generateRandom} />
    }

    generateRandom() {
        console.log('Result from getRandom:')
        // should get a random image from the API
        request('https://dog.ceo/api/breeds/image/random')
            .then(response => console.log(response.body.message))
    }
}

export default RandomButtonContainer