import React, { useState } from 'react'
import styles from './editprofile.module.css'
import Setting from './editChilds/setting'
import Editing from './editChilds/edit'
const EditProfile = () => {
  const [button,activeButton] = useState('editProfile');

  const settingContent = {
    editProfile : < Editing/>
  }
  return (
    <>
    
    <div className='container-fluid mt-4'>
      <div className='row'>
        <div className='col-4'><Setting activeButton={button} onSelectButton={activeButton}/></div>
        <div className='col-8'>{settingContent[button] || <h4>Component creation is in progress ... <br/> plz stay with us for updates</h4>}</div>
      </div>
    </div>
    </>
  )
}

export default EditProfile