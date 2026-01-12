import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Board, PhoneBook} from './components'


function App() {
  //const [count, setCount] = useState(0)

  return (
  <div style={{ width: '60vw' }}>
    <Routes>
      <Route index element={<Board />} />
      <Route path="/tic-tac-play" element ={<Board/>} />
      <Route path="/phone-book-play" element ={<PhoneBook/>} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  </div>
  )
}

export default App
