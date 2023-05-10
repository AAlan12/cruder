import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Feed from './pages/Feed'
import Edit from './pages/Edit'
import Post from './pages/Post'
import ReadMore from './pages/ReadMore'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Feed/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/readmore/:id' element={<ReadMore/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
