import * as React from 'react'

export default class Correct extends React.Component {
    render() {
        const text = this.props
        return (
            <h2 className='feedback'>{text.props}</h2>
        )
    }
}
