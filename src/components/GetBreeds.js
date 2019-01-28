import * as React from 'react'
import * as request from 'superagent'


export default class GetBreeds extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => this.setState({ state: response.body }))
  }

  render() {
    console.log(this.state)
    return <div>
        <p>test</p>
    </div>
  }
}