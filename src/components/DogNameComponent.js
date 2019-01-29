import * as React from 'react'
import './DogNameComponent.css' ;

export default function DogNameComponent(props) {
    const { submitAnswer } = props
        return (
            <button onClick={submitAnswer}>Bremen Dog</button>
        )
}