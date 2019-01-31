import * as React from 'react'
import './Feedback.css'

import { connect } from 'react-redux'




 
function Feedback() {
state : {
    answerReducer: null,
}

    console.log(state.answerReducer)
    return (
        <div className='feedback'  >
            <p>HERE THE FEEDBACK</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state.answerReducer)
    return {
        answerReducer: state
    }
}
export default connect(mapStateToProps)(Feedback)
