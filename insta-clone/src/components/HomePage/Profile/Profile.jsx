import React, { useState } from 'react'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import UserInfo from './UserInfo/UserInfo'
import UserPost from './UserPosts/UserPost'
import EditProfile from './EditProfile/EditProfile'
const Profile = () => {
    const [tabp, setTabp] = useState(false)
    
    //   const centerContentp = {
    //     // profile: <Profile onSelectTabp={setTabp} />,
    //     editProfile: <EditProfile></EditProfile>
    //     // editProfile: <UserInfo onSelectTab={setTab}/>,
    //   }
      if(tabp){
        return <EditProfile></EditProfile>
      }
    
  return (
    <>
    <p>hiiiiiiiiiii</p>
    {/* {centerContentp[tabp] ||} */}
{/*  photo */}
<ProfilePhoto></ProfilePhoto>

{/* information : name  , posts, folllowrrs , follwing , fullname , bio , edit profile. */}
<UserInfo onSelectTabp={setTabp}></UserInfo>

{/* posts */}
<UserPost></UserPost>
    </>
  )
}

export default Profile