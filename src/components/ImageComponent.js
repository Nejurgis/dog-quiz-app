import * as React from 'react'
import './ImageComponent.css';
import { connect } from 'react-redux'
// props are from connect
function ImageComponent(props) {
    const image = props.breeds
    return (
        <div>
            {image.map(url => <img key={url} src={url.breeds} alt="" />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds
    }
}
export default connect(mapStateToProps)(ImageComponent)
