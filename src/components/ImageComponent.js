import * as React from 'react'
import './ImageComponent.css';
import { connect } from 'react-redux'

function ImageComponent(props) {
    const image = props.breeds
    // const url = image.map(item => item.breeds)

    if (!image) { return <div>Loading...</div> }

    return (
        <div>
            {image && image.map(url => <img key={url} src={url.breeds} alt='Cute dog' />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds
    }
}
export default connect(mapStateToProps)(ImageComponent)
