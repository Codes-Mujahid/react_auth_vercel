import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Input from './Input'
import ButtonDynamic from './ButtonDynamic'
import toast from 'react-hot-toast'

const Login = () => {
  const {loginData, setLoginData, navigate, setIsLogged} = useContext(AppContext)
  function handleChangeLogin(e) {
    setLoginData((preObj)=> (
      {...preObj, [e.target.name]: e.target.value }
    ))
  }
  function handleSubmit(e) {
    e.preventDefault()
    const userData= JSON.parse(localStorage.getItem('user'))
    console.log(loginData);

    if(userData && userData.email=== loginData.email && userData.password=== loginData.password) {
      navigate('/dashboard')
      setIsLogged(true)
      toast.success('Login successfull')
    } else{toast.error('Wrong email or password')}

    setLoginData({email:'', password:''})
  }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white text-xl md:text-2xl font-medium'>User Login</h1>
      <form action="" onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4 items-center'>
        <Input text={'Enter Email'} type={'email'} name={'email'} value={loginData.email} onChange={handleChangeLogin}/>
        <Input text={'Password'} type={'password'} name={'password'} value={loginData.password} onChange={handleChangeLogin}/>
        <p onClick={()=> navigate('/forget-pass')} className='flex justify-end w-full cursor-pointer hover:underline'>Forget password?</p>
        <ButtonDynamic text={'Submit'} type={'submit'}/>
      </form>
    </div>
  )
}

export default Login