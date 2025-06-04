import styles from './menu.module.css';
import logo from '../../../assets/instalogo.png';

const Menu = ({ onSelectTab, activeTab }) => {
  const menuItems = [
    { name: "home", icon: "fa-house", label: "Home" },
    { name: "search", icon: "fa-magnifying-glass", label: "Search" },
    { name: "explore", icon: "fa-compass", label: "Explore" },
    { name: "reels", icon: "fa-brands fa-square-youtube", label: "Reels" },
    { name: "messages", icon: "fa-brands fa-facebook-messenger", label: "Messages" },
    { name: "notifications", icon: "fa-regular fa-heart", label: "Notifications" },
    { name: "create", icon: "fa-regular fa-square-plus", label: "Create" },
    { name: "dashboard", icon: "fa-square-poll-horizontal", label: "Dashboard" },
    { name: "profile", icon: "fa-circle-user", label: "Profile" },
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
                className={`${styles.link} ${activeTab === item.name ? styles.active : ""}`} >
                <i className={`fa-solid ${item.icon}`}></i> {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default Menu;
