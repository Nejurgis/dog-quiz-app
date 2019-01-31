import * as React from 'react';
import { connect } from 'react-redux';
import './Status.css';

class Stats extends React.Component {

    render() {
        const total = this.props.correct + this.props.inCorrect
        let score = Math.round((this.props.correct * 100) / total)
        if (isNaN(score)) { score = `Starting text here` }
        else score = score + '%'
        return (
            <div className='status'>
                <h3>Score: {score}</h3>
                <h3>Correct Answers: {this.props.correct} / {total} </h3>
                <h3>Incorrect Answers: {this.props.inCorrect} </h3>
            </div>
        )
    }

}
const mapStateToProps = (state) => {

    return {
        correct: state.answerReducer.correct.length,
        inCorrect: state.answerReducer.inCorrect.length,
    }
}
export default connect(mapStateToProps)(Stats)