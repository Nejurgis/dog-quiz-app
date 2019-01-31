import * as React from 'react';
import './DogNameComponent.css' ;
import Button from '@material-ui/core/Button';

export default function DogNameComponent(props) {
    
    const { submitAnswer } = props
        
    return (
        <Button onClick={submitAnswer} variant="contained" color="primary" > {props.name}</Button>
         
        )
}