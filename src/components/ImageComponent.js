import * as React from 'react'
import '../styles/ImageComponent.css';
import { connect } from 'react-redux'

function ImageComponent(props) {
    const image = props.breeds
    return (
        <div>
            {image.map(url =>
                <img key={url} src={url.breeds} alt="" />)}


            {/* {image.map(url => <div key={url}>
            {String(url.breeds).split('/')[4]}</div> )} */}
        </div>
    )
}


// line 13+14 are the name of the dog in the URL. This is going to be used when we swap the answer and picture.

const mapStateToProps = (state) => {

    return {
        breeds: state.breeds
    }
}
export default connect(mapStateToProps)(ImageComponent)
