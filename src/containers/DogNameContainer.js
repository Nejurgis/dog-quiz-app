import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'


export default class DogNameContainer extends React.Component {

    


    render() {
        // console.log(this.props.value)
        const randomDogNumber1 = Math.floor(Math.random() * Object.keys(this.props.value).length)
        const randomDogNumber2 = Math.floor(Math.random() * Object.keys(this.props.value).length)
        const randomDogNumber3 = Math.floor(Math.random() * Object.keys(this.props.value).length)

        const randomDog1 = Object.keys(this.props.value)[randomDogNumber1]
        const randomDog2 = Object.keys(this.props.value)[randomDogNumber2]
        const randomDog3 = Object.keys(this.props.value)[randomDogNumber3]
        

        return (
            <div>
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog1}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog2}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog3}></DogNameComponent>
            </div>
        )
    }

    submitAnswer() {
        console.log('I am clickable')
    }
}




