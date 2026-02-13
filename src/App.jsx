import './App.scss'
import { Principal, Servicios_productos,Acerca } from './pages'
import { Header } from './componentes/'
function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='app__contenedor'>
        <Principal/>
        <Servicios_productos/>
        <Acerca/>
      </div>
    </div>
  )
}

export default App
