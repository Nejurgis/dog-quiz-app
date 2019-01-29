import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'


export default class DogNameContainer extends React.Component {
    render() {
        return (
            <div>
                <DogNameComponent submitAnswer={this.submitAnswer} name={this.props}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer}name={this.props}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer}name={this.props}></DogNameComponent>
            </div>
        )
    }

    submitAnswer() {
        console.log('I am clickable')
    }
}




