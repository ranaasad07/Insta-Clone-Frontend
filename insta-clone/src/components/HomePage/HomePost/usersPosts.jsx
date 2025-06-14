import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './homepost.module.css';
import { Link } from 'react-router-dom';

const ActualPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/instagram/gettingAllPosts');
        setUserPosts(response.data.Posts);
      } catch (err) {
        console.error("Error fetching posts", err);
        alert("Error fetching posts");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {userPosts.map((post, index) => (
        <div key={index} className={styles.posts}>
          <div className={styles.userInfo}>
            <img
              src={post.userId?.profilePicture || 'default-profile.jpg'}
              alt="User profile"
              className={styles.profilePic}
            />
            <p className={styles.username}>{post.userId?.username || 'Unknown User'}</p>
          </div>

          {post.mediaUrl.endsWith('.mp4') || post.mediaUrl.includes('/video/upload/') ? (
            <video controls className={styles.postImage}>
              <source src={post.mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={post.mediaUrl} alt="Post" className={styles.postImage} />
          )}

          <p>
            <span style={{ fontWeight: 'bold', fontSize: '14px', margin: '0px 10px' }}>
              {post.userId?.username}
            </span>
            {post.caption}
          </p>
        </div>
      ))}

    </div>
  );
};

export default ActualPosts;
