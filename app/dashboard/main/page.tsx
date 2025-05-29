
import WidgetsGrid from '../../../components/dashboardCom/WidgetsGrid'
import React from 'react'

export default function MainPage() {
  return (
    <>
       <header className='p-2'>
        <h1 className='text-5xl font-bold text-gray-800'>Dashboard</h1>
        <p>Informacion general</p>

       </header>
       
        <WidgetsGrid/>
       
    </>
  )
}
