import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import {addIncorrect} from '../actions/addIncorrect'
import {addCorrect} from '../actions/addCorrect'
import request from 'superagent'
import {setImage} from '../actions/setImage'

class DogNameContainer extends React.Component {
    render() {

        const url = this.props.imageUrl.map(item => item.breeds)
        const correctName = String(url).split('/')[4]
        
        const randomDog = () => {
            let randomNum = Math.floor(Math.random() * Object.keys(this.props.value).length)
            return Object.keys(this.props.value)[randomNum]
        }

        const renderButtons = () => {
            return (
                <div>
                    {dogArray.map((dog, index) => 
                    <DogNameComponent key={index} submitAnswer={() => this.submitAnswer(correctName, dog)} name={dog} />)}
                </div>
            )
        }
        
        const dogArray = [randomDog(), randomDog(), correctName].sort()
        
        if (this.props.correctAnswersNum >= 10 ) {
            alert('you guessed correctly 10 times!')
            dogArray.push(randomDog(),randomDog(),randomDog())
            
        }
    
        return (
            renderButtons()
        )
    }
     
    submitAnswer(correctName, dog) {
        const reRenderComponent = () => {
            request('https://dog.ceo/api/breeds/image/random')
            .then(response => this.props.setImage(response.body.message))
        }
        if (correctName === dog){
            // alert("Correct!")
            this.props.addCorrect(dog)
            setTimeout(reRenderComponent, 2000)
        } else {  
            // alert("Wrong")
            this.props.addIncorrect(dog)
            setTimeout(reRenderComponent, 2000)
        }
    }

}
const mapStateToProps = (state) => {

    return {
        imageUrl: state.breeds,
        correctAnswersNum: state.answerReducer.correct.length

    }
}


export default connect(mapStateToProps,{addCorrect,addIncorrect, setImage})(DogNameContainer)