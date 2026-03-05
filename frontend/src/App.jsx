import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import LoadData from './components/LoadData'
import Home from './pages/Home'
import Details from "./pages/Details"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
