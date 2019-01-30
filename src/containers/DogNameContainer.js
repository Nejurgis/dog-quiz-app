import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import {addIncorrect} from '../actions/addIncorrect'
import {addCorrect} from '../actions/addCorrect'
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

export default connect(mapStateToProps,{addCorrect,addIncorrect})(DogNameContainer)