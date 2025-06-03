import React from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.css';
import logo from '../../../assets/instalogo.png'
import home from '../../../assets/home.png'
import search from '../../../assets/search.png'
import explore from '../../../assets/explores.png'
import reels from '../../../assets/reels.png'
import messages from '../../../assets/messages.png'
import notifications from '../../../assets/notifications.png'
import create from '../../../assets/create.png'
import dashboard from '../../../assets/dashboard.png'
import bar from '../../../assets/bar.png'
const Menu = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}><img src={logo} alt="lgog" /></div>
        <ul>
          <li>
            <Link to='' className={styles.link}><img src={home} alt="_" /> Home</Link>
          </li>
          <li><Link to='' className={styles.link}><img src={search} alt="_" />  Search</Link></li>
          <li><Link to='' className={styles.link}><img src={explore} alt="_" />  Explore</Link></li>
          <li><Link to='' className={styles.link}><img src={reels} alt="_" /> Reels</Link></li>
          <li><Link to='' className={styles.link}><img src={messages} alt="_" />  Messages</Link></li>
          <li><Link to='' className={styles.link}><img src={notifications} alt="_" />  Notifications</Link></li>
          <li> <Link to='' className={styles.link}><img src={create} alt="_" />  Create</Link></li>
          <li> <Link to='' className={styles.link}><img src={dashboard} alt="_" />  Dashboard</Link></li>
          <li><Link to='' className={styles.link}><img src={_} alt="_" />  Profile</Link></li>
          <li><Link to='' className={styles.link}><img src={bar} alt="_" />  Menu</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Menu