import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from './hooks/useForm'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { logout, register } from './store/slices/auth/AuthSlice'
import { registerAuth } from './store/slices/auth/thunks'


export const Registro = () => {
  const dispatch = useDispatch()

  const { email, password, onInputChange, formState } = useForm({
    email: 'juanbohorquez@gmail.com',
    password: '123456'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    dispatch(registerAuth(email, password))
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout())
      dispatch(register({ email: user.email }))
    })
  }, [dispatch])

  return (
    <>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={(event) => onSubmit(event)}>
        <input name='email' type='email' onChange={(event) => onInputChange(event)} value={email} />
        <input name='password' type='password' onChange={(event) => onInputChange(event)} value={password} />
        <button type='submit'>Registro</button>
      </form>
    </>
  )
}
