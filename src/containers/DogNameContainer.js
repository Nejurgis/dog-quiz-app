import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import { addIncorrect } from '../actions/addIncorrect'
import { addCorrect } from '../actions/addCorrect'
import { setImage } from '../actions/setImage'
import AnswerStatus from '../components/AnswerStatus'
import { fetchUrlImage } from '../actions/fetch-url-image'

class DogNameContainer extends React.Component {

    state = {
        showAnswer: ''
    }

    displayAnswer = (answer, correctName) => {
        if (answer === 'Right') {
            this.setState({ showAnswer: 'Correct!' })
        } else {
            this.setState({ showAnswer: `Incorrect! The answer was ${correctName}` })
        }
    }


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
                        <DogNameComponent
                            key={index} submitAnswer={() => this.submitAnswer(correctName, dog)}
                            name={dog}
                            correct={dog === correctName} />)}
                </div>)
        }

        const dogArray = [randomDog(), randomDog(), correctName].sort()

        if (this.props.correctAnswersNum === 10 && this.props.incorrectAnswersNum === 0) {
            alert(`You're on fire!`)
            dogArray.push(randomDog(), randomDog(), randomDog())
        }


        return (<div>
            {this.state.showAnswer && <AnswerStatus props={this.state.showAnswer} className='feedback' />}
            {renderButtons()}
        </div>)

    }


    submitAnswer(correctName, dog) {
        const hideMessage = () => {
            this.setState({ showAnswer: '' })
            this.props.fetchUrlImage()
        }

        if (correctName === dog) {
            this.displayAnswer('Right', correctName)
            this.props.addCorrect(dog)
            setTimeout(hideMessage, 2000)
        } else {
            this.displayAnswer('Wrong', correctName)
            this.props.addIncorrect(dog)
            setTimeout(hideMessage, 2000)
        }
    }

}
const mapStateToProps = (state) => {
    return {
        imageUrl: state.breeds,
        correctAnswersNum: state.answerReducer.correct.length,
        incorrectAnswersNum: state.answerReducer.inCorrect.length
    }
}


export default connect(mapStateToProps, { addCorrect, addIncorrect, setImage, fetchUrlImage })(DogNameContainer)