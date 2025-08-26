
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ErrorComponent from './components/ErrorComponent'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter> 
      <NavBar />
    
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/libro/:cod' element={<ItemListContainer />} />
          <Route path='/categoria/:nombreCategoria' element={<ItemDetailContainer />} />
          <Route path='*' element={<ErrorComponent />} /> 
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
