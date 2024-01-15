import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Navbar } from '../Components/Navbar'
import { MainSection } from './HomePage/MainSection'

export const Homepage = () => {
  return (
    <div className='h-screen flex'>
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
            <Navbar />
            <MainSection />
        </div>
    </div>
  )
}
