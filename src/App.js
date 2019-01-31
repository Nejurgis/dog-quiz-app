import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import ImageApp from './containers/ImageApp'
import ButtonApp from './containers/ButtonApp'


const data = {
  "affenpinscher": [],
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
  "bulldog": [
    "boston",
    "french"
  ],
  "bullterrier": [
    "staffordshire"
  ],
  "cairn": [],
  "cattledog": [
    "australian"
  ],
  "chihuahua": [],
  "chow": [],
  "clumber": [],
  "cockapoo": [],
  "collie": [
    "border"
  ],
  "coonhound": [],
  "corgi": [
    "cardigan"
  ],
  "cotondetulear": [],
  "dachshund": [],
  "dalmatian": [],
  "dane": [
    "great"
  ],
  "deerhound": [
    "scottish"
  ],
  "dhole": [],
  "dingo": [],
  "doberman": [],
  "elkhound": [
    "norwegian"
  ],
  "entlebucher": [],
  "eskimo": [],
  "frise": [
    "bichon"
  ],
  "germanshepherd": [],
  "greyhound": [
    "italian"
  ],
  "groenendael": [],
  "hound": [
    "afghan",
    "basset",
    "blood",
    "english",
    "ibizan",
    "walker"
  ],
  "husky": [],
  "keeshond": [],
  "kelpie": [],
  "komondor": [],
  "kuvasz": [],
  "labrador": [],
  "leonberg": [],
  "lhasa": [],
  "malamute": [],
  "malinois": [],
  "maltese": [],
  "mastiff": [
    "bull",
    "english",
    "tibetan"
  ],
  "mexicanhairless": [],
  "mix": [],
  "mountain": [
    "bernese",
    "swiss"
  ],
  "newfoundland": [],
  "otterhound": [],
  "papillon": [],
  "pekinese": [],
  "pembroke": [],
  "pinscher": [
    "miniature"
  ],
  "pointer": [
    "german",
    "germanlonghair"
  ],
  "pomeranian": [],
  "poodle": [
    "miniature",
    "standard",
    "toy"
  ],
  "pug": [],
  "puggle": [],
  "pyrenees": [],
  "redbone": [],
  "retriever": [
    "chesapeake",
    "curly",
    "flatcoated",
    "golden"
  ],
  "ridgeback": [
    "rhodesian"
  ],
  "rottweiler": [],
  "saluki": [],
  "samoyed": [],
  "schipperke": [],
  "schnauzer": [
    "giant",
    "miniature"
  ],
  "setter": [
    "english",
    "gordon",
    "irish"
  ],
  "sheepdog": [
    "english",
    "shetland"
  ],
  "shiba": [],
  "shihtzu": [],
  "spaniel": [
    "blenheim",
    "brittany",
    "cocker",
    "irish",
    "japanese",
    "sussex",
    "welsh"
  ],
  "springer": [
    "english"
  ],
  "stbernard": [],
  "terrier": [
    "american",
    "australian",
    "bedlington",
    "border",
    "dandie",
    "fox",
    "irish",
    "kerryblue",
    "lakeland",
    "norfolk",
    "norwich",
    "patterdale",
    "russell",
    "scottish",
    "sealyham",
    "silky",
    "tibetan",
    "toy",
    "westhighland",
    "wheaten",
    "yorkshire"
  ],
  "vizsla": [],
  "weimaraner": [],
  "whippet": [],
  "wolfhound": [
    "irish"
  ]
}

class App extends Component {
  state = { items:[]}

 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main className="App-main">
            <ImageApp data ={data}></ImageApp>
            {/* <ButtonApp data = {data}></ButtonApp> */}
          </main>
        </div>
      </Provider>
      
    );
  }
}

export default App;
