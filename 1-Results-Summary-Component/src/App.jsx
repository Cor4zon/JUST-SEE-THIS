import { useState } from 'react'
import './App.css'
import ResultCard from './components/result-card/ResultCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ResultCard />
    </div>
  )
}

export default App
