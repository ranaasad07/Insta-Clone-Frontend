import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.css';
import logo from '../../../assets/instalogo.png';
import home from '../../../assets/home.png';
import search from '../../../assets/search.png';
import explore from '../../../assets/explores.png';
import reels from '../../../assets/reels.png';
import messages from '../../../assets/messages.png';
import notifications from '../../../assets/notifications.png';
import create from '../../../assets/create.png';
import dashboard from '../../../assets/dashboard.png';
import bar from '../../../assets/bar.png';

const Menu = ({ onSelectTab }) => {
  console.log(onSelectTab);
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <button onClick={() => onSelectTab("home")} className={styles.link}>
              <img src={home} alt="_" /> Home
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("search")} className={styles.link}>
              <img src={search} alt="_" /> Search
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("explore")} className={styles.link}>
              <img src={explore} alt="_" /> Explore
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("reels")} className={styles.link}>
              <img src={reels} alt="_" /> Reels
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("messages")} className={styles.link}>
              <img src={messages} alt="_" /> Messages
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("notifications")} className={styles.link}>
              <img src={notifications} alt="_" /> Notifications
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("create")} className={styles.link}>
              <img src={create} alt="_" /> Create
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("dashboard")} className={styles.link}>
              <img src={dashboard} alt="_" /> Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("profile")} className={styles.link}>
              <img src={bar} alt="_" /> Profile
            </button>
          </li>
          <li>
            <button onClick={() => onSelectTab("menu")} className={styles.link}>
              <img src={bar} alt="_" /> Menu
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
