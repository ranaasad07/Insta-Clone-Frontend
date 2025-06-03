import React, { useState } from 'react'
import Menu from './MenuBar/Menu'
import Profile from './Profile/Profile'
import UserInfo from './Profile/UserInfo/UserInfo'
// UserInfo


const HomePage = () => {
  const [tab, setTab] = useState("home")

  const centerContent = {
    profile: <Profile onSelectTab={setTab} />,
    home: <p>home</p>,
    // editProfile: <UserInfo onSelectTab={setTab}/>,
  }
  console.log(tab)
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'><Menu onSelectTab={setTab} /></div>
          <div className='col-6'>
            {centerContent[tab] || <p>page not found</p>}

          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </>
  )
}

export default HomePage