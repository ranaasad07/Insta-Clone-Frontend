import styles from './editchild.module.css';

const Setting = ({ onSelectButton, activeButton }) => {
    const settingData = [
        { name: 'editProfile', icon: 'fa-regular fa-circle-user', label: 'Edit profile' },
        { name: 'notifications', icon: 'fa-regular fa-bell', label: 'Notifications' },
        { name: 'professionalsAccount', icon: 'fa-regular fa-calendar-days', label: 'Professionals Accounts' },
        { name: 'creatortoolsandcontrol', icon: 'fa-solid fa-square-poll-horizontal', label: 'Creator tools and control' },
        { name: 'accountPrivacy', icon: 'fa-solid fa-lock', label: 'Account privacy' },
        { name: 'closeFriends', icon: 'fa-solid fa-star', label: 'Close Friends' },
        { name: 'blocked', icon: 'fa-solid fa-circle-half-stroke', label: 'Blocked' },
        { name: 'hide', icon: 'fa-solid fa-eye-slash', label: 'Hide story and live' },
        { name: 'messagesandstoryreplies', icon: 'fa-brands fa-facebook-messenger', label: 'Messages and story replies' },
        { name: 'tagsandmentions', icon: 'fa-solid fa-at', label: 'Tags and mentions' },
        { name: 'comments', icon: 'fa-solid fa-comment', label: 'Comments' },
        { name: 'sharing', icon: 'fa-solid fa-share', label: 'Sharing and reuse' },
        { name: 'restrictAccounts', icon: 'fa-solid fa-prescription-bottle', label: 'Restrict Accounts' },
        { name: 'hiddenWords', icon: 'fa-solid fa-a', label: 'Hidden words' },
        { name: 'mutedAccounts', icon: 'fa-solid fa-volume-xmark', label: 'Muted Accounts' },
        { name: 'content', icon: 'fa-solid fa-photo-film', label: 'Content preferences' },
        { name: 'likeshareCounts', icon: 'fa-regular fa-heart', label: 'Like shares and counts' },
        { name: 'subscriptions', icon: 'fa-solid fa-crown', label: 'Subscriptions' },
        { name: 'archive', icon: 'fa-solid fa-arrow-down', label: 'Archive and downloading' },
        { name: 'accessibility', icon: 'fa-brands fa-accessible-icon', label: 'Accessibility' },
        { name: 'language', icon: 'fa-solid fa-language', label: 'Language' },
        { name: 'webscreens', icon: 'fa-solid fa-desktop', label: 'Websites and screens' },
        { name: 'familycenter', icon: 'fa-solid fa-people-roof', label: 'Family center' },
        { name: 'help', icon: 'fa-brands fa-hire-a-helper', label: 'Help' },
        { name: 'privacycenter', icon: 'fa-solid fa-shield-halved', label: 'Privacy center' },
        { name: 'accountstatus', icon: 'fa-solid fa-user', label: 'Account status' }
    ];

    return (
        <>
            <div className={styles.setting}>
                <h4>Settings</h4>
                <ul>
                    {settingData.map((data) => (
                        <li key={data.name}>
                            <button
                                onClick={() => onSelectButton(data.name)}
                                className={`${styles.buttonz} ${activeButton === data.name ? styles.active : ""}`}>
                                <i className={data.icon}></i> {data.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Setting