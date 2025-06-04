import React from 'react'
import styles from './editprofile.module.css'
import Setting from './editChilds/setting'
import Editing from './editChilds/edit'
const EditProfile = () => {
  return (
    <>
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'><Setting/></div>
        <div className='col-8'><Editing/></div>
      </div>
    </div>
    </>
  )
}

export default EditProfile