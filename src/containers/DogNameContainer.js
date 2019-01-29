import * as React from 'react'
import DogNameComponent from '../components/DogNameComponent'
import { connect } from 'react-redux'
import { instanceOf } from 'prop-types';


class DogNameContainer extends React.Component {

    


    render() {
        const url = this.props.imageUrl.map(item => item.breeds)
        let n = String(url)
        const correctName = n.split('/')[4]

        const randomDog = () => {
            let randomNum = Math.floor(Math.random() * Object.keys(this.props.value).length)
            return Object.keys(this.props.value)[randomNum]
        } 


        console.log(randomDog())


        const lucky = [randomDog(), randomDog(), correctName]
        const tryOut = () => lucky[Math.floor(Math.random() * lucky.length)]
        
        let compo = <DogNameComponent></DogNameComponent>

        

        return (
            <div>
                <DogNameComponent submitAnswer={this.submitAnswer} name={tryOut()}></DogNameComponent>
                {/* {compo} */}
                <DogNameComponent submitAnswer={this.submitAnswer} name={randomDog()}></DogNameComponent>
                <DogNameComponent submitAnswer={this.submitAnswer} name={tryOut()}></DogNameComponent>
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