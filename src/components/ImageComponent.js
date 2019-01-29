import * as React from 'react'
import './ImageComponent.css';
import { connect } from 'react-redux'

function ImageComponent(props) {
    const image = props.breeds
    const url = image.map(item => item.breeds
    )
        return (
            <img className='pic' src={url}></img>
        )
}

const mapStateToProps = (state) => {
    return  {
         breeds : state.breeds
    }
   }
export default connect(mapStateToProps)(ImageComponent)