import styles from './menu.module.css';
import logo from '../../../assets/instalogo.png';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import AuthenticationContext from '../../Contexts/AuthenticationContext/AuthenticationContext'
const Menu = ({ onSelectTab, activeTab }) => {
  const { emailContext } = useContext(AuthenticationContext);
  const email = emailContext?.emailForOtp;

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      if (!email) return;
      try {
        const response = await axios.get(`http://localhost:5000/instagram/getusernames/${email}`);
        setProfilePicture(response.data.profilePic);
      } catch (error) {
        console.error('Failed to load profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, [email]);

  const menuItems = [
    { name: "home", icon: "fa-house", label: "Home" },
    { name: "search", icon: "fa-magnifying-glass", label: "Search" },
    { name: "explore", icon: "fa-compass", label: "Explore" },
    { name: "reels", icon: "fa-brands fa-square-youtube", label: "Reels" },
    { name: "messages", icon: "fa-brands fa-facebook-messenger", label: "Messages" },
    { name: "notifications", icon: "fa-regular fa-heart", label: "Notifications" },
    { name: "create", icon: "fa-regular fa-square-plus", label: "Create" },
    { name: "dashboard", icon: "fa-square-poll-horizontal", label: "Dashboard" },
    { name: "profile", icon: "fa-circle-user", label: "Profile", isProfile: true },
    { name: "menu", icon: "fa-bars", label: "Menu" },
  ];
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => onSelectTab(item.name)}
                className={`${styles.link} ${activeTab === item.name ? styles.active : ""}`}
              >
                {item.isProfile && profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className={styles.profileIcon}
                  />
                ) : (
                  <i className={`fa-solid ${item.icon}`}></i>
                )}
                {item.label}
              </button>
            </li>
          ))}
        </ul>


      </div>
    </>
  );
};


// const Menu = ({ onSelectTab, activeTab }) => {
//   const menuItems = [
//     { name: "home", icon: "fa-house", label: "Home" },
//     { name: "search", icon: "fa-magnifying-glass", label: "Search" },
//     { name: "explore", icon: "fa-compass", label: "Explore" },
//     { name: "reels", icon: "fa-brands fa-square-youtube", label: "Reels" },
//     { name: "messages", icon: "fa-brands fa-facebook-messenger", label: "Messages" },
//     { name: "notifications", icon: "fa-regular fa-heart", label: "Notifications" },
//     { name: "create", icon: "fa-regular fa-square-plus", label: "Create" },
//     { name: "dashboard", icon: "fa-square-poll-horizontal", label: "Dashboard" },
//     { name: "profile", icon: "fa-circle-user", label: "Profile", isProfile: true },
//     { name: "menu", icon: "fa-bars", label: "Menu" },
//   ];

//   return (
//     <>
//       <div className={styles.sidebar}>
//         <div className={styles.logo}>
//           <img src={logo} alt="logo" />
//         </div>
//         <ul>
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <button
//                 onClick={() => onSelectTab(item.name)}
//                 className={`${styles.link} ${activeTab === item.name ? styles.active : ""}`}
//               >
//                 {item.isProfile && profilePicture ? (
//                   <img
//                     src={profilePicture}
//                     alt="Profile"
//                     className={styles.profileIcon}
//                   />
//                 ) : (
//                   <i className={`fa-solid ${item.icon}`}></i>
//                 )}
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </>
//   );
// };


export default Menu;
