import React from 'react'
import SideBar from './SideBar'

function App() {
  return (
    <div className='d-flex vh-100 '>
      <div className='w-20'><SideBar/></div>
      <div className='w-50 bg-info'>feed</div>
      <div className='w-30'>suggestion</div>
    </div>
  )
}

export default App