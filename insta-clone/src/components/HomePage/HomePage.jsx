import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import Menu from './MenuBar/Menu';
import styles from './homepage.module.css';
import Profile from './Profile/Profile';
import Home from './HomePost/HomePost';
import splashlogo from '../../assets/splashlogo.png';
import meta from '../../assets/meta.png';
import AuthenticationContext from '../Contexts/AuthenticationContext/AuthenticationContext';
const CLOUDINARY_IMAGE_URL = 'https://api.cloudinary.com/v1_1/dbexemhmr/image/upload';
const CLOUDINARY_VIDEO_URL = 'https://api.cloudinary.com/v1_1/dbexemhmr/video/upload';

const CLOUDINARY_UPLOAD_PRESET = 'sajawal_unsigned_preset';

const HomePage = () => {
  const [tab, setTab] = useState("home");
  const [showSplash, setShowSplash] = useState(true);
  const [uploadPost, setUploadPost] = useState(false);
  const [uploadContent, setUploadContent] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isNextStep, setIsNextStep] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState('');
  const [userName, setUsername] = useState('');
  const [captions, setCaptions] = useState('');
  const [Id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const { emailContext } = useContext(AuthenticationContext)
  const mail = emailContext?.emailForOtp;
  const popupRef = useRef(null);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/instagram/getuserprofileAndusername/${mail}`);
      setUserProfilePic(response.data.profilePic);
      setUsername(response.data.username);
      setId(response.data.id);
    } catch (err) {
      alert('Error fetching user profile');
      console.error(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (newTab) => {
    if (newTab === 'triggerUploadPopup') {
      setUploadPost(true);
    } else {
      setTab(newTab);
      resetUploadState();
    }
  };

  const resetUploadState = () => {
    setUploadPost(false);
    setUploadContent(null);
    setPreviewUrl(null);
    setIsNextStep(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        resetUploadState();
      }
    };

    if (uploadPost) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [uploadPost]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const centerContent = {
    profile: <Profile onSelectTab={handleTabChange} />,
    home: <Home onSelectTab={handleTabChange} />,
  };

  const handleSharePost = async () => {
    if (!uploadContent || !captions.trim()) {
      alert('Please select content and write a caption.');
      return;
    }

    setLoading(true);
    setIsNextStep(false);

    const formData = new FormData();
    formData.append('file', uploadContent);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const isVideo = uploadContent.type.startsWith('video');
      const uploadUrl = isVideo ? CLOUDINARY_VIDEO_URL : CLOUDINARY_IMAGE_URL;

      const uploadRes = await axios.post(uploadUrl, formData);

      const mediaUrl = uploadRes.data.secure_url;

      await axios.post('http://localhost:5000/instagram/uploadPost', {
        userId: Id,
        mediaUrl,
        caption: captions,
        mediaType: uploadContent.type.startsWith('image') ? 'image' : 'video',
      });

      setTimeout(() => {
        setLoading(false);
        resetUploadState();
        setTab("home");
      }, 1000);

    } catch (error) {
      setLoading(false);
      console.error('Error uploading post:', error);
      alert('Failed to share post. Try again.');
    }
  };

  return (
    <>
      {showSplash ? (
        <div className={styles.overlay}>
          <div className={styles.logo}><img src={splashlogo} alt="Instagram" /></div>
          <div className={styles.content}>
            <h6>from</h6>
            <span><img src={meta} alt="Meta" /></span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Menu activeTab={tab} onSelectTab={handleTabChange} />
            </div>
            <div className="col-8">
              {centerContent[tab] || (
                <h4>Component creation is in progress... Please stay with us for updates.</h4>
              )}
              {uploadPost && (
                <div className={styles.popupOverlay}>
                  <div
                    ref={popupRef}
                    className={`${styles.uploadPopup} ${loading ? styles.loadingPopup : isNextStep ? styles.expandedPopup : ''}`}
                  >
                    {loading ? (
                      <div className={styles.spinnerContainer}>
                        <div className={styles.spinner}></div>
                      </div>
                    ) : (
                      <>
                        <div className={styles.popupHeader}>
                          <h6>Create new post</h6>
                          {previewUrl && (
                            <>
                              {!isNextStep ? (
                                <button
                                  className={styles.nextButton}
                                  key="next"
                                  onClick={async () => {
                                    await fetchUserProfile();
                                    setIsNextStep(true);
                                  }}
                                >
                                  Next
                                </button>
                              ) : (
                                <button
                                  className={styles.nextButton}
                                  key="share"
                                  onClick={handleSharePost}
                                >
                                  Share
                                </button>
                              )}
                            </>
                          )}
                        </div>

                        {!previewUrl ? (
                          <div className={styles.uploadContent}>
                            <i className="fa-regular fa-images"></i>
                            <h5>Drag photos and videos here</h5>
                            <label htmlFor="fileUpload" className={styles.uploadButton}>
                              Select from computer
                            </label>
                            <input
                              id="fileUpload"
                              type="file"
                              accept="image/*,video/*"
                              style={{ display: "none" }}
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  const url = URL.createObjectURL(file);
                                  setUploadContent(file);
                                  setPreviewUrl(url);
                                  setIsNextStep(false);
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <div className={styles.previewStep}>
                            <div className={styles.previewMediaContainer}>
                              {uploadContent.type.startsWith('image') ? (
                                <img src={previewUrl} alt="Preview" className={styles.previewMedia} />
                              ) : (
                                <video controls className={styles.previewMedia}>
                                  <source src={previewUrl} type={uploadContent.type} />
                                  Your browser does not support the video tag.
                                </video>
                              )}
                            </div>

                            {isNextStep && (
                              <div className={styles.captionArea}>
                                <div className={styles.userProfile}>
                                  <div className={styles.photo}><img src={userProfilePic} alt="_" /></div>
                                  <div className={styles.username}><p>{userName}</p></div>
                                </div>
                                <textarea
                                  className={styles.captionInput}
                                  placeholder="Write a caption..."
                                  value={captions}
                                  onChange={(e) => setCaptions(e.target.value)}
                                ></textarea>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
