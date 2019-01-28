import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux';


class GetBreeds extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => this.setState({ breeds: response.body }))

      // setBreeds(this.props.setBreeds({denise2: 'denise2'}))
      // addAlbums(this.props.addAlbums(9998,'Enjoying moonlight'));
  }

  render() {
    
    console.log('this.state',this.state)
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

export default connect(mapStateToProps)(GetBreeds)