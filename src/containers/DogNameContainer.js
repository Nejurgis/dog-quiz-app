import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'


export default class DogNameContainer extends React.Component {
    render() {
        return (
            <div>
                <DogNameComponent></DogNameComponent>
                <DogNameComponent></DogNameComponent>
                <DogNameComponent></DogNameComponent>
            </div>
        )
    }
}




