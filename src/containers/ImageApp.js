import React from 'react'
import DogNameContainer from './DogNameContainer'
import ImageComponent from '../components/ImageComponent'
import Stats from '../components/Stats'
import '../styles/ImageApp.css'

export default class ImageApp extends React.Component {
    render() {
        return(
            <div>
                <h1 className='title'>Who's this Pokémon?</h1>
                <Stats className='stats'></Stats>
                <ImageComponent />
                <div className="buttons-container">
                    <DogNameContainer value={this.props.data}></DogNameContainer>
                </div>
            </div>
        )
    }
}