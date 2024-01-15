import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Homepage } from './Page/Homepage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<Homepage />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
