import * as React from 'react'
import './DogNameComponent.css' ;

export default function DogNameComponent(props) {
    const { submitAnswer, value } = props
    // console.log(Object.keys(props.name.value).length
    
    // GOAL
    // console.log(props.name.value[randomDogName]);
    

    
    
    const randomDogNumber = Math.floor(Math.random() * Object.keys(props.name.value).length)
    const randomDog = Object.keys(props.name.value)[randomDogNumber]
    // console.log(props.name.value['affenpinscher'])
    
    // Math.random()
        return (
            <button onClick={submitAnswer}>{randomDog}</button>
        )
}