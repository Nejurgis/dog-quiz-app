import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import {setBreeds} from '../actions/action'

class GetBreeds extends React.Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => setBreeds(this.props.setBreeds(response.body.message)))
        // .then(response => (console.log(response.body.message)))
  }

  render() {    
    //console.log('this.props',this.props.breeds[0])
    // console.log(Object.keys(this.props.breeds[0]))
    // let image = this.props.breeds[

    
    
    return (<div>
          <img className='pic' src=""></img>
    </div>)
  }
}

const mapStateToProps = (state) => {
  //console.log('state',state.breeds[0])
 return  {
      breeds : state.breeds
 }
}

export default connect(mapStateToProps, {setBreeds})(GetBreeds)