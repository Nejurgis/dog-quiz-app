import * as React from 'react';
import './DogNameComponent.css' ;
import Button from '@material-ui/core/Button';

export default function DogNameComponent(props) {

    const { submitAnswer } = props
    let correctButton = {
        backgroundColor: 'green'
    }

    return (
        <div className='button'>
            { props.correct === true 
            ? <Button onClick={submitAnswer} variant='contained' color='primary' style={correctButton}>{props.name}</Button>
            : <Button onClick={submitAnswer} variant='contained' color='primary' >{props.name}</Button>
            }
        </div>
        )
}