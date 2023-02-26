import React, { Image } from 'react'
import './App.css'
import ResultCard from './components/result-card/ResultCard'
import Card from './components/card/Card'
import IndexRow from './components/index-row/IndexRow'
import Button from './components/button/Button'
import Reaction from './assets/images/icon-reaction.svg'
import Memory from './assets/images/icon-memory.svg'
import Verbal from './assets/images/icon-verbal.svg'
import Visual from './assets/images/icon-visual.svg'

function App() {
    const data = [
        {
            category: 'Reaction',
            score: 80,
            icon: Reaction,
        },
        {
            category: 'Memory',
            score: 92,
            icon: Memory,
        },
        {
            category: 'Verbal',
            score: 61,
            icon: Verbal,
        },
        {
            category: 'Visual',
            score: 72,
            icon: Visual,
        },
    ]

    return (
        <div className="App">
            <Card>
                <ResultCard />
                <div className="summary-container">
                    <p className="summary-label">Summary</p>
                    {data.map((item) => {
                        return (
                            <IndexRow
                                key={item.category}
                                icon={item.icon}
                                category={item.category}
                                score={item.score}
                            />
                        )
                    })}
                    <Button></Button>
                </div>
            </Card>
        </div>
    )
}

export default App
