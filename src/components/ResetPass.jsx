import React, { useContext } from 'react'
import ButtonDynamic from './ButtonDynamic'
import Input from './Input'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const ResetPass = () => {
    const{oldPass, setOldPass, newPass, setNewPass, navigate}= useContext(AppContext)
    const userData= JSON.parse(localStorage.getItem('user'))
    function handleOldPass(e) {
        setOldPass(e.target.value)
    }

    function handleNewPass(e) {
        setNewPass(e.target.value)
    }
    function handleSub(e) {
        e.preventDefault()
        if(userData.password === oldPass) {
            userData.password = newPass
            localStorage.setItem('user', JSON.stringify(userData))
            toast.success('Password changed')
            
            navigate('/login')
        } else{toast.error('Invalid matchup')}
        setOldPass('')
        setNewPass('')
    }
    
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-white text-xl md:text-2xl font-medium'>Reset password</h1>
        <form onSubmit={handleSub} action="" className='flex flex-col items-center gap-4 mt-8'>
            <Input text={'Old password'} type={'password'} name={'password'} value={oldPass} onChange={handleOldPass}/>
            <Input text={'New password'} type={'password'} name={'password'} value={newPass} onChange={handleNewPass}/>
            <ButtonDynamic text={'Reset'} />
        </form>
    </div>
  )
}

export default ResetPass