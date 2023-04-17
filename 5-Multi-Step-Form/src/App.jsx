import './App.css'
import { Button } from './components/button/Button'

function App() {

  return (
    <div className="App">
      <Button text="Play with me" />

      <Button text="Play with me" primary={true} />
    </div>
  )
}

export default App
