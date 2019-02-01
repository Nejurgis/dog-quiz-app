import * as React from 'react'
import '../styles/ImageComponent.css';
import { connect } from 'react-redux'
import { fetchUrlImage } from '../actions/fetch-url-image'


class ImageComponent extends React.Component {
    componentDidMount() {
        this.props.fetchUrlImage()
    }

    render() {
        const image = this.props.breeds
        return (
            <div>
                {image.map(url =>
                    <img key={url} src={url.breeds} alt="" />)}
            </div>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        breeds: state.breeds
    }
}
export default connect(mapStateToProps, { fetchUrlImage })(ImageComponent)
