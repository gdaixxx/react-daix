
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {


  return (
    <>
      <header>
      <NavBar />

      </header>
      <main>
      <ItemListContainer className="contenedor-productos" style={{textAlign: "center"}} mensaje="Sección en mantenimineto. Vuelva más tarde para conocer nuestros productos."/>
      </main>
      
    </>
  )
}

export default App
