import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import {addIncorrect} from '../actions/addIncorrect'
import {addCorrect} from '../actions/addCorrect'
import request from 'superagent'
import {setImage} from '../actions/setImage'
// import { instanceOf } from 'prop-types';


class DogNameContainer extends React.Component {
    render() {
        const url = this.props.imageUrl.map(item => item.breeds)
        let n = String(url)
        const correctName = n.split('/')[4]

        const randomDog = () => {
            let randomNum = Math.floor(Math.random() * Object.keys(this.props.value).length)
            return Object.keys(this.props.value)[randomNum]
        }

        const dogArray = [randomDog(), randomDog(), correctName].sort()

        return (
            <div>
                {dogArray.map((dog, index) => 
                <DogNameComponent key={index} submitAnswer={() => this.submitAnswer(correctName, dog)} name={dog} />)}
            </div>
        )
    }
     

    submitAnswer(correctName, dog) {
        if (correctName === dog){
            this.props.addCorrect(dog)
            const reRenderComppnent = () => {
                request('https://dog.ceo/api/breeds/image/random')
                .then(response => this.props.setImage(response.body.message))

            }
            reRenderComppnent()
            // call action that will rerender the component
            // the action will:
            // 1. get new image//
            // 2. get new buttons//

            alert("Correct!")
        }else {
            alert("Wrong")
            this.props.addIncorrect(dog)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        imageUrl: state.breeds
    }
}

export default connect(mapStateToProps,{addCorrect,addIncorrect, setImage})(DogNameContainer)