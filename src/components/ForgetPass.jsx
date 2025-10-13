import React, { useState } from 'react'
import Input from './Input'
import ButtonDynamic from './ButtonDynamic'
import toast from 'react-hot-toast';

const ForgetPass = () => {
  const [email, setEmail]= useState('');
  const [forgetPass, setForgetPass]= useState('')
  function handleChange(e) {
    setEmail(e.target.value)
  }
  function handleSubmit(e) {
    const userData= JSON.parse(localStorage.getItem('user'))
    e.preventDefault()
    if(userData.email === email) {
      setForgetPass(userData.password)
    } else{toast.error('Invalid email')}
  }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white text-xl md:text-2xl font-medium'>Password Recovery</h1>
      <form onSubmit={handleSubmit} action="" className='mt-12 flex flex-col gap-4 items-center'>
        <Input text={'Enter Email'} type={'email'} name={'email'} value={email} onChange={handleChange}/>
        <ButtonDynamic text={'Recover'} type={'submit'}/>
      </form>
      {forgetPass && <p className='mt-6'>Your password: <span className='text-yellow-300 font-medium'>{forgetPass}</span></p>}
    </div>
  )
}

export default ForgetPass