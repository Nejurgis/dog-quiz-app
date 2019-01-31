import * as React from 'react';
import './DogNameComponent.css' ;
import Button from '@material-ui/core/Button';

export default function DogNameComponent(props) {

    if (props.correct) {
        console.log('h')
    }
    const { submitAnswer } = props
    let correctButton = {
        backgroundColor: 'green'
    }

    return (
        <div className='button'>
            { props.correct === true 
            ? <button onClick={submitAnswer} style={correctButton}>{props.name}</button>
            : <button onClick={submitAnswer} >{props.name}</button>
            }
        </div>
        )
}