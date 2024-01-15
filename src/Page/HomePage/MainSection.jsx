import React from 'react'
import { LeftCont } from './LeftCont'
import { RightCont } from './RightCont'

export const MainSection = () => {
  return (
    <div className='flex'>
        <LeftCont />
        
        <RightCont />
    </div>
  )
}
