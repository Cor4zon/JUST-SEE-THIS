import './App.css'
import ResultCard from './components/result-card/ResultCard'
import Card from './components/card/Card'
import IndexRow from './components/index-row/IndexRow'
import Button from './components/button/Button'

function App() {
    return (
        <div className="App">
            <Card>
                <ResultCard />
                <div className="summary-container">
                  <p className="summary-label">Summary</p>
                  <IndexRow></IndexRow>
                  <IndexRow></IndexRow>
                  <IndexRow></IndexRow>
                  <IndexRow></IndexRow>
                  <Button></Button>
                </div>
            </Card>
        </div>
    )
}

export default App
