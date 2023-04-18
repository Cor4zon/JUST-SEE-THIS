import './App.css'
import { Button } from './components/button/Button'
import PlanCard from './components/plan-card/PlanCard'

import IconPro from './assets/images/icon-pro.svg';

function App() {

  return (
    <div className="App">
      {/* <Button text="Play with me" />
      <Button text="Play with me" primary={true} /> */}

      <PlanCard icon={IconPro} price={15} name={'Pro'} />
    </div>
  )
}

export default App
