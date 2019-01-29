import React from 'react'
import RandomButton from '../components/RandomButton'

class RandomButtonContainer extends React.Component {
    render(){
        //needs props still
        return <RandomButton generateRandom={this.generateRandom}/>
    }

    generateRandom(){
        console.log('I, too, am clickable')
    }
}

export default RandomButtonContainer