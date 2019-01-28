import React, { Component } from 'react';

import './App.css';
import DogNameComponent from './components/DogNameComponent'
import ImageComponent from './components/ImageComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ImageComponent></ImageComponent>
          <h1>Who's this Pokémon?</h1>
          <div className="name-container">
            <DogNameComponent></DogNameComponent>
            <DogNameComponent></DogNameComponent>
            <DogNameComponent></DogNameComponent>
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
