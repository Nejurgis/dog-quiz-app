import React from 'react'

export default function RandomButton (props) {
    // currently empty variables because the data is not imported yet
    // const { images, breed } = props

    const { generateRandom } = props
    return (
        <div className="randomButton">
            <button onClick={generateRandom}>Click me to see a random dog!</button>
        </div>
    )
}