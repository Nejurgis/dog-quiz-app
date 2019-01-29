import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import { setBreeds } from '../actions/action'

class GetBreeds extends React.Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => setBreeds(this.props.setBreeds(response.body.message)))
    // .then(response => (console.log(response.body.message)))
  }

  render() {
    const image = this.props.breeds
    const url = image.map(item => item.breeds
    )

    return (<div>
      {/* <img className='pic' src={url}></img> */}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps, { setBreeds })(GetBreeds)