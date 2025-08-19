import React from 'react'
import SideBar from './SideBar'

function App() {
  return (
    <div className='d-flex vh-100 '>
      <div className='w-20 bg-danger'><SideBar/></div>
      <div className='w-50 bg-info'>feed</div>
      <div className='w-30 bg-primary'>suggestion</div>
    </div>
  )
}

export default App