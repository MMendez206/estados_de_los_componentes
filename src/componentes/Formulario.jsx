import { useState } from 'react'

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')

  const validar = (e) => {
    e.preventDefault()

    if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
      setAlert({ mensaje: 'Debe llenar los campos vacíos', color: 'warning' })
      return
    }

    if (password !== confirmar) {
      setAlert({ mensaje: 'Contraseña Incorrecta, vuelva a intentarlo', color: 'danger' })
      return
    }

    setAlert({ mensaje: 'Guardado con exito!!', color: 'success' })
    setNombre('')
    setEmail('')
    setPassword('')
    setConfirmar('')
  }

  return (
    <>
      <form onSubmit={validar}>
        <div className='mb-4'>
          <input
            type='text' className='form-control' placeholder='Nombre'
            onChange={(e) => setNombre(e.target.value)} value={nombre}
          />
        </div>
        <div className='mb-4'>
          <input
            type='email' className='form-control' placeholder='tuemail@ejemplo.com'
            onChange={(e) => setEmail(e.target.value)} value={email}
          />
        </div>
        <div className='mb-4'>
          <input
            type='password' className='form-control' placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)} value={password}
          />
        </div>
        <div className='mb-4'>
          <input
            type='password' className='form-control' placeholder='Repetir Contraseña'
            onChange={(e) => setConfirmar(e.target.value)} value={confirmar}
          />
        </div>
        <button type='submit' className='btn btn-outline-success btn-lg mb-3'>Registrarse</button>
      </form>
    </>
  )
}

export default Formulario
