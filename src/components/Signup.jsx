import React, { useContext } from 'react'
import Input from './Input'
import ButtonDynamic from './ButtonDynamic'
import { AppContext } from '../context/AppContext'

const Signup = () => {
  const {formData, setFormData, navigate, toast} = useContext(AppContext)

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(formData))
    
    console.log(formData); 
    setFormData({name:'', email:'', password:''})
    navigate('/login')
    toast.success('Signup successfull')
  }
  function handleChange(e) {
    setFormData((preObj)=> (
      {...preObj, [e.target.name]: e.target.value}
    ));
  }
  return (
    <div className='flex flex-col items-center' >
        <h1 className='text-white text-xl md:text-2xl font-medium'>Signup Form</h1>
        <form onSubmit={handleSubmit} action="" className='mt-8 flex flex-col gap-4 items-center'>
            <Input text={'Enter Name'} type={'text'} name={'name'} value={formData.name} onChange={handleChange}/>
            <Input text={'Enter Email'} type={'email'} name={'email'} value={formData.email} onChange={handleChange}/>
            <Input text={'Password'} type={'password'} name={'password'} value={formData.password} onChange={handleChange}/>
            <ButtonDynamic text={'Submit'} type={'submit'}/>
        </form>
    </div>
  )
}

export default Signup