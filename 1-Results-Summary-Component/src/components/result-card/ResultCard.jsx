import React from 'react'
import './ResultCard.scss'

const ResultCard = () => {
    return (
        <div className="result-card__container">
            <p className="result-header">Your Result</p>
            <div className="result-circle">
                <p className="result-score">76</p>
                <p className="result-of-100">of 100</p>
            </div>
            <p className="h3">Great</p>
            <p className="result-info">
                Your performance exceed 65% of <br /> the people conducting the
                test here!
            </p>
        </div>
    )
}

export default ResultCard
