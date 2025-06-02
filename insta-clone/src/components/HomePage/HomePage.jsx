import React from 'react'
import Menu from './MenuBar/Menu'

const HomePage = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'><Menu/></div>
        <div className='col-6'></div>
        <div className='col-3'></div>
      </div>
    </div>
    </>
  )
}

export default HomePage