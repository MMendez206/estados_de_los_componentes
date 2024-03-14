import { useState } from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'

const Registro = () => {
  const [alert, setAlert] = useState({ mensaje: '', color: '' })

  return (
    <>
      <SocialButton />
      <Formulario setAlert={setAlert} />
      {alert.mensaje !== '' && <Alert mensaje={alert.mensaje} color={alert.color} />}
    </>
  )
}

export default Registro
