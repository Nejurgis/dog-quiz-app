import React, { Component } from 'react';

import './App.css';
import DogNameContainer from './containers/DogNameContainer'
import ImageComponent from './components/ImageComponent'
import {Provider} from 'react-redux'
import store from './store'
import GetBreeds from './components/GetBreeds'
import RandomButtonContainer from './containers/RandomButtonContainer'

const data = {
  "affenpinscher": ['2'],
        "african": [],
        "airedale": [],
        "akita": [],
        "appenzeller": [],
        "basenji": [],
        "beagle": [],
        "bluetick": [],
        "borzoi": [],
        "bouvier": [],
        "boxer": [],
        "brabancon": [],
        "briard": [],
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <main className="App-header">
          <h1>Who's this Pokémon?</h1>
          <ImageComponent></ImageComponent>
          <RandomButtonContainer/>
          
          <div className="name-container">
          <DogNameContainer value ={data}></DogNameContainer>
          </div>
           <GetBreeds></GetBreeds>
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;
