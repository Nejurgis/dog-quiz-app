import * as React from 'react';
import '../styles/DogNameComponent.css';

export default function DogNameComponent(props) {
    const { submitAnswer } = props
    let correctButton = {
        backgroundColor: 'green'
    }

    return (
        <div className='test'>
            {props.correct === true
                ? <img onClick={submitAnswer} variant='contained' color='primary' style={correctButton}> {props.name} </img>
                : <img onClick={submitAnswer} variant='contained' color='primary' > {props.name} </img>
            }
        </div>
    )
}