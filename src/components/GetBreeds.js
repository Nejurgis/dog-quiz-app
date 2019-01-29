import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import { setImage } from '../actions/setImage'

class GetBreeds extends React.Component {

  componentDidMount() {
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => this.props.setImage(response.body.message))
  }

  render() {
    console.log(this.props.image)
    const image = this.props.some

    return (<div></div>)
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.breeds
  }
}

export default connect(mapStateToProps, { setImage })(GetBreeds)