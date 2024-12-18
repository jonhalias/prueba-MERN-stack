import './App.css'
import { Routes, Route } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import NotFound from './pages/NotFound'
import CreateTask from './pages/CreateTask'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<TaskPage />} />
        <Route path='/form' element={<CreateTask />} />
        <Route path='/edit/:id' element={<CreateTask />} />
      </Routes>
    </>
  )
}

export default App
