import * as React from 'react'
import './ImageComponent.css';
import { connect } from 'react-redux'
// props are from connect
function ImageComponent(props) {
    console.log(props)
    const image = props.breeds
    // const url = image.map(item => item.breeds)

    // if (!image) { return <div>Loading...</div> }
    // console.log(image)

    return (
        <div>
            {image.map(url => <img key={url} src={url.breeds} alt=""  />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds
    }
}
export default connect(mapStateToProps)(ImageComponent)
