import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
    const {user, setUser, navigate, setIsLogged}= useContext(AppContext)

    useEffect(()=> {
        const userData= JSON.parse(localStorage.getItem('user'));
        if(userData) {
            setUser(userData)
        }
    }, [setUser])

    function logout() {
        setIsLogged(false)
        setUser({})
        navigate('/')
    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-white text-xl md:text-2xl font-medium'>User dashboard</h1>
        <div className='flex flex-col items-center mt-8'>
            <p className='font-light'>Welcome <span className='text-yellow-200 font-medium' >@{user.name}</span></p>
            <p className='font-light'>Email: <span className='text-yellow-200 font-medium' >{user.email}</span></p>
        </div>
        <div className='flex gap-6 mt-8'>
            <button onClick={()=>navigate('/reset-pass')} className='border border-white px-4 py-2 cursor-pointer' type="button">Reset password</button>
            <button onClick={logout} className='border border-white px-4 py-2 cursor-pointer' type="button">Logout</button>
        </div>
    </div>
  )
}

export default Dashboard