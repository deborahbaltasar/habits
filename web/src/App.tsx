import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Habit completed={2} />
      <Habit completed={3} />
      <Habit completed={20} />
    </div>
  )
}

export default App
