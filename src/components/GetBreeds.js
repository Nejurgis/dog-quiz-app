import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import {setBreeds} from '../actions/action'

class GetBreeds extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => setBreeds(this.props.setBreeds(response.body.message)))
      

      //.then(response => (console.log(response.body.message)))
      
  }

  render() {
    
    console.log('this.props',this.props.breeds)
    return <div>
        <p> {this.props.state}</p>
    </div>
  }
}

const mapStateToProps = (state) => {
  //console.log('state',state)
 return  {
      breeds : state.breeds
 }
}

export default connect(mapStateToProps, {setBreeds})(GetBreeds)