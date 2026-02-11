import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1708724195876-1156245fce21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen ">
        
        <h1 className='text-7xl text-white font-semibold text-center pt-20'>Welcome to the UserBay App</h1>
      <p className='text-xl text-gray-900 font-mono text-center mt-24'>This application is for  multi-Users recognition and interaction.</p>
      <div className='btn-group flex  justify-center items-center mt-20  gap-4 '>

        <button onClick={() => navigate('/about')} className='text-white bg-black px-4 py-3 rounded-xl font-semibold'>About</button>

        <button onClick={() => navigate('/users')} className='text-black bg-white px-4 py-3 rounded-xl font-semibold'>Users</button>
  
      </div>
    </div>
  )
}

export default Home