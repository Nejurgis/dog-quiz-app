import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import { instanceOf } from 'prop-types';


class DogNameContainer extends React.Component {

    


    render() {
        const url = this.props.imageUrl.map(item => item.breeds)
        let n = String(url)
        const correctName = n.split('/')[4]

        const randomDogNumber1 = Math.floor(Math.random() * Object.keys(this.props.value).length)
        const randomDogNumber2 = Math.floor(Math.random() * Object.keys(this.props.value).length)


        const randomDog1 = Object.keys(this.props.value)[randomDogNumber1]
        const randomDog2 = Object.keys(this.props.value)[randomDogNumber2]

        // console.log(this.props.value)
        // 1 change the url 
        

        return (
            <div>
                <DogNameComponent submitAnswer={this.submitAnswer} name={correctName}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog1}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog2}></DogNameComponent>
            </div>
        )
    }

    submitAnswer() {
        console.log('I am clickable')
    }
}

const mapStateToProps = (state) => {
    return {
        imageUrl: state.breeds
    }
}



export default connect(mapStateToProps)(DogNameContainer)