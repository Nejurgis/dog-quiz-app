import React, { Component } from 'react';

import './App.css';
import DogNameContainer from './containers/DogNameContainer'
import ImageComponent from './components/ImageComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <h1>Who's this Pokémon?</h1>
          <ImageComponent></ImageComponent>
          
          <div className="name-container">
          <DogNameContainer></DogNameContainer>
          </div>
          
        </main>
      </div>
    );
  }
}

export default App;
