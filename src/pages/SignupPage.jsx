import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import btcIcon from '../assets/img/btc-icon.png'
import { signup } from '../store/actions/userActions'

export const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSignUp = (ev) => {
    ev.preventDefault()
    const { value } = ev.target.elements.name
    if (value === '') return
    dispatch(signup(value))
    navigate('/')
  }

  return (
    <section className='signup-page'>
      <img className='user-btc-icon' src={btcIcon} alt='btc-icon' />
      <form onSubmit={onSignUp} className='signup-form'>
        <label htmlFor='name'>Please enter your name</label>
        <input type='text' name='name' id='name' placeholder='Your name..' />
        <button className='form-signup-btn'>Sign up</button>
      </form>
    </section>
  )
}
