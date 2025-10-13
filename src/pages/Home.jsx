import React, { useContext } from 'react'
import ButtonDynamic from '../components/ButtonDynamic'
import { AppContext } from '../context/AppContext'

const Home = () => {
    const {navigate}= useContext(AppContext)
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-xl md:text-3xl font-medium text-white'>React Authentication</h1>
        <div className='flex gap-8 mt-12'>
            <ButtonDynamic text={'Signup'} type={'button'} onClick={()=> navigate('/signup')} />
            <ButtonDynamic text={'Login'} type={'button'} onClick={()=> navigate('/login')} />
        </div>
    </div>
  )
}

export default Home