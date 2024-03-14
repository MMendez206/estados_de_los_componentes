import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './componentes/Registro'

const App = () => {
  return (
    <>
      <div className='container shadow-lg p-3 my-5'>
        <h1 className='text-body mb-4'>Crear una Cuenta</h1>
        <Registro />
      </div>
    </>
  )
}

export default App
