import * as React from 'react';
import '../styles/DogNameComponent.css';
import Button from '@material-ui/core/Button';


export default function DogNameComponent(props) {
    const { submitAnswer } = props
   
    return (
        <div className='lineButtons'>
             <Button onClick={submitAnswer} variant='contained' color='primary' > {props.name} </Button>
        </div>
    )
}