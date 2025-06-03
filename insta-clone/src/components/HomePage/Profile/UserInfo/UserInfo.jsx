import React from 'react'
import Menu from '../../MenuBar/Menu'

const UserInfo = ({onSelectTabp}) => {
    // console.log(onSelectTab)
  return (
    <>
    <div>UserInfo</div>
    <button onClick={()=>onSelectTabp(true)}> edit profile</button>
    
    </>
  )
}

export default UserInfo